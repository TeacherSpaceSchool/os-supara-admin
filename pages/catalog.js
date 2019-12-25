import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/catalog/catalog'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {checkInt} from '../src/lib';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import { getItems } from '../src/gql/items';
import Router from 'next/router'
import BuyBasket from '../components/dialog/BuyBasket'
import Sign from '../components/dialog/Sign'
import Confirmation from '../components/dialog/Confirmation'
import { urlMain } from '../redux/constants/other'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getBonusesClient } from '../src/gql/bonusclient'
import TextField from '@material-ui/core/TextField';
import {getOrganization} from '../src/gql/organization'
import {getClients} from '../src/gql/client'
import { getClientGqlSsr } from '../src/getClientGQL'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { forceCheck } from 'react-lazyload';
import { addBasket, deleteBasket, deleteBasketAll } from '../src/gql/basket';
import Divider from '@material-ui/core/Divider';

const Catalog = React.memo((props) => {
    const classes = pageListStyle();
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    const { data } = props;
    const clients = data.clients;
    const { search, filter, sort } = props.app;
    const [list, setList] = useState(data.items);
    const [basket, setBasket] = useState({});
    const organization = data.organization
    useEffect(()=>{
        (async()=>{
            setList((await getItems({subCategory: 'all', search: search, sort: sort, filter: filter})).items)
            forceCheck()
        })()
    },[filter, sort, search])
    let [bonus, setBonus] = useState({});
    let [client, setClient] = useState();
    let handleClient =  (client) => {
        setClient(client)
        setBonus((data.bonusesClient.filter(bonusClient=>bonusClient.client._id===client._id))[0])
    };
    let [allPrice, setAllPrice] = useState(0);
    const { isMobileApp } = props.app;
    let increment = (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0}
        basket[id].count+=1

        basket[id].allPrice = basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price)

        addBasket({item: list[idx]._id, count: basket[id].count})
        setBasket({...basket})
    }
    let decrement = (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0}
        if(basket[id].count>0) {
            basket[id].count -= 1
            basket[id].allPrice = basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price)
            if(basket[id].count>0)
                addBasket({item: list[idx]._id, count: basket[id].count})
            else
                deleteBasket([list[idx]._id])
            setBasket({...basket})
        }
    }
    let setBasketChange= (idx, count)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0}
        basket[id].count = count
        basket[id].allPrice = basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price)
        if(count>0)
            addBasket({item: list[idx]._id, count: count})
        else
            deleteBasket([list[idx]._id])
        setBasket({...basket})
    }
    let addPackaging= (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0}
        if(list[idx].packaging){
            basket[id].count = (parseInt(basket[id].count/list[idx].packaging)+1)*list[idx].packaging
        }
        else {
            basket[id].count += 1
        }
        basket[id].allPrice = basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price)
        addBasket({item: list[idx]._id, count: basket[id].count})
        setBasket({...basket})
    }
    useEffect(()=>{
        let keys = Object.keys(basket)
        allPrice = 0
        for(let i=0; i<keys.length; i++){
            allPrice += basket[keys[i]].allPrice
        }
        setAllPrice(allPrice)
    },[basket])

    return (
        <App searchShow={true} pageName='Каталог'>
            <Head>
                <title>Каталог</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Каталог' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/catalog`} />
                <link rel='canonical' href={`${urlMain}/catalog`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <Autocomplete
                        className={classes.input}
                        options={clients}
                        getOptionLabel={option => option.name}
                        onChange={(event, newValue) => {
                            handleClient(newValue)
                        }}
                        noOptionsText='Ничего не найдено'
                        renderInput={params => (
                            <TextField {...params} label='Выберите клиента' variant='outlined' fullWidth />
                        )}
                    />
                    <br/>
                    {
                        list.map((row, idx) => {
                            let price
                            if(basket[row._id]&&basket[row._id].allPrice)
                                price = basket[row._id].allPrice
                            else if(row.stock)
                                price = row.stock
                            else
                                price = row.price
                            return (
                                <div key={row._id}>
                                    <div className={classes.line}>
                                        <a href={`/item/${row._id}`} target='_blank'>
                                            <img className={classes.media} src={row.image}/>
                                        </a>
                                        <div className={classes.column}>
                                            <a href={`/item/${row._id}`} target='_blank'>
                                                <div className={classes.value}>{row.name}</div>
                                            </a>
                                            <b className={classes.value}>
                                                {`${price} сом`}
                                            </b>
                                            <div className={classes.counter}>
                                                <div className={classes.counterbtn} onClick={() => {
                                                    decrement(idx)
                                                }}>–
                                                </div>
                                                <input type={isMobileApp?'number':'text'} className={classes.counternmbr}
                                                       value={basket[row._id]?basket[row._id].count:0} onChange={(event) => {
                                                    setBasketChange(idx, checkInt(event.target.value))
                                                }}/>
                                                <div className={classes.counterbtn} onClick={() => {
                                                    increment(idx)
                                                }}>+
                                                </div>
                                            </div>
                                            <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                addPackaging(idx)
                                            }}>
                                                Добавить упаковку
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    <Divider/>
                                    <br/>
                                </div>
                                )
                            }
                        )
                    }
                </CardContent>
            </Card>
            <div style={{height: 70}}/>
            <div className={isMobileApp?classes.bottomBasketM:classes.bottomBasketD}>
                <div className={isMobileApp?classes.allPriceM:classes.allPriceD}>
                    <div className={isMobileApp?classes.value:classes.priceAllText}>Общая стоимость</div>
                    <div className={isMobileApp?classes.nameM:classes.priceAll}>{`${allPrice} сом`}</div>
                </div>
                <div className={isMobileApp?classes.buyM:classes.buyD} onClick={()=>{
                    if(allPrice>0) {
                        if(client&&client._id) {
                            let proofeAddress = client.address.length > 0
                            if (proofeAddress) {
                                for (let i = 0; i < client.address.length; i++) {
                                    proofeAddress = client.address[i][0].length > 0
                                }
                            }
                            if (
                                client._id && proofeAddress && client.name.length > 0 && client.phone.length > 0
                            ) {
                                setMiniDialog('Купить', <BuyBasket bonus={bonus}
                                                                   client={client}
                                                                   allPrice={allPrice} organization={organization}/>)
                                showMiniDialog(true)
                            }
                            else {
                                Router.push(`/client/${client._id}`)
                            }
                        }
                        else
                            showSnackBar('Пожалуйста выберите клиента')
                    }
                    else
                        showSnackBar('Добавьте товар в корзину')
                }}>
                    КУПИТЬ
                </div>
            </div>
        </App>
    )
})

Catalog.getInitialProps = async function(ctx) {
    if('агент'!==ctx.store.getState().user.profile.role&&ctx.store.getState().user.authenticated)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    await deleteBasketAll()
    return {
        data: {
            ...await getItems({subCategory: 'all', search: '', sort: ctx.store.getState().app.sort, filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getBonusesClient({search: '', sort: '-createdAt'}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getClients({search: '', sort: '-name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getOrganization({_id: ctx.store.getState().user.profile.organization}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);