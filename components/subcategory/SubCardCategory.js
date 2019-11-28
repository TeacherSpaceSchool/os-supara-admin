import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardCategoryStyle from '../../src/styleMUI/subcategory/cardSubcategory'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { onoffSubCategory, addSubCategory, setSubCategory} from '../../src/gql/subcategory'
import Link from 'next/link';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dynamic from 'next/dynamic'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';

const Confirmation = dynamic(
    () => import('../dialog/Confirmation')
)

const CardCategory = React.memo((props) => {
    const classes = cardCategoryStyle();
    const { element, setList, category, categorys } = props;
    const { profile } = props.user;
    const { isMobileApp } = props.app;
    //addCard
    let [name, setName] = useState(element?element.name:'');
    let handleName =  (event) => {
        setName(event.target.value)
    };
    let [selectCategory, setSelectCategory] = useState(element?element.category:{});
    let handleSelectCategory =  (event) => {
        setSelectCategory({_id: event.target.value, name: event.target.name})
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            {
                profile.role === 'admin' && element._id!=='all'?
                    <>
                    <CardActionArea>
                        <CardContent>
                            <TextField
                                label='Имя'
                                value={name}
                                className={isMobileApp?classes.inputM:classes.inputD}
                                onChange={handleName}
                                inputProps={{
                                    'aria-label': 'description',
                                }}
                            />
                            <br/>
                            <br/>
                            <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                <InputLabel>Категория</InputLabel>
                                <Select
                                    value={selectCategory._id}
                                    onChange={handleSelectCategory}
                                >
                                    {categorys?categorys.map((element)=>
                                        <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                    ):null}
                                </Select>
                            </FormControl>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {
                            element!==undefined?
                                <>
                        <Button onClick={async()=>{
                            let editElement = {_id: element._id}
                            if(name.length>0&&name!==element.name)editElement.name = name
                            if(selectCategory._id!==undefined&&selectCategory._id!==element.category._id)editElement.category = selectCategory._id
                            const action = async() => {
                                setList((await setSubCategory(editElement, category)).subCategorys)
                            }
                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            Сохранить
                        </Button>
                        <Button onClick={async()=>{
                            const action = async() => {
                                setList((await onoffSubCategory([element._id], category)).subCategorys)
                            }
                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            {element.status==='active'?'Отключить':'Включить'}
                        </Button>
                        <Link href='/items/[id]' as={`/items/${element._id}`}>
                            <Button size='small' color='primary'>
                                Перейти
                            </Button>
                        </Link>
                                </>:
                                <Button onClick={async()=> {
                                    if (name.length > 0) {
                                        setName('')
                                        const action = async() => {
                                            let subCategorys = (await addSubCategory({name: name}, category)).subCategorys
                                            setList(subCategorys)
                                        }
                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    } else {
                                        showSnackBar('Заполните все поля')
                                    }
                                }} size='small' color='primary'>
                                    Добавить
                                </Button>}
                    </CardActions>
                    </>
                    :
                    element!==undefined?
                        <CardActionArea>
                            <Link href='/items/[id]' as={`/items/${element._id}`}>
                                <div className={classes.line}>
                                    <h3 className={isMobileApp?classes.inputM:classes.inputD}>
                                        {element.name}
                                    </h3>
                                </div>
                            </Link>
                        </CardActionArea>
                        :null
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(CardCategory)