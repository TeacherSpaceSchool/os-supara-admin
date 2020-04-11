import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../../src/styleMUI/statistic/statistic'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Router from 'next/router'
import { urlMain } from '../../redux/constants/other'
import initialApp from '../../src/initialApp'
import CardOrder from '../../components/order/CardOrder'
import CardReturned from '../../components/returned/CardReturned'
import CardOrderPlaceholder from '../../components/order/CardOrderPlaceholder'
import CardReturnedPlaceholder from '../../components/returned/CardReturnedPlaceholder'
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getActiveOrganization } from '../../src/gql/statistic'
import { checkInt } from '../../src/lib'
import { getEcspeditors } from '../../src/gql/employment'
import { getDistricts } from '../../src/gql/district'
import { getOrdersFromDistrict, setInvoicesLogic } from '../../src/gql/order'
import { getReturnedsFromDistrict, setReturnedLogic } from '../../src/gql/returned'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as appActions from '../../redux/actions/app'
import Checkbox from '@material-ui/core/Checkbox';
import LazyLoad from 'react-lazyload';
import Fab from '@material-ui/core/Fab';
import SaveIcon from '@material-ui/icons/Save';
import * as snackbarActions from '../../redux/actions/snackbar'
import dynamic from 'next/dynamic'

const height = 225
const Confirmation = dynamic(() => import('../../components/dialog/Confirmation'))

