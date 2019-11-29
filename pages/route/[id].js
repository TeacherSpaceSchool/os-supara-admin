import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getOrganizations } from '../../src/gql/organization'
import { getOrders } from '../../src/gql/order'
import { getRoute, setRoute, deleteRoute, addRoute } from '../../src/gql/route'
import { getEcspeditors } from '../../src/gql/employment'
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
import dynamic from 'next/dynamic'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Router from 'next/router'
import { pdDDMMYYYY } from '../../src/lib'

const Confirmation = dynamic(
    () => import('../../components/dialog/Confirmation')
)

const Route = React.memo((props) => {
    const { profile, authenticated } = props.user;
    if(!['организация', 'менеджер', 'admin', 'экспедитор'].includes(profile.role))
        Router.push('/')
    const classes = routeStyle();
    const { data } = props;
    const router = useRouter()
    const { isMobileApp } = props.app;
    let [dateStart, setDateStart] = useState(data.route!==null?pdDDMMYYYY(new Date(data.route.dateStart)):null);
    let [dateEnd, setDateEnd] = useState(data.route!==null?data.route.dateEnd:null);
    let [employment, setEmployment] = useState(data.route?data.route.employment:{});
    let handleEmployment =  (event) => {
        setEmployment({_id: event.target.value, name: event.target.name})
    };
    let [organization, setOrganization] = useState(router.query.id==='new'?{}:data.route.employment.organization);
    let handleOrganization =  (event) => {
        setOrganization({_id: event.target.value, name: event.target.name})
    };
    let [invoices, setInvoices] = useState(data.route!==null?data.route.invoices:[]);
    let [cancelInvoices, setCancelInvoices] = useState([]);
    let [allInvoices, setAllInvoices] = useState([]);
    let [unselectedInvoices, setUnselectedInvoices] = useState([]);
    let [selectType, setSelectType] = useState('Все');
    let [employments, setEmployments] = useState([]);
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    useEffect(()=>{
        (async()=>{
            if(['организация', 'менеджер'].includes(profile.role)&&router.query.id==='new'){
                let organization = data.organizations.filter(element=>element._id===profile.organization)
                setOrganization(organization[0])
            }
        })()
    },[profile])
    useEffect(()=>{
        (async()=>{
            setUnselectedInvoices((await getOrders({search: '', sort: '-updatedAt', filter: 'обработка'})).invoices)
        })()
    },[])
    useEffect(()=>{
        (async()=>{
            if(router.query.id==='new')
                setEmployment({})
            setEmployments((await getEcspeditors({_id: organization._id})).ecspeditors)
        })()
    },[organization])
    useEffect(()=>{
        (async()=>{
            if(selectType=='Все')
                setAllInvoices([...invoices, ...unselectedInvoices])
            else if(selectType=='Свободные')
                setAllInvoices([...unselectedInvoices])
            else if(selectType=='Выбраные')
                setAllInvoices([...invoices])
        })()
    },[selectType, unselectedInvoices, invoices])
    const statusColor = {
        'создан': 'orange',
        'выполняется': 'blue',
        'выполнен': 'green',
    }
    let getInvoices = async ()=>{
        setUnselectedInvoices((await getOrders({search: '', sort: '-updatedAt', filter: 'обработка'})).invoices)
        setCancelInvoices([])
        setInvoices((await getRoute({_id: data.route._id})).route.invoices)
    }
    return (
        <App pageName={data.route?router.query.id==='new'?'Добавить':data.route.number:'Ничего не найдено'}>
            <Head>
                <title>{data.route?router.query.id==='new'?'Добавить':data.route.number:'Ничего не найдено'}</title>
            </Head>
            <Card className={isMobileApp?classes.pageM:classes.pageD}>
                {router.query.id==='new'?null:<div className={classes.status} style={{background: statusColor[data.route.status]}}>{data.route.status}</div>}
                <CardContent className={classes.column}>
                    {data.route?
                       <>
                       {router.query.id==='new'?null:<div className={classes.number}>{data.route.number}</div>}
                       {(router.query.id==='new'||data.route.status==='создан')&&profile.role==='admin'?
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
                           router.query.id==='new'||data.route.status==='создан'?
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
                                readOnly: !(router.query.id==='new'||data.route.status==='создан'),
                            }}
                            onChange={ event => setDateStart(event.target.value) }
                        />
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
                       <div className={classes.listInvoices} style={{zoom: isMobileApp?0.83:1}}>
                           {allInvoices?allInvoices.map((element, idx)=> {
                               return (
                                   <div key={idx} className={classes.row}>
                                       {['обработка', 'принят'].includes(element.orders[0].status)?
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
                                           if(employment._id!==data.route.employment._id&&data.route.status==='создан')editElement.employment = employment._id;
                                           if(dateStart&&data.route.status==='создан')editElement.dateStart = new Date(dateStart);
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
                                   {data.route.status==='создан'?
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
            </Card>
        </App>
    )
})

Route.getInitialProps = async function(ctx) {
    return {
        data: {
            ...ctx.query.id!=='new'?await getRoute({_id: ctx.query.id}):{route: {invoices: [], employment: {}, status: '', dateStart: null, dateEnd: null, number: ''}},
            ...await getOrganizations({search: '', sort: 'name', filter: ''}),
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