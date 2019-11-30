import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/basket/basket'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import { getBasket, setBasket, deleteBasket } from '../src/gql/basket';
import { getClient } from '../src/gql/client';
import Router from 'next/router'
import BuyBasket from '../components/dialog/BuyBasket'
import Sign from '../components/dialog/Sign'
import Confirmation from '../components/dialog/Confirmation'

const Basket = React.memo((props) => {
    const { authenticated } = props.user;
    const classes = pageListStyle();
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    const { data } = props;
    let [list, setList] = useState(data.baskets);
    let [allPrice, setAllPrice] = useState(0);
    const { isMobileApp } = props.app;
    let increment = (idx)=>{
        list[idx].count+=1
        setBasketChange(idx, list[idx].count)
        setList([...list])
    }
    let decrement = (idx)=>{
        if(list[idx].count>0) {
            list[idx].count -= 1
            setBasketChange(idx, list[idx].count)
            setList([...list])
        }
    }
    let setBasketChange= (idx, count)=>{
        if(authenticated)
            setBasket({_id: list[idx]._id, count: count})
        else {
            let list = JSON.parse(localStorage.basket);
            list[idx].count = count;
            localStorage.basket = JSON.stringify(list);
        }
    }
    let removeBasketChange= async (idx)=>{
        const action = async() => {
            if(authenticated) {
                deleteBasket([list[idx]._id])
                setList((await getBasket()).baskets)
            } else {
                let list = JSON.parse(localStorage.basket)
                list.splice(idx, 1)
                localStorage.basket = JSON.stringify(list)
                setList(list)
            }
        }
        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
        showMiniDialog(true)
    }
    useEffect(()=>{
        (async()=>{
            if(!authenticated){
                if(localStorage.basket==undefined) {
                    localStorage.basket = JSON.stringify([])
                }
                setList(JSON.parse(localStorage.basket))
            }
        })()
    },[])
    useEffect(()=>{
        calculateAllPrice()
    },[list])
    let getList = async()=>{
        setList((await getBasket()).baskets)
    };
    let calculateAllPrice = async()=>{
        let allPrice = 0
        for(let i=0;i < list.length; i++){
            allPrice+=((list[i].item.stock===0||list[i].item.stock===undefined?list[i].item.price:list[i].item.stock)*list[i].count)
        }
        setAllPrice(allPrice)
    };

    //привести к геолокации
    if(!Array.isArray(data.client.address[0])) data.client.address.map((addres)=>[addres])

    return (
        <App getList={getList} pageName='Корзина'>
            <Head>
                <title>Корзина</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Корзина' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`http://${process.env.URL}/static/512x512.png`} />
                <meta property="og:url" content={`http://${process.env.URL}/basket`} />
                <link rel='canonical' href={`http://${process.env.URL}/basket`}/>
            </Head>
                {
                        isMobileApp?
                            <div className={classes.column} style={{width: 'calc(100% - 16px)', margin: 8}}>
                                {
                                    list.map((row, idx) => (
                                        <Card className={classes.page} key={idx}>
                                            <CardActions className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                                                <div className={classes.itemM}>
                                                <div className={classes.divImage}>
                                                    <img className={classes.mediaM} src={row.item.image}/>
                                                    <IconButton onClick={()=>{removeBasketChange(idx)}} color="primary" className={classes.cancelM}>
                                                        <CancelIcon style={{height: 40, width: 40}} />
                                                    </IconButton>
                                                </div>
                                                <br/>
                                                <div className={classes.nameM}>
                                                    {row.item.name}
                                                </div>
                                                <br/>
                                                <div className={classes.counter} style={isMobileApp?{marginBottom: 20}:{marginRight: 20}}>
                                                    <div className={classes.counterbtn} onClick={()=>{decrement(idx)}}>–</div>
                                                    <input type='text' className={classes.counternmbr} value={row.count} onChange={(event)=>{
                                                        list[idx].count = isNaN(event.target.value)||event.target.value.length===0?0:parseInt(event.target.value)
                                                        setBasketChange(idx, list[idx].count)
                                                        setList([...list])
                                                    }}/>
                                                    <div className={classes.counterbtn} onClick={()=>{increment(idx)}}>+</div>
                                                </div>
                                                <div>
                                                    <div className={classes.row}>
                                                        <div className={classes.nameField}>
                                                            Цена
                                                        </div>
                                                        <div className={classes.value}>
                                                            {`${row.item.stock===0||row.item.stock===undefined?row.item.price:row.item.stock} сом`}
                                                        </div>
                                                    </div>
                                                    <div className={classes.row}>
                                                        <div className={classes.nameField}>
                                                            Итого
                                                        </div>
                                                        <div className={classes.value}>
                                                            {`${(row.item.stock===0||row.item.stock===undefined?row.item.price:row.item.stock)*row.count} сом`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </CardActions>
                                        </Card>
                                    ))
                                }
                                <div style={{height: 70}}/>
                            </div>
                            :
                            <>
                            <Card className={classes.page}>
                                <CardActions className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                                <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell/>
                                        <TableCell align="left">Количество</TableCell>
                                        <TableCell align="left">Цена</TableCell>
                                        <TableCell align="left">Итого</TableCell>
                                        <TableCell align="center">Отменить</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {list.map((row, idx) => (
                                            <TableRow key={idx}>
                                                <TableCell component="th" scope="row" >
                                                    <div className={classes.row}>
                                                        <img className={classes.mediaD} src={row.item.image}/>
                                                        <div className={classes.nameD}>
                                                            {row.item.name}
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="left">

                                                    <div className={classes.counterD} style={isMobileApp?{marginBottom: 20}:{marginRight: 20}}>
                                                        <div className={classes.counterbtnD} onClick={()=>{decrement(idx)}}>–</div>
                                                        <input type='text' className={classes.counternmbrD} value={row.count} onChange={(event)=>{
                                                            list[idx].count = isNaN(event.target.value)||event.target.value.length===0?0:parseInt(event.target.value)
                                                            setBasketChange(idx, list[idx].count)
                                                            setList([...list])
                                                        }}/>
                                                        <div className={classes.counterbtnD} onClick={()=>{increment(idx)}}>+</div>
                                                    </div>

                                                </TableCell>
                                                <TableCell align="left">{`${row.item.stock===0||row.item.stock===undefined?row.item.price:row.item.stock*row.count} сом`}</TableCell>
                                                <TableCell align="left">{`${(row.item.stock===0||row.item.stock===undefined?row.item.price:row.item.stock*row.count)*row.count} сом`}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton onClick={()=>{removeBasketChange(idx)}} color="primary" className={classes.button} aria-label="add to shopping cart">
                                                        <CancelIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </CardActions>
                            </Card>
                            <div style={{height: 70}}/>
                            </>
                    }
            <div className={isMobileApp?classes.bottomBasketM:classes.bottomBasketD}>
                <div className={isMobileApp?classes.allPriceM:classes.allPriceD}>
                    <div className={isMobileApp?classes.value:classes.priceAllText}>Общая стоимость</div>
                    <div className={isMobileApp?classes.nameM:classes.priceAll}>{`${allPrice} сом`}</div>
                </div>
                <div className={isMobileApp?classes.buyM:classes.buyD} onClick={()=>{
                    if(allPrice>0) {
                        if (authenticated)
                            setMiniDialog('Купить', <BuyBasket client={data.client} allPrice={allPrice}/>)
                        else
                            setMiniDialog('Купить', <Sign/>)
                        showMiniDialog(true)
                    } else
                        showSnackBar('Добавьте товар в корзину')
                }}>
                    КУПИТЬ
                </div>
            </div>
        </App>
    )
})

Basket.getInitialProps = async function(ctx) {
    if('client'!==ctx.store.getState().user.profile.role&&ctx.store.getState().user.authenticated)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            ...await getBasket(),
            ...(ctx.store.getState().user.profile._id?await getClient({_id: ctx.store.getState().user.profile._id}):[])
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

export default connect(mapStateToProps, mapDispatchToProps)(Basket);