import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getSubCategorys } from '../../src/gql/subcategory'
import { getEmployment } from '../../src/gql/employment'
import { getOrganizations } from '../../src/gql/organization'
import { getItem, addItem, setItem, onoffItem, deleteItem, favoriteItem } from '../../src/gql/items'
import { addBasket } from '../../src/gql/basket'
import { checkInt } from '../../src/lib'
import itemStyle from '../../src/styleMUI/item/item'
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {
    FacebookShareButton,
    VKShareButton,
    OKShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    FacebookIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
} from 'react-share';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import Router from 'next/router'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import Star from '@material-ui/icons/Star';
import TextField from '@material-ui/core/TextField';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Confirmation from '../../components/dialog/Confirmation'

const Item = React.memo((props) => {
    const classes = itemStyle();
    const { data } = props;
    const router = useRouter()
    const { isMobileApp } = props.app;
    const { profile, authenticated } = props.user;
    let [stock, setStock] = useState(data.item!==null?data.item.stock:'');
    let [name, setName] = useState(data.item!==null?data.item.name:'');
    let [info, setInfo] = useState(data.item!==null?data.item.info:'');
    let [price, setPrice] = useState(data.item!==null?data.item.price:'');
    let [subCategory, setSubCategory] = useState(data.item!==null?data.item.subCategory:{});
    let [status, setStatus] = useState(data.item!==null?data.item.status:'');
    let handleSubCategory =  (event) => {
        setSubCategory({_id: event.target.value, name: event.target.name})
    };
    let [organization, setOrganization] = useState(data.item!==null?data.item.organization:{});
    let handleOrganization =  (event) => {
        setOrganization({_id: event.target.value, name: event.target.name})
    };
    let [hit, setHit] = useState(data.item!==null?data.item.hit:false);
    let [latest, setLatest] = useState(data.item!==null?data.item.latest:false);
    let [preview, setPreview] = useState(data.item!==null?data.item.image:'');
    let [image, setImage] = useState(undefined);
    let [employment, setEmployment] = useState({organization: ''});
    let handleChangeImage = ((event) => {
        setImage(event.target.files[0])
        setPreview(URL.createObjectURL(event.target.files[0]))
    })
    useEffect(()=>{
        (async()=>{
            if(['организация', 'менеджер', 'экспедитор'].includes(profile.role)){
                let employment = (await getEmployment({_id: profile._id})).employment
                setOrganization(employment.organization)
                setEmployment(employment)
            }
        })()
    },[profile])
    useEffect(()=>{
        if(!authenticated){
            if(localStorage.favorites==undefined)
                localStorage.favorites = JSON.stringify([])
            else if(data.item!==null){
                let favorites = JSON.parse(localStorage.favorites)
                for(let i=0; i<favorites.length; i++){
                    if(favorites[i]._id == data.item._id)
                        setFavorite(true)
                }
            }
            if(localStorage.basket==undefined)
                localStorage.basket = JSON.stringify([])
        }
    },[])
    //BUY
    let [count, setCount] = useState(0);
    let increment = ()=>{
        count+=1
        setCount(count)
    }
    let decrement = ()=>{
        if(count>0)
            count-=1
            setCount(count)
    }
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    let [favorite, setFavorite] = useState(data.item!==null&&data.item.favorite!==undefined?data.item.favorite:[]);
    return (
        <App filters={data.filterItem} sorts={data.sortItem} pageName={data.item!==null?router.query.id==='new'?'Добавить':data.item.name:'Ничего не найдено'}>
            <Head>
                <title>{data.item!==null?router.query.id==='new'?'Добавить':data.item.name:'Ничего не найдено'}</title>
            </Head>
            <Card className={classes.page}>
                    <CardContent className={isMobileApp?classes.column:classes.row}>
                        {
                            profile.role==='admin'||router.query.id==='new'||(['менеджер', 'организация'].includes(profile.role)&&data.item.organization._id===employment.organization._id)?
                                data.item!==null||router.query.id==='new'?
                                    <>
                                    <label htmlFor='contained-button-file'>
                                        <LazyLoadImage
                                            placeholderSrc='/static/add.png'
                                            effect='blur'
                                            className={isMobileApp?classes.mediaM:classes.mediaD}
                                            src={preview}
                                            alt={'Добавить'}
                                        />
                                    </label>
                                    <div>
                                        <h1 className={classes.name}>
                                            <TextField
                                                label='Имя'
                                                value={name}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                onChange={(event)=>{setName(event.target.value)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                        </h1>
                                            <div className={classes.price}>
                                                <TextField
                                                    label='Цена'
                                                    value={price}
                                                    className={isMobileApp?classes.inputM:classes.inputD}
                                                    onChange={(event)=>{setPrice(checkInt(event.target.value))}}
                                                    inputProps={{
                                                        'aria-label': 'description',
                                                    }}
                                                />
                                            </div>
                                            <div className={classes.price}>
                                                <TextField
                                                    label='Скидка'
                                                    value={stock}
                                                    className={isMobileApp?classes.inputM:classes.inputD}
                                                    onChange={(event)=>{setStock(checkInt(event.target.value))}}
                                                    inputProps={{
                                                        'aria-label': 'description',
                                                    }}
                                                />
                                            </div>
                                        {profile.role==='admin'?
                                            <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                                <InputLabel>Организация</InputLabel>
                                                <Select value={organization._id}onChange={handleOrganization}>
                                                    {data.organizations.map((element)=>
                                                        <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                            :
                                            <Input
                                                value={organization.name}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                    readOnly: true,
                                                }}
                                            />
                                        }
                                        <br/>
                                        <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Подкатегория</InputLabel>
                                            <Select value={subCategory._id}onChange={handleSubCategory}>
                                                {data.subCategorys.map((element)=>
                                                    <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                                )}
                                            </Select>
                                        </FormControl>
                                        <br/>
                                        {
                                            profile.role==='admin'?
                                                <>
                                                <div className={classes.row}>
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                checked={hit}
                                                                onChange={()=>{setHit(!hit)}}
                                                                color="primary"
                                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                            />
                                                        }
                                                        label='Популярное'
                                                    />
                                                    <FormControlLabel
                                                        control={
                                                            <Switch
                                                                checked={latest}
                                                                onChange={()=>{setLatest(!latest)}}
                                                                color="primary"
                                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                                            />
                                                        }
                                                        label='Новинка'
                                                    />
                                                </div>
                                                <br/>
                                                </>:null
                                        }
                                        <TextField
                                            multiline={true}
                                            label='Информация'
                                            value={info}
                                            className={isMobileApp?classes.inputM:classes.inputD}
                                            onChange={(event)=>{setInfo(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                        />
                                        <br/>
                                        <div className={classes.row}>
                                            {
                                                router.query.id==='new'?
                                                    <Button onClick={async()=>{
                                                        if (name.length>0&&price>0&&subCategory._id!=undefined&&organization._id!=undefined) {
                                                            const action = async() => {
                                                                await addItem({
                                                                    name: name,
                                                                    stock: stock,
                                                                    image: image,
                                                                    info: info,
                                                                    price: price,
                                                                    subCategory: subCategory._id,
                                                                    hit: hit,
                                                                    latest: latest,
                                                                    organization: organization._id,
                                                                }, subCategory._id)
                                                                Router.push(`/items/${subCategory._id}`)
                                                            }
                                                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                            showMiniDialog(true)
                                                        } else {
                                                            showSnackBar('Заполните все поля')
                                                        }
                                                    }} size='small' color='primary'>
                                                        Добавить
                                                    </Button>
                                                    :
                                                    <>
                                                    <Button onClick={async()=>{
                                                        let editElement = {_id: data.item._id}
                                                        if(stock>0&&stock!==data.item.stock)editElement.stock = stock
                                                        if(name.length>0&&name!==data.item.name)editElement.name = name
                                                        if(image!==undefined)editElement.image = image
                                                        if(info.length>0&&info!==data.item.info)editElement.info = info
                                                        if(price>0&&price!==data.item.price)editElement.price = price
                                                        if(hit!==data.item.hit)editElement.hit = hit
                                                        if(latest!==data.item.latest)editElement.latest = latest
                                                        if(organization._id!==data.item.organization._id)editElement.organization = organization._id
                                                        if(subCategory._id!==data.item.subCategory._id)editElement.subCategory = subCategory._id
                                                        const action = async() => {
                                                            await setItem(editElement, subCategory._id)
                                                            //Router.push(`/items/${subCategory._id}`)
                                                        }
                                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        Сохранить
                                                    </Button>
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            await onoffItem([data.item._id])
                                                            setStatus(status==='active'?'deactive':'active')
                                                        }
                                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        {status==='active'?'Отключить':'Включить'}
                                                    </Button>
                                                    {
                                                        profile.role==='admin'?
                                                            <Button onClick={async()=>{
                                                                const action = async() => {
                                                                    await deleteItem([data.item._id], subCategory._id)
                                                                    Router.push(`/items/${subCategory._id}`)
                                                                }
                                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                                showMiniDialog(true)
                                                            }} size='small' color='primary'>
                                                                Удалить
                                                            </Button>
                                                            :
                                                            null
                                                    }
                                                    </>
                                            }
                                        </div>

                                    </div>
                                    </>
                                    :
                                    'Ничего не найдено'

                                :
                                data.item===null||router.query.id==='new'?
                                    'Ничего не найдено'
                                    :
                                    <>
                                    <div className={classes.divImage}>
                                        <LazyLoadImage
                                            placeholderSrc='/static/add.png'
                                            effect='blur'
                                            className={isMobileApp?classes.mediaM:classes.mediaD}
                                            src={data.item.image}
                                            alt={data.item.info}
                                        />
                                        <Star className={classes.buttonToggle} onClick={async ()=>{
                                            let index
                                            if(profile.role==='client') {
                                                await favoriteItem([data.item._id])
                                                index = favorite.indexOf(profile._id)
                                                if (index === -1) {
                                                    favorite.push(profile._id)
                                                    setFavorite([...favorite])
                                                }
                                            }
                                            else if(!authenticated) {
                                                let favorites = JSON.parse(localStorage.favorites);
                                                index = -1
                                                for(let i=0; i<favorites.length; i++){
                                                    if(favorites[i]._id == data.item._id)
                                                        index = i
                                                }
                                                if(index===-1){
                                                    favorites.push(data.item)
                                                    setFavorite(true)
                                                    localStorage.favorites = JSON.stringify(favorites)
                                                }
                                            }

                                            if (index !== -1) {
                                                const action = async() => {
                                                    if(profile.role==='client') {
                                                        favorite.splice(index, 1)
                                                        setFavorite([...favorite])
                                                    }
                                                    else if(!authenticated) {
                                                        let favorites = JSON.parse(localStorage.favorites);
                                                        favorites.splice(index, 1)
                                                        setFavorite(false)
                                                        localStorage.favorites = JSON.stringify(favorites)
                                                    }
                                                }
                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }
                                        }} style={{color: (!authenticated&&favorite===true)||(profile.role=='client'&&favorite.includes(profile._id))?'#ffb300':'#e1e1e1'}}  />
                                    </div>
                                    <div>
                                        <br/>
                                        <h1 className={classes.name}>
                                            {data.item.name}
                                        </h1>
                                        <div className={classes.share}>
                                            {data.item.organization.name}
                                        </div>
                                        <div className={classes.row}>
                                            {
                                                data.item.stock===0||data.item.stock===undefined?
                                                    <div className={classes.price}>
                                                        {data.item.price}&nbsp;сом
                                                    </div>
                                                    :
                                                    <>
                                                    <div className={classes.stockPrice}>
                                                        {data.item.stock}&nbsp;сом
                                                    </div>
                                                    <div className={classes.crossedPrice}>
                                                        {data.item.price}&nbsp;сом
                                                    </div>
                                                    </>
                                            }
                                        </div>
                                        <br/>
                                        {
                                            profile.role==='client'||!authenticated?
                                                <>
                                                <div className={isMobileApp?classes.column:classes.rowCenter}>
                                                    <div className={classes.counter} style={isMobileApp?{marginBottom: 20}:{marginRight: 20}}>
                                                        <div className={classes.counterbtn} onClick={decrement}>–</div>
                                                        <input type='text' className={classes.counternmbr} value={count} onChange={(event)=>{
                                                            setCount(isNaN(event.target.value)||event.target.value.length===0?0:parseInt(event.target.value))
                                                        }}/>
                                                        <div className={classes.counterbtn} onClick={increment}>+</div>
                                                    </div>
                                                    <Button
                                                        variant='contained'
                                                        color='primary'
                                                        className={classes.button}
                                                        onClick={()=>{
                                                            if(profile.role==='client')
                                                                addBasket({item: data.item._id, count: count>0?count:1})
                                                            else if(!authenticated) {
                                                                let basket = JSON.parse(localStorage.basket);
                                                                let index = -1
                                                                for(let i=0; i<basket.length; i++){
                                                                    if(basket[i].item._id == data.item._id)
                                                                        index = i
                                                                }
                                                                if(index===-1)
                                                                    basket.push({item: data.item, count: count})
                                                                localStorage.basket = JSON.stringify(basket)
                                                            }
                                                            showSnackBar('Товар добавлен в корзину')
                                                        }}
                                                    >
                                                        В КОРЗИНУ
                                                    </Button>
                                                </div>
                                                <br/>
                                                <br/>
                                                <div className={classes.share}>
                                                    Поделиться:
                                                </div>
                                                <div className={classes.rowCenter}>
                                                    <FacebookShareButton
                                                        url={process.browser?window.location.href.toString():''}
                                                    >
                                                        <FacebookIcon
                                                            size={32}
                                                            round />
                                                    </FacebookShareButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <VKShareButton url={process.browser?window.location.href:''}>
                                                        <VKIcon
                                                            size={32}
                                                            round />
                                                    </VKShareButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <OKShareButton url={process.browser?window.location.href:''}>
                                                        <OKIcon
                                                            size={32}
                                                            round />
                                                    </OKShareButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <WhatsappShareButton url={process.browser?window.location.href:''}>
                                                        <WhatsappIcon
                                                            size={32}
                                                            round />
                                                    </WhatsappShareButton>
                                                    &nbsp;
                                                    &nbsp;
                                                    <TelegramShareButton url={process.browser?window.location.href:''}>
                                                        <TelegramIcon
                                                            size={32}
                                                            round />
                                                    </TelegramShareButton>
                                                </div>
                                                </>
                                                :
                                                null

                                        }
                                    </div>
                                    </>
                        }




                    </CardContent>
            </Card>
            <input
                accept='image/*'
                style={{ display: 'none' }}
                id='contained-button-file'
                type='file'
                onChange={handleChangeImage}
            />
        </App>
    )
})

Item.getInitialProps = async function(ctx) {
    return {
        data: {
            ...ctx.query.id!=='new'?await getItem({_id: ctx.query.id}):{
                    item:{
                        image: '/static/add.png',
                        stock: 0,
                        name: '',
                        info: '',
                        price: 0,
                        subCategory: {_id: ''},
                        organization: {_id: ''},
                        hit: false,
                        latest: false
                    }
                },
            ...await getOrganizations({search: '', sort: 'name', filter: ''}),
            ...await getSubCategorys({category: 'all', search: '', sort: 'name', filter: ''})
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Item);