import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getOrganizations } from '../../src/gql/organization'
import { getOrdersForRouting } from '../../src/gql/order'
import { getRoute, setRoute, deleteRoute, addRoute } from '../../src/gql/route'
import { getEcspeditors } from '../../src/gql/employment'
import { getAuto } from '../../src/gql/auto'
import routeStyle from '../../src/styleMUI/route/route'
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import CardOrder from '../../components/order/CardOrder';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Router from 'next/router'
import {checkFloat, pdDatePicker} from '../../src/lib'
import dynamic from 'next/dynamic'
import { urlMain } from '../../redux/constants/other'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'

const Confirmation = dynamic(() => import('../../components/dialog/Confirmation'))
const GeoRoute = dynamic(() => import('../../components/dialog/GeoRoute'))
const ShippingList = dynamic(() => import('../../components/dialog/ShippingList'))
const ReturnedList = dynamic(() => import('../../components/dialog/ReturnedList'))

const Route = React.memo((props) => {
    const { profile } = props.user;
    const classes = routeStyle();
    const { data } = props;
    const router = useRouter()
    const { isMobileApp } = props.app;

    let [allPrice, setAllPrice] = useState(0);
    let [allPriceAfterReturned, setAllPriceAfterReturned] = useState(0);

    let [dateStart, setDateStart] = useState(pdDatePicker(data.route?new Date(data.route.dateStart):new Date()));
    let [employment, setEmployment] = useState(data.route?data.route.employment:{});
    let [status, setStatus] = useState(data.route.status);
    let handleEmployment =  (event) => {
        setEmployment({_id: event.target.value, name: event.target.name})
    };
    let [organization, setOrganization] = useState(router.query.id==='new'||!data.route?{}:data.route.employment.organization);
    let handleOrganization =  (event) => {
        setOrganization({_id: event.target.value, name: event.target.name})
    };
    let [invoices, setInvoices] = useState(data.route?data.route.invoices:[]);
    let [cancelInvoices, setCancelInvoices] = useState([]);
    let [allInvoices, setAllInvoices] = useState([]);
    let [allTonnage, setAllTonnage] = useState(data.route&&data.route.allTonnage?data.route.allTonnage:0);
    let [allSize, setAllSize] = useState(data.route&&data.route.allSize?data.route.allSize:0);
    let [unselectedInvoices, setUnselectedInvoices] = useState([]);
    let [selectType, setSelectType] = useState('Все');
    let [auto, setAuto] = useState({});
    useEffect(()=>{
        (async()=>{
            if(employment._id)
                setAuto((await getAuto({_id: employment._id})).auto)
        })()
    },[employment])
    let [employments, setEmployments] = useState([]);
    const { setMiniDialog, showMiniDialog, showFullDialog, setFullDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    useEffect(()=>{
        (async()=>{
            if(data.route) {
                if (['организация', 'менеджер'].includes(profile.role) && router.query.id === 'new') {
                    let organization = data.organizations.filter(element => element._id === profile.organization)
                    setOrganization(organization[0])
                }
            }
        })()
    },[profile])
    useEffect(()=>{
        (async()=>{
            if(data.route&&['организация', 'менеджер', 'admin'].includes(profile.role)) {
                setUnselectedInvoices((await getOrdersForRouting()).invoicesForRouting)
            }
        })()
    },[])
    useEffect(()=>{
        (async()=>{
            if(data.route) {
                if (router.query.id === 'new')
                    setEmployment({})
                if(organization._id)
                    setEmployments((await getEcspeditors({_id: organization._id})).ecspeditors)
                setUnselectedInvoices((await getOrdersForRouting(organization._id  )).invoicesForRouting)
            }
        })()
    },[organization])
    useEffect(()=>{
        (async()=>{
            if(data.route) {
                let allInvoices
                if (selectType == 'Все')
                    allInvoices = [...invoices, ...unselectedInvoices]
                else if (selectType == 'Свободные')
                    allInvoices = [...unselectedInvoices]
                else if (selectType == 'Выбраные')
                    allInvoices = [...invoices]
                allInvoices.sort((a, b) => {
                    a.createdAt = new Date(a.createdAt)
                    b.createdAt = new Date(b.createdAt)
                    if (a.createdAt > b.createdAt) return -1;
                    if (a.createdAt < b.createdAt) return 1;
                    return 0;
                })
                setAllInvoices([...allInvoices])
            }
        })()
    },[selectType, unselectedInvoices, invoices])
    useEffect(()=>{
        (async()=>{
            allTonnage = 0
            allSize = 0
            allPrice = 0
            allPriceAfterReturned = 0
           for(let i=0; i<invoices.length; i++){
               allTonnage += invoices[i].allTonnage
               allSize += invoices[i].allSize
               allPrice += invoices[i].allPrice

               invoices[i].allPriceAfterReturned = 0
               for(let i1=0; i1<invoices[i].orders.length; i1++){
                   invoices[i].allPriceAfterReturned += (invoices[i].orders[i1].allPrice-invoices[i].orders[i1].returned*(invoices[i].orders[i1].item.stock?invoices[i].orders[i1].item.stock:invoices[i].orders[i1].item.price))
               }
               allPriceAfterReturned += invoices[i].allPriceAfterReturned
           }
           setAllTonnage(allTonnage)
            setAllSize(allSize)
            setAllPriceAfterReturned(allPriceAfterReturned)
            setAllPrice(allPrice)
        })()
    },[invoices])
    const statusColor = {
        'создан': 'orange',
        'выполняется': 'blue',
        'выполнен': 'green',
    }
    let getInvoices = async ()=>{
        if(data.route){
            setUnselectedInvoices((await getOrdersForRouting()).invoicesForRouting)
            setCancelInvoices([])
            if(data.route._id) {
                let route = (await getRoute({_id: data.route._id})).route
                setInvoices(route.invoices)
                setStatus(route.status)
            }
        }
    }
    const breakGeoRoute = (invoices.filter((element)=>!element.address[1])).length>0
    return (
        <App pageName={data.route?router.query.id==='new'?'Добавить':data.route.number:'Ничего не найдено'}>
            <Head>
                <title>{data.route?router.query.id==='new'?'Добавить':data.route.number:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={data.route?router.query.id==='new'?'Добавить':data.route.number:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/route/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/route/${router.query.id}`}/>
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.2.0/dist/leaflet.css" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
                <link rel="stylesheet" href="https://unpkg.com/leaflet-routing-machine@latest/dist/leaflet-routing-machine.css" />
            </Head>
            <Card className={isMobileApp?classes.pageM:classes.pageD}>
                {data.route?
                    <>
                    {router.query.id==='new'?null:<div className={classes.status} style={{background: statusColor[status]}}>{status}</div>}
                    <CardContent className={classes.column}>
                        {data.route?
                            <>
                            {router.query.id==='new'?null:<div className={classes.number}>{data.route.number}</div>}
                            {(router.query.id==='new')&&profile.role==='admin'?
                                <FormControl className={isMobileApp?classes.inputM:classes.inputDF}>
                                    <InputLabel>Организация</InputLabel>
                                    <Select value={organization._id}onChange={handleOrganization}>
                                        {data.organizations.map((element)=>
                                            <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                        )}
                                    </Select>
                                </FormControl>
                                :
                                <TextField
                                    label='Организация'
                                    value={organization.name}
                                    className={isMobileApp?classes.inputM:classes.inputDF}
                                    inputProps={{
                                        'aria-label': 'description',
                                        readOnly: true,
                                    }}
                                />
                            }
                            <br/>
                            {
                                (router.query.id==='new'||status==='создан')&&['admin', 'организация', 'менеджер'].includes(profile.role)?
                                    <FormControl className={isMobileApp?classes.inputM:classes.inputDF}>
                                        <InputLabel>Экспедитор</InputLabel>
                                        <Select value={employment._id} onChange={handleEmployment}>
                                            {employments.map((element)=>
                                                <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                    :
                                    <TextField
                                        label='Экспедитор'
                                        value={employment.name}
                                        className={isMobileApp?classes.inputM:classes.inputDF}
                                        inputProps={{
                                            'aria-label': 'description',
                                            readOnly: true,
                                        }}
                                    />
                            }
                            <br/>
                            <TextField
                                className={isMobileApp?classes.inputM:classes.inputDF}
                                label='Дата'
                                type='date'
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                value={dateStart}
                                inputProps={{
                                    'aria-label': 'description',
                                    readOnly: !(router.query.id==='new'||status==='создан'),
                                }}
                                onChange={ event => setDateStart(event.target.value) }
                            />
                            <br/>
                            <div className={classes.row}>
                                <div className={classes.nameField}>
                                    Сумма&nbsp;{allPriceAfterReturned!==allPrice?'(факт./итого)':''}:&nbsp;
                                </div>
                                <div className={classes.value}>
                                    {`${allPriceAfterReturned!==allPrice?`${allPriceAfterReturned} сом/`:''}${allPrice} сом`}
                                </div>
                            </div>
                            {
                                allTonnage?
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>
                                            Тоннаж{auto.tonnage?' (груз/автомобиль)':''}:&nbsp;
                                        </div>
                                        <div className={classes.value} style={{color: !auto.tonnage||allTonnage<checkFloat(auto.tonnage)?'green':'red'}}>
                                            {`${allTonnage} кг${auto.tonnage?`/${auto.tonnage} кг`:''}`}
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                allSize?
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>
                                            Кубатура{auto.size?' (груз/автомобиль)':''}:&nbsp;
                                        </div>
                                        <div className={classes.value} style={{color: !auto.size||allSize<checkFloat(auto.size)?'green':'red'}}>
                                            {`${allSize} см³${auto.size?`/${auto.size} см³`:''}`}
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            <br/>
                            <div style={{color: breakGeoRoute?'red':'#ffb300'}} onClick={()=>{
                                setFullDialog('Маршрут', <GeoRoute invoices={invoices} route={data.route._id}  getInvoices={getInvoices}/>)
                                showFullDialog(true)
                            }} className={classes.geo}>{breakGeoRoute?'Маршрут неполный':'Просмотреть маршрут'}</div>
                            <div style={{color: breakGeoRoute?'red':'#ffb300'}} onClick={()=>{
                                setMiniDialog('Cписок загрузки', <ShippingList invoices={invoices}/>)
                                showMiniDialog(true)
                            }} className={classes.geo}>Cписок загрузки</div>
                            <div style={{color: breakGeoRoute?'red':'#ffb300'}} onClick={()=>{
                                setMiniDialog('Cписок выгрузки', <ReturnedList invoices={invoices}/>)
                                showMiniDialog(true)
                            }} className={classes.geo}>Cписок выгрузки</div>
                            <br/>
                            <div style={{ justifyContent: 'center' }} className={classes.row}>
                                <div style={{background: selectType==='Все'?'#ffb300':'#ffffff'}} onClick={()=>{setSelectType('Все')}} className={classes.selectType}>
                                    Все
                                </div>
                                <div style={{background: selectType==='Свободные'?'#ffb300':'#ffffff'}} onClick={()=>{setSelectType('Свободные')}} className={classes.selectType}>
                                    Свободные
                                </div>
                                <div style={{background: selectType==='Выбраные'?'#ffb300':'#ffffff'}} onClick={()=>{setSelectType('Выбраные')}} className={classes.selectType}>
                                    Выбраные
                                </div>
                            </div>
                            <br/>
                            <div className={classes.listInvoices}>
                                {allInvoices?allInvoices.map((element, idx)=> {
                                    return (
                                        <div key={idx} style={isMobileApp?{alignItems: 'baseline'}:{}} className={isMobileApp?classes.column:classes.row}>
                                            {['обработка', 'принят'].includes(element.orders[0].status)&&profile.role!=='экспедитор'?
                                                <Checkbox checked={invoices.includes(element)} onChange={() => {
                                                    if (!invoices.includes(element)) {
                                                        invoices.push(element)
                                                        unselectedInvoices.splice(unselectedInvoices.indexOf(element), 1)
                                                        cancelInvoices.splice(cancelInvoices.indexOf(element), 1)
                                                    } else {
                                                        invoices.splice(invoices.indexOf(element), 1)
                                                        unselectedInvoices.push(element)
                                                        cancelInvoices.push(element)
                                                    }
                                                    setInvoices([...invoices])
                                                }}
                                                />:null}
                                            <CardOrder getInvoices={getInvoices} route={data.route._id} element={element}/>
                                        </div>
                                    )
                                }):null}
                            </div>
                            <div className={isMobileApp?classes.bottomRouteM:classes.bottomRouteD}>
                                {
                                    router.query.id==='new'?
                                        <Button onClick={async()=>{
                                            if (dateStart&&employment._id&&organization._id) {
                                                const action = async() => {
                                                    if (employment._id!==undefined&&dateStart) {
                                                        invoices = invoices.map(element=>element._id)
                                                        await addRoute({
                                                            invoices: invoices,
                                                            employment: employment._id,
                                                            dateStart: new Date(dateStart)
                                                        })
                                                        Router.push('/routes')
                                                    }
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
                                            const action = async() => {

                                                let editElement = {_id: data.route._id}
                                                if(employment._id!==data.route.employment._id&&status==='создан')editElement.employment = employment._id;
                                                if(dateStart&&status==='создан')editElement.dateStart = new Date(dateStart);
                                                editElement.invoices = invoices.map(element=>element._id);
                                                if(cancelInvoices.length>0)editElement.cancelInvoices = cancelInvoices.map(element=>element._id);
                                                await setRoute(editElement)
                                                getInvoices()
                                            }
                                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }} size='small' color='primary'>
                                            Сохранить
                                        </Button>
                                        {['организация', 'менеджер', 'admin'].includes(profile.role)&&status==='создан'?
                                            <>
                                            <Button onClick={async()=>{
                                                const action = async() => {
                                                    await deleteRoute([data.route._id])
                                                    Router.push('/routes')
                                                }
                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }} size='small' color='primary'>
                                                Удалить
                                            </Button>
                                            </>
                                            :
                                            null
                                        }
                                        </>
                                }
                            </div>
                            </>
                            :'Ничего не найдено'}
                        <br/>
                    </CardContent>
                    </>
                    :
                    <CardContent className={classes.column}>
                        Ничего не найдено
                    </CardContent>
                }
            </Card>
        </App>
    )
})

Route.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['организация', 'менеджер', 'admin', 'экспедитор'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
                Router.push('/')
    return {
        data: {
            ...ctx.query.id!=='new'?await getRoute({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined): {route: {allTonnage: 0, allSize: 0, invoices: [], employment: {}, status: '', dateStart: new Date(), dateEnd: null, number: ''}},
            ...await getOrganizations({search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
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

export default connect(mapStateToProps, mapDispatchToProps)(Route);