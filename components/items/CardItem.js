import React, {useState, useEffect} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
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
import { addBasket } from '../../src/gql/basket'
import Button from '@material-ui/core/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Confirmation from '../dialog/Confirmation'

const CardItem = React.memo((props) => {
    const classes = cardItemStyle();
    const { element, setList, subCategory, getList, setFavorites } = props;
    const { profile, authenticated } = props.user;
    let [status, setStatus] = useState(element!==undefined?element.status:'');
    let [favorite, setFavorite] = useState(element!==undefined&&element.favorite!==undefined?element.favorite:[]);
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    let [basket, setBasket] = useState(false);
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
                    if(basket[i]._id == element._id)
                        setBasket(true)
                }
            }

        } else {
            setBasket((element.basket).includes(profile._id))
        }
    },[])
    return (
        <Card className={classes.card}>
            <CardActionArea>
                                    <CardContent className={classes.column}>
                                        <div className={classes.chipList}>
                                    {
                                        element.latest?
                                            <div className={classes.chip} style={{color: 'white',background: 'green'}}>
                                                Новинка
                                            </div>
                                            :null
                                    }
                                    {
                                        element.hit?
                                            <div className={classes.chip} style={{color: 'black',background: 'yellow'}}>
                                                Хит
                                            </div>
                                            :null
                                    }
                                        </div>
                                        <Link href='/item/[id]' as={`/item/${element!==undefined?element._id:'new'}`}>
                                            <LazyLoadImage
                                                placeholderSrc='/static/add.png'
                                                effect='blur'
                                                className={classes.media}
                                                src={element.image}
                                                alt={element.info}
                                            />
                                        </Link>
                                        <Link href='/item/[id]' as={`/item/${element!==undefined?element._id:'new'}`}>
                                            <div className={classes.name}>
                                                {element.name}
                                            </div>
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
                                        {['admin','организация','менеджер'].includes(profile.role)?
                                            <>
                                            <Button onClick={async()=>{
                                                const action = async() => {
                                                    await onoffItem([element._id])
                                                    setStatus(status==='active'?'deactive':'active')
                                                }
                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
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
                                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        Удалить
                                                    </Button>:null
                                            }
                                            </>
                                            :
                                            profile.role==='client'||!authenticated?
                                                <AddShoppingCart style={{color: basket?'#ffb300':'#e1e1e1'}}  className={classes.button} onClick={()=>{
                                                    if(profile.role==='client')
                                                        addBasket({item: element._id, count: 1})
                                                    else if(!authenticated) {
                                                        let basket = JSON.parse(localStorage.basket);
                                                        let index = -1
                                                        for(let i=0; i<basket.length; i++){
                                                            if(basket[i].item._id == element._id)
                                                                index = i
                                                        }
                                                        if(index===-1)
                                                            basket.push({item: element, count: 1})
                                                        localStorage.basket = JSON.stringify(basket)
                                                    }
                                                    showSnackBar('Товар добавлен в корзину')
                                                    setBasket(true)
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
                                                    setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                    showMiniDialog(true)
                                                }
                                            }} style={{color: (!authenticated&&favorite===true)||(profile.role=='client'&&favorite.includes(profile._id))?'#ffb300':'#e1e1e1'}}  />
                                            :
                                            null
                                        }
                                    </CardContent>
                                </CardActionArea>
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