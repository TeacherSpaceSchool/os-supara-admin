import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardStyle from '../src/styleMUI/card'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { setRoute, addRoute, deleteRoute } from '../src/gql/route'
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import Confirmation from './dialog/Confirmation'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import VerticalAlignBottom from '@material-ui/icons/VerticalAlignBottom';
import VerticalAlignTop from '@material-ui/icons/VerticalAlignTop';
import Delete from '@material-ui/icons/Delete';
import divisions from '../pages/divisions';

const CardApplicationRoute = React.memo((props) => {
    const classes = cardStyle();
    const { element, roles, setList, idx, list, divisionsForRoute } = props;
    const { isMobileApp } = props.app;
    let [newRoles, setNewRoles] = useState(element?element.roles:[]);
    let [freeRoles, setFreeRoles] = useState(roles);
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    useEffect(()=>{
        (async()=>{
            freeRoles = roles.filter(role=>!newRoles.includes(role))
            setFreeRoles([...freeRoles])
        })()
    },[newRoles,])
    let [division, setDivision] = useState(element?element.division:undefined);
    return (
            <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.column}>
                            <Autocomplete
                                defaultValue={division}
                                className={classes.input}
                                options={divisionsForRoute}
                                getOptionLabel={option => option.name}
                                onChange={(event, newValue) => {
                                    setDivision(newValue)
                                }}
                                noOptionsText='Ничего не найдено'
                                renderInput={params => (
                                    <TextField {...params} label='Выберите категорию' variant='outlined' fullWidth />
                                )}
                            />
                            {
                                newRoles.map((element, idx) =>
                                    <div style={{alignItems: 'end'}} key={idx} className={classes.row}>
                                        <Autocomplete
                                            value={newRoles[idx]}
                                            className={classes.halfInput}
                                            options={freeRoles}
                                            getOptionLabel={option => option}
                                            onChange={(event, newValue) => {
                                                newRoles[idx]=newValue
                                                setNewRoles([...newRoles])
                                            }}
                                            noOptionsText='Ничего не найдено'
                                            renderInput={params => (
                                                <TextField {...params} label='Выберите роль' variant='outlined' fullWidth />
                                            )}
                                        />
                                            <Tooltip title='Вверх'>
                                                <IconButton
                                                    onClick={()=>{
                                                        if(idx!==0) {
                                                            let _newRoles = [...newRoles]
                                                            _newRoles[idx] = newRoles[idx - 1]
                                                            _newRoles[idx - 1] = newRoles[idx]
                                                            setNewRoles([..._newRoles])
                                                        }
                                                    }}
                                                    color='primary'
                                                >
                                                    <VerticalAlignTop />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title='Вниз'>
                                                <IconButton
                                                    onClick={()=>{
                                                        if(idx!==(newRoles.length-1)) {
                                                            let _newRoles = [...newRoles]
                                                            _newRoles[idx] = newRoles[idx + 1]
                                                            _newRoles[idx + 1] = newRoles[idx]
                                                            setNewRoles([..._newRoles])
                                                        }
                                                    }}
                                                    color='primary'
                                                >
                                                    <VerticalAlignBottom />
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title='Удалить'>
                                                <IconButton
                                                    onClick={()=>{
                                                        newRoles.splice(idx, 1)
                                                        setNewRoles([...newRoles])
                                                    }}
                                                    color='primary'
                                                >
                                                    <Delete />
                                                </IconButton>
                                            </Tooltip>
                                    </div>
                                )
                            }
                            <Button onClick={async()=>{
                                setNewRoles([...newRoles, ''])
                            }} size='small' color='primary'>
                                Добавить роль
                            </Button>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        element!==undefined?
                            <>
                            <Button onClick={async()=>{
                                let editElement = {_id: element._id, roles: newRoles}
                                if(division&&division._id!==element.division._id)editElement.division = division._id
                                const action = async() => {
                                    await setRoute(editElement)
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }} size='small' color='primary'>
                                Сохранить
                            </Button>
                            <Button size='small' color='primary' onClick={()=>{
                                const action = async() => {
                                    await deleteRoute([element._id])
                                    list.splice(idx, 1);
                                    setList([...list])
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }}>
                                Удалить
                            </Button>
                            </>:
                            <Button onClick={async()=> {
                                if (division) {
                                    const action = async() => {
                                        let res = (await addRoute({roles: newRoles, division: division._id})).addRoute
                                        setNewRoles([])
                                        setDivision(undefined)
                                        setList([res, ...list])
                                    }
                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                } else
                                    showSnackBar('Заполните все поля')

                            }
                            } size='small' color='primary'>
                                Добавить
                            </Button>}
                </CardActions>
            </Card>
    );
})

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardApplicationRoute)