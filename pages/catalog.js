import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/catalog/catalog'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {checkInt} from '../src/lib';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import { getItems } from '../src/gql/items';
import Router from 'next/router'
import BuyBasket from '../components/dialog/BuyBasket'
import { urlMain } from '../redux/constants/other'
import { getBonusesClient } from '../src/gql/bonusclient'
import TextField from '@material-ui/core/TextField';
import {getOrganization} from '../src/gql/organization'
import {getClients} from '../src/gql/client'
import { getClientGqlSsr } from '../src/getClientGQL'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { forceCheck } from 'react-lazyload';
import { addBasket, deleteBasket, deleteBasketAll } from '../src/gql/basket';
import Divider from '@material-ui/core/Divider';
import LazyLoad from 'react-lazyload';
import CardCatalogPlaceholder from '../components/catalog/CardCatalogPlaceholder'
import initialApp from '../src/initialApp'

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
        })()
    },[filter, sort, search])
    useEffect(()=>{
        forceCheck()
    },[list])
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
            basket[id] = {idx: id, count: 0, allPrice: 0, consignment: 0}
        basket[id].count = checkInt(basket[id].count)
        basket[id].count+=list[idx].apiece?1:list[idx].packaging

        basket[id].allPrice = basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price)

        addBasket({item: list[idx]._id, count: basket[id].count})
        setBasket({...basket})
    }
    let decrement = (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0, consignment: 0}
        if(basket[id].count>0) {
            basket[id].count = checkInt(basket[id].count)
            basket[id].count -= list[idx].apiece?1:list[idx].packaging
            basket[id].allPrice = basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price)
            if(basket[id].count>0)
                addBasket({item: list[idx]._id, count: basket[id].count})
            else
                deleteBasket([list[idx]._id])
            setBasket({...basket})
        }
    }
    let incrementConsignment = (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0, consignment: 0}
        if(basket[id].consignment<basket[id].count) {
            basket[id].consignment += 1
            addBasket({item: list[idx]._id, count: basket[id].count, consignment: basket[id].consignment})
            setBasket({...basket})
        }
    }
    let decrementConsignment = (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0, consignment: 0}
        if(basket[id].consignment>0) {
            basket[id].consignment -= 1
            addBasket({item: list[idx]._id, count: basket[id].count, consignment: basket[id].consignment})
            setBasket({...basket})
        }
    }
    let showConsignment = (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0, consignment: 0}
        basket[id].showConsignment = !basket[id].showConsignment
        setBasket({...basket})
    }
    let setBasketChange= (idx, count)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0, consignment: 0}
        basket[id].count = checkInt(count)
        basket[id].allPrice = basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price)
        if(count>0)
            addBasket({item: list[idx]._id, count: basket[id].count})
        else
            deleteBasket([list[idx]._id])
        setBasket({...basket})
    }
    let addPackaging= (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0, consignment: 0}
        basket[id].count = checkInt(basket[id].count)
        if(list[idx].packaging){
            basket[id].count = (parseInt(basket[id].count/list[idx].packaging)+1)*list[idx].packaging
        }
        basket[id].allPrice = basket[id].count*(list[idx].stock?list[idx].stock:list[idx].price)
        addBasket({item: list[idx]._id, count: basket[id].count})
        setBasket({...basket})
    }
    let addPackagingConsignment = (idx)=>{
        let id = list[idx]._id
        if(!basket[id])
            basket[id] = {idx: id, count: 0, allPrice: 0, consignment: 0}
        let consignment = (parseInt(basket[id].consignment/list[idx].packaging)+1)*list[idx].packaging
        if(consignment<=basket[id].count){
            basket[id].consignment = consignment
            addBasket({item: list[idx]._id, count: basket[id].count, consignment: basket[id].consignment})
            setBasket({...basket})
        }
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
                                <LazyLoad scrollContainer={'.App-body'} key={row._id} offset={[186, 0]} debounce={0} once={true}  placeholder={<CardCatalogPlaceholder/>}>
                                    <div>
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
                                            <div className={classes.line}>
                                                <div className={classes.counter}>
                                                    <div className={classes.counterbtn} onClick={() => {
                                                        decrement(idx)
                                                    }}>–
                                                    </div>
                                                    <input readOnly={!row.apiece} type={isMobileApp?'number':'text'} className={classes.counternmbr}
                                                           value={basket[row._id]?basket[row._id].count:''} onChange={(event) => {
                                                        setBasketChange(idx, event.target.value)
                                                    }}/>
                                                    <div className={classes.counterbtn} onClick={() => {
                                                        increment(idx)
                                                    }}>+
                                                    </div>
                                                </div>
                                                &nbsp;&nbsp;&nbsp;
                                                <div className={classes.showCons} style={{color: basket[row._id]&&basket[row._id].showConsignment?'#ffb300':'#000'}} onClick={()=>{
                                                    showConsignment(idx)
                                                }}>
                                                    КОНС
                                                </div>
                                            </div>
                                            {row.apiece?
                                                <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                    addPackaging(idx)
                                                }}>
                                                    Добавить упаковку
                                                </div>
                                                :
                                                <div className={classes.addPackaging} style={{color: '#ffb300'}}>
                                                    Упаковок: {basket[row._id]?(basket[row._id].count/row.packaging).toFixed(1):0}
                                                </div>
                                            }
                                            {
                                                basket[row._id]&&basket[row._id].showConsignment?
                                                    <>
                                                    <br/>
                                                    <div className={classes.row}>
                                                        <div className={classes.valuecons}>Консигнация</div>
                                                        <div className={classes.counterbtncons} onClick={()=>{decrementConsignment(idx)}}>-</div>
                                                        <div className={classes.valuecons}>{basket[row._id]?basket[row._id].consignment:0}&nbsp;шт</div>
                                                        <div className={classes.counterbtncons} onClick={()=>{incrementConsignment(idx)}}>+</div>
                                                    </div>
                                                    <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                        addPackagingConsignment(idx)
                                                    }}>
                                                        Добавить упаковку
                                                    </div>
                                                    </>
                                                    :
                                                    null
                                            }
                                        </div>
                                    </div>
                                    <br/>
                                    <Divider/>
                                    <br/>
                                </div>
                                </LazyLoad>
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
    await initialApp(ctx)
    if(!ctx.store.getState().user.authenticated||'агент'!==ctx.store.getState().user.profile.role)
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