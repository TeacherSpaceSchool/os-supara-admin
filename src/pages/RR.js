import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as tableActions from '../redux/actions/table'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import TextField from '@material-ui/core/TextField';
import { mainWindow } from '../App'

import { DatePicker } from 'material-ui-pickers';
export const datePicker = React.createRef();

const width = mainWindow===undefined||mainWindow.current.offsetWidth>800? 500: 240;
const width1 = mainWindow===undefined||mainWindow.current.offsetWidth>800? 240: 120;
const styles = theme => ({
    button: {
        width: '200px',
        margin: theme.spacing.unit,
    },
    textFieldSmall: {
        display: 'inline-block',
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: width1
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: width,
    },
    textFieldDate: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: width/2,
    },
    urls: {
        margin: theme.spacing.unit,
        width: width,
        maxHeight: 100,
        overflow: 'auto'
    },
    message: {
        width: width,
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        marginLeft: 'calc((100% - '+width+'px)/2)',
        marginRight: 'calc((100% - '+width+'px)/2)'
    },
    MuiPickersToolbar: {
        toolbar: {
            backgroundColor: '#000',
        },
    },
    MuiPickersModal: {
        dialogAction: {
            color: '#000',
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
});

const Plan = React.memo(
    (props) =>{
        const { classes } = props;
        const { status } = props.user;
        let [list, setList] = useState([]);
        let [date, setDate] = useState(new Date());
        if (!(status.status==='active'&&['admin', 'организатор', 'реализатор'].includes(status.role))) {
            props.history.push('/')
        }
        useEffect(()=>{
            async function fetchData() {
                let _data = await tableActions.getDataSimple({name: 'Рейтинг реализаторов', data:{date: date}})
                if(_data!==undefined)
                    setList(_data)
            }
            fetchData();
        },[date])
        let [search, setSearch] = useState('');
        let handleSearch =  (event) => {
            setSearch(event.target.value)
        };
        return (
            <div>
                <br/>
                <h1>Рейтинг точек</h1>
                <br/>
                {status.role==='admin'?
                    <>
                    <DatePicker
                        views={['year', 'month']}
                        label='Дата'
                        className={classes.textField}
                        value={date}
                        onChange={setDate}
                    />
                    <br/>
                    </>
                    :
                    null
                }
                {list.length>0?
                    <>
                    <TextField
                        label='Поиск'
                        type='login'
                        className={classes.textField}
                        margin='normal'
                        value={search}
                        onChange={handleSearch}
                    />
                    <br/>
                    <br/>
                    {
                        list.map((element)=>{
                            if(element.name.toLowerCase().includes(search.toLowerCase()))
                                return(
                                    <center className={classes.message} style={{textAlign: 'left'}}>
                                        {(element.number)+'. '}
                                        <b>{element.name+': '}</b>
                                        {element.score}
                                        <br/>
                                        <br/>
                                    </center>
                                )
                        })
                    }
                    </>
                    :
                    null
                }

            </div>
        );
    })

function mapStateToProps (state) {
    return {
        user: state.user,
        table: state.table,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        tableActions: bindActionCreators(tableActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

Event.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Plan));