const LogistiOorder = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let { isMobileApp, date, filter } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog} = props.mini_dialogActions;
    let [ecspeditors, setEcspeditors] = useState([]);
    let [type, setType] = useState('Заказы');
    let [ecspeditor, setEcspeditor] = useState(undefined);
    let [districts, setDistricts] = useState([]);
    let [price, setPrice] = useState(0);
    let [track, setTrack] = useState(0);
    let [weight, setWeight] = useState(0);
    let [size, setSize] = useState(0);
    let [lengthList, setLengthList] = useState(0);
    let [selectedOrders, setSelectedOrders] = useState([]);
    let [orders, setOrders] = useState([]);
    let [district, setDistrict] = useState(profile.role==='агент'?{_id: profile.organization}:undefined);
    let [showStat, setShowStat] = useState(false);
    let [organization, setOrganization] = useState(profile.organization?{_id: profile.organization}:undefined);
    const { showLoad } = props.appActions;
    let [pagination, setPagination] = useState(100);
    const { showSnackBar } = props.snackbarActions;
    const checkPagination = ()=>{
        if(pagination<orders.length){
            setPagination(pagination+100)
        }
    }
    useEffect(()=>{
        (async()=>{
            setSelectedOrders([])
            setEcspeditor(undefined)
            setOrders([])
            if(organization){
                await showLoad(true)
                setDistricts((await getDistricts({search: '', sort: '-name', organization: organization._id})).districts)
                setEcspeditors((await getEcspeditors({_id: organization._id})).ecspeditors)
                await showLoad(false)
            }
            else {
                setDistricts([])
                setEcspeditors([])
            }
        })()
    },[organization])
    useEffect(()=>{
        (async()=>{
            setSelectedOrders([])
            if(district){
                if(!date)
                    date = new Date
                await showLoad(true)
                setOrders(
                    filter==='Заказы'?
                        (await getOrdersFromDistrict({organization: organization._id, district: district._id, date: date})).invoicesFromDistrict
                        :
                        (await getReturnedsFromDistrict({organization: organization._id, district: district._id, date: date})).returnedsFromDistrict
                )
                await showLoad(false)
            }
            else {
                setOrders([])
            }
            setType(filter)
        })()
    },[district, date, filter])
    useEffect(()=>{
        (async()=>{
            price = 0
            weight = 0
            size = 0
            lengthList = 0
            for(let i=0; i<orders.length; i++){
                if(selectedOrders.includes(orders[i]._id)) {
                    if (orders[i].orders&&orders[i].allPrice) {
                        for(let i1=0; i1<orders[i].orders.length;i1++){
                            price += (orders[i].orders[i1].allPrice - orders[i].orders[i1].returned * (orders[i].orders[i1].allPrice / orders[i].orders[i1].count))
                        }
                    }
                    if (orders[i].allSize)
                        size += orders[i].allSize
                    lengthList += 1
                    if (orders[i].allTonnage)
                        weight += orders[i].allTonnage
                }
            }
            setPrice(price)
            setWeight(weight)
            setSize(size)
            setLengthList(lengthList)
        })()
    },[selectedOrders])
    const filters = [{name: 'Заказы', value: 'Заказы'}, {name: 'Возвраты', value: 'Возвраты'}]

    return (
        <App pageName='Логистика' dates={true} checkPagination={checkPagination} filters={filters}>
            <Head>
                <title>Логистика</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Логистика' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/logisticorder`} />
                <link rel='canonical' href={`${urlMain}/statistic/logisticorder`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        {
                            profile.role==='admin'?
                                <Autocomplete
                                    className={classes.input}
                                    options={data.activeOrganization}
                                    getOptionLabel={option => option.name}
                                    value={organization}
                                    onChange={(event, newValue) => {
                                    setOrganization(newValue)
                                }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                    <TextField {...params} label='Организация' fullWidth />
                                )}/>
                                :
                                null
                        }
                        {
                            profile.role!=='агент'?
                                <Autocomplete
                                    className={classes.input}
                                    options={districts}
                                    getOptionLabel={option => option.name}
                                    value={district}
                                    onChange={(event, newValue) => {
                                        setDistrict(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Район' fullWidth />
                                    )}
                                />
                                :
                                null
                        }
                    </div>
                    <div className={classes.row}>
                        <Autocomplete
                            className={classes.input}
                            options={ecspeditors}
                            getOptionLabel={option => option.name}
                            value={ecspeditor}
                            onChange={(event, newValue) => {
                                setEcspeditor(newValue)
                            }}
                            noOptionsText='Ничего не найдено'
                            renderInput={params => (
                                <TextField {...params} label='Экспедитор' fullWidth />
                            )}/>
                        <TextField
                            type={isMobileApp?'number':'text'}
                            label='Рейс'
                            value={track}
                            className={classes.input}
                            onChange={(event)=>{
                                while((event.target.value).includes(','))
                                    event.target.value = (event.target.value).replace(',', '.')
                                setTrack(checkInt(event.target.value))
                            }}
                            inputProps={{
                                'aria-label': 'description',
                            }}
                        />
                    </div>
                    <div className={classes.listInvoices}>
                        {orders?orders.map((element, idx)=> {
                            if (idx <= pagination)
                                return (
                                    <div key={idx} style={isMobileApp ? {alignItems: 'baseline'} : {}}
                                         className={isMobileApp ? classes.column1 : classes.row1}>
                                        <Checkbox checked={selectedOrders.includes(element._id)}
                                                  onChange={() => {
                                                      if (!selectedOrders.includes(element._id)) {
                                                          selectedOrders.push(element._id)
                                                      } else {
                                                          selectedOrders.splice(selectedOrders.indexOf(element._id), 1)
                                                      }
                                                      setSelectedOrders([...selectedOrders])
                                                  }}
                                        />
                                        <LazyLoad scrollContainer={'.App-body'} key={element._id}
                                                  height={height} offset={[height, 0]} debounce={0}
                                                  once={true}
                                                  placeholder={filter==='Заказы'?<CardOrderPlaceholder height={height}/>:<CardReturnedPlaceholder/>}>
                                            {
                                                type==='Заказы'?
                                                    <CardOrder element={element}/>
                                                    :
                                                type==='Возвраты'?
                                                    <CardReturned element={element}/>
                                                    :
                                                    null
                                            }
                                        </LazyLoad>
                                    </div>
                                )
                            else return null
                        }):null}
                    </div>
                </CardContent>
            </Card>
            <Fab onClick={()=>{
                if(selectedOrders.length>0&&(ecspeditor||track!==undefined)){
                    const action = async() => {
                        if(selectedOrders.length>0) {
                            let element = {invoices: selectedOrders, returneds: selectedOrders}
                            if (ecspeditor) element.ecspeditor = ecspeditor._id
                            if (track !== undefined) element.track = track
                            type === 'Заказы' ? await setInvoicesLogic(element) : setReturnedLogic(element)
                        }
                    }
                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                    showMiniDialog(true)
                }
                else showSnackBar('Заполните все поля')
            }} color='primary' aria-label='add' className={classes.fab}>
                    <SaveIcon />
            </Fab>
            <div className='count' onClick={()=>setShowStat(!showStat)}>
                {
                    selectedOrders?
                        <>
                        {`${'Всего'}: ${lengthList}`}
                        {
                            showStat?
                                <>
                                {price?<>
                                <br/>
                                <br/>
                                {`Сумма: ${price} сом`}
                                </>:null}
                                {weight?<>
                                <br/>
                                <br/>
                                {`Тоннаж: ${weight} кг`}
                                </>:null}
                                {size?<>
                                <br/>
                                <br/>
                                {`Кубатура: ${size} см³`}
                                </>:null}
                                </>
                                :
                                null
                        }
                        </>
                        :null
                }
            </div>
        </App>
    )
})

LogistiOorder.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.filter = 'Заказы'
    if(!['admin', 'организация', 'агент', 'менеджер'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            ...await getActiveOrganization(ctx.req?await getClientGqlSsr(ctx.req):undefined),
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
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogistiOorder);