import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardStyle from '../src/styleMUI/card'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { addItem, deleteItem, setItem } from '../src/gql/item'
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import Confirmation from './dialog/Confirmation'
import Autocomplete from '@material-ui/lab/Autocomplete';

const CardItem = React.memo((props) => {
    const classes = cardStyle();
    const { element, setList, idx, list, categorys } = props;
    const { isMobileApp } = props.app;
    let [name, setName] = useState(element?element.name:'');
    let handleName =  (event) => {
        setName(event.target.value)
    };
    let [category, setCategory] = useState(element?element.category:undefined);
    let [GUID, setGUID] = useState(element?element.GUID:'');
    let handleGUID =  (event) => {
        setGUID(event.target.value)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    return (
            <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.column}>
                            <Autocomplete
                                defaultValue={category}
                                className={classes.input}
                                options={categorys}
                                getOptionLabel={option => option.name}
                                onChange={(event, newValue) => {
                                    setCategory(newValue)
                                }}
                                noOptionsText='Ничего не найдено'
                                renderInput={params => (
                                    <TextField {...params} label='Выберите категорию' variant='outlined' fullWidth />
                                )}
                            />
                            <TextField
                                label='Имя'
                                value={name}
                                className={classes.input}
                                onChange={handleName}
                                inputProps={{
                                    'aria-label': 'description',
                                }}
                            />
                            <TextField
                                label='GUID'
                                value={GUID}
                                className={classes.input}
                                onChange={handleGUID}
                                inputProps={{
                                    'aria-label': 'description',
                                }}
                            />
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    {
                        element!==undefined?
                            <>
                            <Button onClick={async()=>{
                                let editElement = {_id: element._id}
                                if(name.length>0&&name!==element.name)editElement.name = name
                                if(category&&category._id!==element.category._id)editElement.category = category._id
                                if(GUID.length>0&&GUID!==element.GUID)editElement.GUID = GUID
                                const action = async() => {
                                    await setItem(editElement)
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }} size='small' color='primary'>
                                Сохранить
                            </Button>
                            <Button size='small' color='primary' onClick={()=>{
                                const action = async() => {
                                    await deleteItem([element._id])
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
                                if (name.length>0&&category) {
                                    const action = async() => {
                                        let res = (await addItem({GUID: GUID, name: name, category: category._id})).addItem
                                        if(res) {
                                            setGUID('')
                                            setName('')
                                            setCategory(undefined)
                                            setList([res, ...list])
                                        }
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

export default connect(mapStateToProps, mapDispatchToProps)(CardItem)