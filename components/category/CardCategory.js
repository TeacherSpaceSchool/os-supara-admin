import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardCategoryStyle from '../../src/styleMUI/category/cardCategory'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { onoffCategory, addCategory, setCategory, deleteCategory } from '../../src/gql/category'
import TextField from '@material-ui/core/TextField';
import Link from 'next/link';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dynamic from 'next/dynamic'
import * as snackbarActions from '../../redux/actions/snackbar'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Confirmation = dynamic(
    () => import('../dialog/Confirmation')
)

const CardCategory = React.memo((props) => {
    const classes = cardCategoryStyle();
    const { element, setList } = props;
    const { profile } = props.user;
    const { isMobileApp } = props.app;
    //addCard
    let [preview, setPreview] = useState(element?element.image:'/static/add.png');
    let [image, setImage] = useState(undefined);
    let handleChangeImage = ((event) => {
        setImage(event.target.files[0])
        setPreview(URL.createObjectURL(event.target.files[0]))
    })
    let [name, setName] = useState(element?element.name:'');
    let handleName =  (event) => {
        setName(event.target.value)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            {
                name!=='Не задано'&&setList!=='all'&&profile.role === 'admin' ?
                    <>
                    <CardActionArea>
                        <CardContent>
                            <div className={classes.line}>
                                <label htmlFor={element?element._id:'add'}>
                                    <LazyLoadImage
                                        effect='blur'
                                        className={classes.media}
                                        src={preview}
                                        alt={'Изменить'}
                                    />
                                </label>
                               <TextField
                                   label='Имя'
                                   value={name}
                                   className={isMobileApp?classes.inputM:classes.inputD}
                                   onChange={handleName}
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
                                    if(image!==undefined)editElement.image = image
                                    const action = async() => {
                                        setList((await setCategory(editElement)).categorys)
                                    }
                                    setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                }} size='small' color='primary'>
                                    Сохранить
                                </Button>
                                <Button onClick={async()=>{
                                    const action = async() => {
                                        setList((await onoffCategory([element._id])).categorys)
                                    }
                                    setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                }} size='small' color='primary'>
                                    {element.status==='active'?'Отключить':'Включить'}
                                </Button>
                                <Button size='small' color='primary' onClick={()=>{
                                    const action = async() => {
                                        setList((await deleteCategory([element._id])).categorys)
                                    }
                                    setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                }}>
                                    Удалить
                                </Button>
                        <Link href='/subcategory/[id]' as={`/subcategory/${element._id}`}>
                            <Button size='small' color='primary'>
                                Перейти
                            </Button>
                        </Link>
                    </>:
                    <Button onClick={async()=> {
                        if (image !== undefined && name.length > 0) {
                            setImage(undefined)
                            setPreview('/static/add.png')
                            setName('')
                            const action = async() => {
                                setList((await addCategory({image: image, name: name})).categorys)
                            }
                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        } else
                            showSnackBar('Заполните все поля')

                    }
                    } size='small' color='primary'>
                        Добавить
                    </Button>}
                    </CardActions>
                    <input
                        accept='image/*'
                        style={{ display: 'none' }}
                        id={element?element._id:'add'}
                        type='file'
                        onChange={handleChangeImage}
                    />
                    </>

                    :
                    name!=='Не задано'?
                        <CardActionArea>
                            <Link href='/subcategory/[id]' as={`/subcategory/${element._id}`}>
                                <div className={classes.line}>
                                    <label htmlFor='contained-button-file'>
                                        <LazyLoadImage
                                            effect='blur'
                                            className={classes.media}
                                            src={element.image}
                                            alt={element.name}
                                        />
                                    </label>
                                    <h3 className={isMobileApp?classes.inputM:classes.inputD}>
                                        {element.name}
                                    </h3>
                                </div>
                            </Link>
                        </CardActionArea>
                        :
                        name==='Не задано'&&profile.role === 'admin'?
                            <CardActionArea>
                                <Link href='/subcategory/[id]' as={`/subcategory/${element._id}`}>
                                    <div className={classes.line}>
                                        <label htmlFor='contained-button-file'>
                                            <LazyLoadImage
                                                effect='blur'
                                                className={classes.media}
                                                src={element.image}
                                                alt={element.name}
                                            />
                                        </label>
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