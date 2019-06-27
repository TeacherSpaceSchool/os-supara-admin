import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as tableActions from '../../redux/actions/table'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { mainWindow } from '../../App'
const width = mainWindow===undefined||mainWindow.current.offsetWidth>800? 500: (mainWindow.current.offsetWidth-144);

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: width,
    },
    list: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: width,
        maxHeight: '400px',
        overflow: 'scroll'
    },
    error_message: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        color: 'red',
        fontWeight: 'bold'
    },
    urls: {
        margin: theme.spacing.unit,
        width: width,
        maxHeight: 100,
        overflow: 'auto'
    },
    menu: {
        width: 200,
    }
});

const Sign =  React.memo(
    (props) =>{
        const { classes } = props;
        const { showMiniDialog } = props.mini_dialogActions;
        const { setTypeStatistic } = props.tableActions;
        const { typeStatistic } = props.table;
        let types = ['регион', 'точка', 'организатор', 'реализатор'];
        let [type, setType] = useState(typeStatistic.type);
        let [list, setList] = useState([]);
        let handleType =  (event) => {
            setType(event.target.value)
        };
        let [search, setSearch] = useState('');
        let handleSearch =  (event) => {
            setSearch(event.target.value)
        };
        useEffect(async ()=>{
            let data = [];
            if(type==='регион'){
                data = await tableActions.getDataSimple({name: 'РегионИмя'})
                data.unshift('все')
            }
            else if(type==='точка'){
                data = await tableActions.getDataSimple({name: 'ТочкаИмя'})
                data.unshift('все')
            }
            else if(type==='организатор'){
                data = await tableActions.getDataSimple({name: 'ОрганизаторИмя'})
                data.unshift('все')
            }
            else if(type==='реализатор'){
                data = await tableActions.getDataSimple({name: 'РеализаторИмя'})
                data.unshift('все')
            }
            setList(data)
        },[type])
        return (
            <div>
                <TextField
                    select
                    label='Тип'
                    className={classes.textField}
                    value={type}
                    onChange={handleType}
                    SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    margin='normal'
                >
                    {types.map(option => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))
                    }
                </TextField>
                <br/>
                <TextField
                    label='Поиск'
                    type='login'
                    className={classes.textField}
                    margin='normal'
                    value={search}
                    onChange={handleSearch}
                />
                <br/>
                <div className={classes.list} >
                    {list!=undefined&&list.length>0?
                        list.map((element)=> {
                            if(element.toLowerCase().includes(search.toLowerCase()))
                                return (
                                    <Button variant="outlined" onClick={()=>{setTypeStatistic({type: type, what: element}); showMiniDialog(false)}} className={classes.button}>
                                        {element}
                                    </Button>
                                )
                        }):null
                    }
                </div>
                <div>
                    <Button variant='contained' color='secondary' onClick={()=>{showMiniDialog(false)}} className={classes.button}>
                        Отмена
                    </Button>
                </div>
            </div>
        );
    }
)

function mapStateToProps (state) {
    return {
        mini_dialog: state.mini_dialog,
        table: state.table,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        tableActions: bindActionCreators(tableActions, dispatch),
    }
}

Sign.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Sign));