import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import cardPageListStyle from '../../src/styleMUI/blog/cardBlog'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { deleteBlog, addBlog, setBlog } from '../../src/gql/blog'
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dynamic from 'next/dynamic'
import * as snackbarActions from '../../redux/actions/snackbar'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const Confirmation = dynamic(
    () => import('../dialog/Confirmation')
)

const CardBlog = React.memo((props) => {
    const classes = cardPageListStyle();
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
    let [title, setTitle] = useState(element?element.title:'');
    let handleTitle =  (event) => {
        setTitle(event.target.value)
    };
    let [text, setText] = useState(element?element.text:'');
    let handleText =  (event) => {
        setText(event.target.value)
    };
    let date =element?new Date(element.updatedAt):new Date()
    date = moment(date).format('DD.MM.YYYY HH:mm')
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    let [all, setAll] = useState(false);
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            {
                profile.role === 'admin' ?
                    <>
                    <CardHeader
                        subheader={date}
                    />
                    <CardActionArea>
                        <label htmlFor={element?element._id:'add'}>
                            <LazyLoadImage
                                effect='blur'
                                className={isMobileApp?classes.mediaM:classes.mediaD}
                                src={preview}
                                alt={'Изменить'}
                            />
                        </label>
                        <CardContent>
                            <TextField
                                label='Имя'
                                value={title}
                                className={isMobileApp?classes.inputM:classes.inputD}
                                onChange={handleTitle}
                                inputProps={{
                                    'aria-label': 'description',
                                }}
                            />
                            <br/>
                            <br/>
                            <TextField
                                label='Текст'
                                value={text}
                                className={isMobileApp?classes.inputM:classes.inputD}
                                onChange={handleText}
                                inputProps={{
                                    'aria-label': 'description',
                                }}
                            />
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        {
                            element!==undefined?
                                <>
                                <Button onClick={async()=>{
                            let editElement = {_id: element._id}
                            if(title.length>0&&title!==element.title)editElement.title = title
                            if(text.length>0&&text!==element.text)editElement.text = text
                            if(image!==undefined)editElement.image = image
                            const action = async() => {
                                setList((await setBlog(editElement)).blogs)
                            }
                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            Сохранить
                            </Button>
                                <Button onClick={async()=>{
                                const action = async() => {
                                    setList((await deleteBlog([element._id])).blogs)
                                }
                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }} size='small' color='primary'>
                                Удалить
                            </Button>
                                </>
                                :
                                <Button onClick={async()=> {
                                    if (image !== undefined && text.length > 0 && title.length > 0) {
                                        setImage(undefined)
                                        setPreview('/static/add.png')
                                        setTitle('')
                                        setText('')
                                        const action = async() => {
                                            setList((await addBlog({image: image, text: text, title: title})).blogs)
                                        }
                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    } else {
                                        showSnackBar('Заполните все поля')
                                    }
                                }
                                } size='small' color='primary'>
                                    Добавить
                                </Button>
                        }
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
                    element!==undefined?
                        <>
                        <CardActionArea>
                            <LazyLoadImage
                                effect='blur'
                                className={isMobileApp?classes.mediaM:classes.mediaD}
                                src={element.image}
                                alt={element.title}
                            />
                            <div className={classes.shapka}>
                                <div className={classes.title}>{element.title}</div>
                                <div className={classes.date}>{date}</div>
                            </div>
                            {all?
                                <div style={{fontSize: '1rem', margin: 20, whiteSpace: 'pre-wrap'}}>
                                    {element.text}
                                </div>:null}
                            <Button onClick={async()=> {
                                setAll(!all)
                            }} size='small' color='primary'>
                                {all?'Свернуть':'Посмотреть полностью'}
                            </Button>
                        </CardActionArea>
                        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardBlog)