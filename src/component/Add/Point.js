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
        const { showMiniDialog } = props.mini_dialogActions;
        const { setSelected, addData, setData } = props.tableActions;
        const { selected, data, page, search, sort } = props.table;
        const { profile } = props.app;
        let [name, setName] = useState(selected!==-1?data[selected][0]:'');
        let handleName =  (event) => {
            let value = event.target.value
            value = value.replace(' - ', '-')
            setName(value)
        };
        let [region, setRegion] = useState(selected!==-1?data[selected][1]:'');
        let handleRegion =  (event) => {
            setRegion(event.target.value)
        };
        let [regions, setRegions] = useState([]);
        useEffect(async ()=>{
            let data = await tableActions.getDataSimple({name: 'РегионИмя'})
            setRegions(data)
            if(props.user.status.role==='организатор') setRegion(profile.region)
        },[])
        const { classes } = props;
        return (
            <div>
                <TextField
                    label='название'
                    type='login'
                    className={classes.textField}
                    margin='normal'
                    value={name}
                    onChange={handleName}
                />
                <br/>
                {selected!==-1||props.user.status.role==='организатор'?
                    <div className="textField">{region}</div>
                    :
                    <TextField
                        select
                        label='регион'
                        className={classes.textField}
                        value={region}
                        onChange={handleRegion}
                        SelectProps={{
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin='normal'
                    >
                        {regions.map(option => (
                            <MenuItem key={option} value={option}>
                                {option}
                            </MenuItem>
                        ))
                        }
                    </TextField>
                }
                <br/>
                <div>
                    <Button variant='contained' color='primary' onClick={()=>{
                        if(selected===-1)
                            addData({search: search, sort: sort, page: page, name: 'Точка',  data: {name: name.trim(), region: region}});
                        else
                            setData({id: data[selected][0], search: search, sort: sort, page: page, name: 'Точка', data: {name: name.trim(), region: region}});
                        setSelected(-1)
                        showMiniDialog(false)}} className={classes.button}>
                        Сохранить
                    </Button>
                    <Button variant='contained' color='secondary' onClick={()=>{setSelected(-1); showMiniDialog(false)}} className={classes.button}>
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
        user: state.user,
        table: state.table,
        app: state.app,
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