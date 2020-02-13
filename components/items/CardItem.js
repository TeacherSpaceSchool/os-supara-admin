import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import cardItemStyle from '../../src/styleMUI/item/cardItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Star from '@material-ui/icons/Star';
import Link from 'next/link';
import { onoffItem, deleteItem, favoriteItem } from '../../src/gql/items'
import { addBasket, getCountBasket, deleteBasket } from '../../src/gql/basket'
import Button from '@material-ui/core/Button';
import Confirmation from '../dialog/Confirmation'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { setItem } from '../../src/gql/items'


const CardItem = React.memo((props) => {
    const classes = cardItemStyle();
    const { element, setList, subCategory, getList, setFavorites } = props;
    const { profile, authenticated } = props.user;
    let [status, setStatus] = useState(element!==undefined?element.status:'');
    let [favorite, setFavorite] = useState(element!==undefined&&element.favorite!==undefined?element.favorite:[]);
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    let [basket, setBasket] = useState(false);
    let [hit, setHit] = useState(element.hit);
    let [latest, setLatest] = useState(element.latest);
    let [apiece, setApiece] = useState(element.apiece);
    useEffect(()=>{
        if(!authenticated){
            if(localStorage.favorites==undefined)
                localStorage.favorites = JSON.stringify([])
            else {
                let favorites = JSON.parse(localStorage.favorites)
                for(let i=0; i<favorites.length; i++){
                    if(favorites[i]._id == element._id)
                        setFavorite(true)
                }
            }
            if(localStorage.basket==undefined)
                localStorage.basket = JSON.stringify([])
            else {
                let basket = JSON.parse(localStorage.basket)
                for(let i=0; i<basket.length; i++){
                    if(basket[i].item._id == element._id)
                        setBasket(true)
                }
            }

        } else {
            setBasket((element.basket).includes(profile._id))
        }
    },[])
    return (
        <Card className={classes.card}>
            <CardContent className={classes.column}>
                <div className={classes.chipList}>{
                    profile.role==='admin'?
                        <>
                            <FormControlLabel
                                style={{zoom: 0.75, background: 'rgba(229, 229, 229, 0.3)'}}
                                labelPlacement = 'bottom'
                                control={
                                    <Switch
                                        checked={hit}
                                        onChange={async ()=>{
                                            let _hit = !hit
                                            await setItem({_id: element._id, hit: _hit})
                                            setHit(_hit)
                                        }}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label='Популярное'
                            />
                            <FormControlLabel
                                style={{zoom: 0.75, background: 'rgba(229, 229, 229, 0.3)'}}
                                labelPlacement = 'bottom'
                                control={
                                    <Switch
                                        checked={latest}
                                        onChange={async()=>{
                                            let _latest = !latest
                                            await setItem({_id: element._id, latest: _latest})
                                            setLatest(_latest)
                                        }}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label='Новинка'
                            />
                            <FormControlLabel
                                style={{zoom: 0.75, background: 'rgba(229, 229, 229, 0.3)'}}
                                labelPlacement = 'bottom'
                                control={
                                    <Switch
                                        checked={apiece}
                                        onChange={async ()=>{
                                            let _apiece = !apiece
                                            await setItem({_id: element._id, apiece: _apiece})
                                            setApiece(_apiece)
                                        }}
                                        color="primary"
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                }
                                label='Поштучно'
                            />
                        </>
                        :
                        <>
                        {
                            element.latest?
                                <div className={classes.chip} style={{color: 'white',background: 'green'}}>
                                    Новинка
                                </div>
                                :null
                        }
                        {
                            element.hit?
                                <>
                                <div className={classes.chip} style={{color: 'black',background: 'yellow'}}>
                                    Хит
                                </div>
                                </>
                                :null
                        }
                        </>
                }
                </div>
                                        <Link href='/item/[id]' as={`/item/${element!==undefined?element._id:'new'}`}>
                                           <a>
                                               <img
                                                   className={classes.media}
                                                   src={element.image}
                                                   alt={element.info}
                                               />
                                           </a>
                                        </Link>
                                        <Link href='/item/[id]' as={`/item/${element!==undefined?element._id:'new'}`}>
                                            <a className={classes.name}>
                                                {element.name}
                                            </a>
                                        </Link>
                                        <Link href='/item/[id]' as={`/item/${element!==undefined?element._id:'new'}`}>
                                            <div className={classes.row}>
                                            {
                                                element.stock===0||element.stock===undefined?
                                                    <div className={classes.price}>
                                                        {`${element.price} сом`}
                                                    </div>
                                                    :
                                                    <>
                                                    <div className={classes.crossedPrice}>
                                                        {`${element.price}`}
                                                    </div>
                                                    <div className={classes.stockPrice}>
                                                        {`${element.stock} сом`}
                                                    </div>
                                                    </>
                                            }
                                            </div>
                                        </Link>
                                        {['admin','организация'].includes(profile.role)?
                                            <>
                                            <Button onClick={async()=>{
                                                const action = async() => {
                                                    await onoffItem([element._id])
                                                    setStatus(status==='active'?'deactive':'active')
                                                }
                                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }} size='small' color='primary'>
                                                {status==='active'?'Отключить':'Включить'}
                                            </Button>
                                            {
                                                'admin'===profile.role?
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            const list = (await deleteItem([element._id], subCategory)).items
                                                            setList(list)
                                                        }
                                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        Удалить
                                                    </Button>:null
                                            }
                                            </>
                                            :
                                            ['агент', 'client'].includes(profile.role)||!authenticated?
                                                <AddShoppingCart style={{color: basket?'#ffb300':'#e1e1e1'}}  className={classes.button} onClick={async()=>{
                                                    if(!basket) {
                                                        if (['агент', 'client'].includes(profile.role))
                                                            addBasket({item: element._id, count: element.apiece?1:element.packaging})
                                                        else if (!authenticated) {
                                                            let basket = JSON.parse(localStorage.basket);
                                                            let index = -1
                                                            for (let i = 0; i < basket.length; i++) {
                                                                if (basket[i].item._id == element._id)
                                                                    index = i
                                                            }
                                                            if (index === -1)
                                                                basket.push({item: element, count: element.apiece?1:element.packaging})
                                                            localStorage.basket = JSON.stringify(basket)
                                                        }
                                                        showSnackBar('Товар добавлен в корзину')
                                                        setBasket(true)
                                                    }
                                                    else {
                                                        if(authenticated) {
                                                            await deleteBasket([element._id])
                                                        } else {
                                                            let list = JSON.parse(localStorage.basket)
                                                            let index = -1
                                                            for (let i = 0; i < list.length; i++) {
                                                                if (list[i].item._id == element._id)
                                                                    index = i
                                                            }
                                                            if (index !== -1)
                                                                list.splice(index, 1)
                                                            localStorage.basket = JSON.stringify(list)
                                                        }
                                                        showSnackBar('Товар удален из корзины')
                                                        setBasket(false)
                                                    }
                                                    getCountBasket()
                                                }}/>
                                                :
                                                null
                                        }

                {profile.role==='client'||!authenticated?
                                            <Star className={classes.buttonToggle} onClick={async ()=>{
                                                let index
                                                if(profile.role==='client') {
                                                    await favoriteItem([element._id])
                                                    index = favorite.indexOf(profile._id)
                                                    if (index === -1) {
                                                        favorite.push(profile._id)
                                                        setFavorite([...favorite])
                                                        if (getList !== undefined)
                                                            getList()
                                                    }
                                                }
                                                else if(!authenticated) {
                                                    let favorites = JSON.parse(localStorage.favorites);
                                                    index = -1
                                                    for(let i=0; i<favorites.length; i++){
                                                        if(favorites[i]._id == element._id)
                                                            index = i
                                                    }
                                                    if(index===-1) {
                                                        favorites.push(element)
                                                        setFavorite(true)
                                                        localStorage.favorites = JSON.stringify(favorites)
                                                        if (setFavorites)
                                                            setFavorites(favorites)
                                                    }
                                                }
                                                if (index !== -1) {
                                                    const action = async() => {
                                                        if(profile.role==='client') {
                                                            favorite.splice(index, 1)
                                                            setFavorite([...favorite])
                                                            if (getList !== undefined)
                                                                getList()
                                                        }
                                                        else if(!authenticated) {
                                                            let favorites = JSON.parse(localStorage.favorites);
                                                            favorites.splice(index, 1)
                                                            setFavorite(false)
                                                            localStorage.favorites = JSON.stringify(favorites)
                                                            if(setFavorites)
                                                                setFavorites(favorites)
                                                        }
                                                    }
                                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                    showMiniDialog(true)
                                                }
                                            }} style={{color: (!authenticated&&favorite===true)||(profile.role=='client'&&favorite.includes(profile._id))?'#ffb300':'#e1e1e1'}}  />
                                            :
                                            null
                                        }
                                    </CardContent>
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