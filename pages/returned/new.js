import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../../src/styleMUI/catalog/catalog'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {checkInt} from '../../src/lib';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import {getBrands} from '../../src/gql/items';
import Router from 'next/router'
import { urlMain } from '../../redux/constants/other'
import TextField from '@material-ui/core/TextField';
import {getClients} from '../../src/gql/client'
import { getClientGqlSsr } from '../../src/getClientGQL'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { forceCheck } from 'react-lazyload';
import Confirmation from '../../components/dialog/Confirmation'
import { addReturned } from '../../src/gql/returned';
import Divider from '@material-ui/core/Divider';
import LazyLoad from 'react-lazyload';
import CardCatalogPlaceholder from '../../components/catalog/CardCatalogPlaceholder'
import initialApp from '../../src/initialApp'
import { getBrandOrganizations } from '../../src/gql/items'
import CircularProgress from '@material-ui/core/CircularProgress';

const Catalog = React.memo((props) => {
    const classes = pageListStyle();
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    const { profile } = props.user;
    const { data } = props;
    const [clients, setClients] = useState([]);
    const { search, filter, sort } = props.app;
    const [inputValue, setInputValue] = React.useState('');
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async()=>{
            if (inputValue.length<3) {
                setClients([]);
                if(open)
                    setOpen(false)
                if(loading)
                    setLoading(false)
            }
            else {
                if(!loading)
                    setLoading(true)
                if(searchTimeOut)
                    clearTimeout(searchTimeOut)
                searchTimeOut = setTimeout(async()=>{
                    setClients((await getClients({search: inputValue, sort: '-name', filter: 'all'})).clients)
                    if(!open)
                        setOpen(true)
                    setLoading(false)
                }, 500)
                setSearchTimeOut(searchTimeOut)
            }
        })()
    }, [inputValue]);
    const handleChange = event => {
        setInputValue(event.target.value);
    };
    const [list, setList] = useState(data.brands);
    const [items, setItems] = useState({});
    let [organization, setOrganization] = useState({});
    let handleOrganization = async (organization) => {
        setItems({})
        setOrganization(organization)
    };
    useEffect(()=>{
        (async()=>{
            if(profile.organization){
                organization = data.brandOrganizations.filter(elem=>elem._id===profile.organization)[0]
                setOrganization({...organization})
            }
        })()
    },[])
    useEffect(()=>{
        (async()=>{
            if(organization._id){
                setList((await getBrands({organization: organization._id, search: search, sort: sort})).brands)
            }
        })()
    },[filter, sort, search, organization])
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    let [client, setClient] = useState();
    let handleClient =  (client) => {
        setClient(client)
        setOpen(false)
    };
    let [allPrice, setAllPrice] = useState(0);
    const { isMobileApp } = props.app;
    let increment = (idx)=>{
        let id = list[idx]._id
        if(!items[id])
            items[id] = {_id: id, item: list[idx].name, count: 0, allPrice: 0, allTonnage: 0, allSize: 0, weight: checkInt(list[idx].weight), price: list[idx].price, size: checkInt(list[idx].size)}
        items[id].count+=1
        items[id].allPrice = Math.round(items[id].count*(list[idx].stock?list[idx].stock:list[idx].price))
        items[id].allTonnage = Math.round(items[id].count*items[id].weight)
        items[id].allSize = Math.round(items[id].count*items[id].size)
        setItems({...items})
    }
    let decrement = (idx)=>{
        let id = list[idx]._id
        if(!items[id])
            items[id] = {_id: id, item: list[idx].name, count: 0, allPrice: 0, allTonnage: 0, allSize: 0, weight: checkInt(list[idx].weight), price: list[idx].price, size: checkInt(list[idx].size)}
        if(items[id].count>0) {
            items[id].count -= 1
            items[id].allPrice = Math.round(items[id].count*(list[idx].stock?list[idx].stock:list[idx].price))
            items[id].allTonnage = Math.round(items[id].count*items[id].weight)
            items[id].allSize = Math.round(items[id].count*items[id].size)
            setItems({...items})
        }
    }
    let setBasketChange= (idx, count)=>{
        let id = list[idx]._id
        if(!items[id])
            items[id] = {_id: id, item: list[idx].name, count: 0, allPrice: 0, allTonnage: 0, allSize: 0, weight: checkInt(list[idx].weight), price: list[idx].price, size: checkInt(list[idx].size)}
        items[id].count = checkInt(count)
        items[id].allPrice = Math.round(items[id].count*(list[idx].stock?list[idx].stock:list[idx].price))
        items[id].allTonnage = Math.round(items[id].count*items[id].weight)
        items[id].allSize = Math.round(items[id].count*items[id].size)
        setItems({...items})
    }
    useEffect(()=>{
        let keys = Object.keys(items)
        allPrice = 0
        for(let i=0; i<keys.length; i++){
            allPrice += items[keys[i]].allPrice
        }
        setAllPrice(Math.round(allPrice))
    },[items])
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName='Каталог возврата'>
            <Head>
                <title>Каталог возврата</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Каталог возврата' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/returned/new`} />
                <link rel='canonical' href={`${urlMain}/returned/new`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <Autocomplete
                        open={open}
                        disableOpenOnFocus
                        className={classes.input}
                        options={clients}
                        getOptionLabel={option => `${option.name}${option.address&&option.address[0]?` (${option.address[0][2]?`${option.address[0][2]}, `:''}${option.address[0][0]})`:''}`}
                        onChange={(event, newValue) => {
                            handleClient(newValue)
                        }}
                        noOptionsText='Ничего не найдено'
                        renderInput={params => (
                            <TextField {...params} label='Выберите клиента' variant='outlined' fullWidth
                                       onChange={handleChange}
                                               InputProps={{
                                                   ...params.InputProps,
                                                   endAdornment: (
                                                       <React.Fragment>
                                                           {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                                           {params.InputProps.endAdornment}
                                                       </React.Fragment>
                                                   ),
                                               }}
                            />
                        )}
                    />
                    <br/>
                    {
                        data.brandOrganizations.length>1||profile.organization?
                            <>
                            <Autocomplete
                                className={classes.input}
                                options={data.brandOrganizations}
                                getOptionLabel={option => option.name}
                                onChange={(event, newValue) => {
                                    handleOrganization(newValue)
                                }}
                                noOptionsText='Ничего не найдено'
                                renderInput={params => (
                                    <TextField {...params} label='Выберите организацию' variant='outlined' fullWidth />
                                )}
                            />
                            <br/>
                            </>
                            :null

                    }
                    {
                        list.map((row, idx) => {
                            let price
                            if(items[row._id]&&items[row._id].allPrice)
                                price = items[row._id].allPrice
                            else if(row.stock)
                                price = row.stock
                            else
                                price = row.price
                            if(idx<=pagination)
                                return(
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
                                                                   value={items[row._id]?items[row._id].count:''} onChange={(event) => {
                                                                setBasketChange(idx, event.target.value)
                                                            }}/>
                                                            <div className={classes.counterbtn} onClick={() => {
                                                                increment(idx)
                                                            }}>+
                                                            </div>
                                                        </div>
                                                    </div>
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
                                for (let i = 0; i < client.address.length; i++) {
                                    proofeAddress = client.address[i][0].length > 0
                                }
                                const action = async() => {
                                    await addReturned({
                                        info: '',
                                        address: client.address[0],
                                        organization: organization._id,
                                        client: client._id,
                                        items: Object.values(items)
                                    })
                                    Router.push('/returneds')
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }
                            else
                                showSnackBar('Пожалуйста уточните адрес')
                        }
                        else
                            showSnackBar('Пожалуйста выберите клиента')
                    }
                    else
                        showSnackBar('Добавьте товар в корзину')
                }}>
                    Сохранить
                </div>
            </div>
        </App>
    )
})

Catalog.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['суперагент','агент','admin','менеджер','организация'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            brands: [],
            organization: {},
            ...await getBrandOrganizations({search: '', sort: ctx.store.getState().app.sort, filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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