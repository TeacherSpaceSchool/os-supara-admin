import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardAdsStyle from '../../src/styleMUI/ads/cardAds'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { deleteAds, addAds, setAds } from '../../src/gql/ads'
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Confirmation from '../dialog/Confirmation'

const CardAds = React.memo((props) => {
    const classes = cardAdsStyle();
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
    let [url, setUrl] = useState(element?element.url:'');
    let handleUrl =  (event) => {
        setUrl(event.target.value)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    return (
          <> {
                profile.role === 'admin' ?
                    <Card className={isMobileApp?classes.cardM:classes.cardD}>
                        <CardActionArea>
                            <label htmlFor={element?element._id:'add'}>
                                <LazyLoadImage
                                    placeholderSrc='/static/add.png'
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
                                    label='URL'
                                    value={url}
                                    className={isMobileApp?classes.inputM:classes.inputD}
                                    onChange={handleUrl}
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
                                        if(url.length>0&&url!==element.url)editElement.url = url
                                        if(image!==undefined)editElement.image = image
                                        const action = async() => {
                                            setList((await setAds(editElement)).adss)
                                        }
                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    }} size='small' color='primary'>
                                        Сохранить
                                    </Button>
                                    <Button onClick={async()=>{
                                        const action = async() => {
                                            setList((await deleteAds([element._id])).adss)
                                        }
                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    }} size='small' color='primary'>
                                        Удалить
                                    </Button>
                                    </>
                                    :
                                    <Button onClick={async()=> {
                                        if (image !== undefined && url.length > 0 && title.length > 0) {
                                            setImage(undefined)
                                            setPreview('/static/add.png')
                                            setTitle('')
                                            setUrl('')
                                            const action = async() => {
                                                setList((await addAds({image: image, url: url, title: title})).adss)
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
                    </Card>
                    :
                    element!==undefined?
                        <div className={isMobileApp?classes.cardM:classes.cardD}>
                            <a href={element.url}>
                                <LazyLoadImage
                                    placeholderSrc='/static/add.png'
                                    effect='blur'
                                    className={isMobileApp?classes.mediaM:classes.mediaD}
                                    alt={element.title}
                                    src={element.image}
                                />
                            </a>
                        </div>
                        :null
            }</>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardAds)