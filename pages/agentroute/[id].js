import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getOrganizations } from '../../src/gql/organization'
import { getAgentRoute, setAgentRoute, deleteAgentRoute, addAgentRoute, getDistrictsWithoutAgentRoutes } from '../../src/gql/agentRoute'
import agentRouteStyle from '../../src/styleMUI/agentRoute/agentRoute'
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card';
import CardClient from '../../components/client/CardClient';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
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
import dynamic from 'next/dynamic'
import { urlMain } from '../../redux/constants/other'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import CardClientPlaceholder from '../../components/client/CardClientPlaceholder'
import LazyLoad from 'react-lazyload';
const height = 140

const Confirmation = dynamic(() => import('../../components/dialog/Confirmation'))

const AgentRoute = React.memo((props) => {
    const { profile } = props.user;
    const classes = agentRouteStyle();
    const { data } = props;
    const router = useRouter()
    const {search, isMobileApp } = props.app;
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<filtredClient){
            setPagination(pagination+100)
        }
    }

    let [name, setName] = useState(data.agentRoute?data.agentRoute.name:'');
    let handleName =  (event) => {
        setName(event.target.value)
    };
    let [districts, setDistricts] = useState([]);
    let [district, setDistrict] = useState(data.agentRoute&&data.agentRoute.district?data.agentRoute.district:{})
    let handleDistrict =  (event) => {
        let district = (districts.filter(district=>district._id===event.target.value))[0]
        setDistrict(district)
        setClients([[],[],[],[],[],[],[]])
    };
    let [organization, setOrganization] = useState(router.query.id==='new'||!data.agentRoute?{}:{_id: data.agentRoute.organization._id, name: data.agentRoute.organization.name});
    let handleOrganization =  (event) => {
        setOrganization({_id: event.target.value, name: event.target.name})
        setClients([[],[],[],[],[],[],[]])
    };
    let [clients, setClients] = useState(data.agentRoute?data.agentRoute.clients:[[],[],[],[],[],[],[]]);
    let [filtredClient, setFiltredClient] = useState([]);
    let [dayWeek, setDayWeek] = useState(0);
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    useEffect(()=>{
        (async()=>{
            if(router.query.id==='new'&&profile.organization){
                let organzation = data.organizations.filter(organization=>organization._id===profile.organization)
                setOrganization(organzation[0])
            }
        })()
    },[profile])
    useEffect(()=>{
        (async()=>{
            if(router.query.id==='new'&&data.agentRoute&&organization._id) {
                setDistricts((await getDistrictsWithoutAgentRoutes({organization: organization._id})).districtsWithoutAgentRoutes)
                setDistrict({})
            }
        })()
    },[organization])
    useEffect(()=>{
        (async()=>{
            if(data.agentRoute&&district.client) {
                let filtredClient = [...district.client]
                filtredClient = filtredClient.filter(element=>
                    ((element.phone.filter(phone => phone.toLowerCase().includes(search.toLowerCase()))).length > 0) ||
                    (element.name.toLowerCase()).includes(search.toLowerCase())||
                    ((element.address.filter(addres=>addres[0].toLowerCase().includes(search.toLowerCase()))).length>0)||
                    ((element.address.filter(addres=>(addres[2]?addres[2]:'').toLowerCase().includes(search.toLowerCase()))).length>0)
                )
                setFiltredClient([...filtredClient])
            }
        })()
    },[search, district])
    return (
        <App searchShow={true} checkPagination={checkPagination} pageName={data.agentRoute?router.query.id==='new'?'Добавить':data.agentRoute.name:'Ничего не найдено'}>
            <Head>
                <title>{data.agentRoute?router.query.id==='new'?'Добавить':data.agentRoute.name:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={data.agentRoute?router.query.id==='new'?'Добавить':data.agentRoute.name:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/agentroute/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/agentroute/${router.query.id}`}/>
            </Head>
            <Card className={isMobileApp?classes.pageM:classes.pageD}>
                <CardContent className={classes.column}>
                    {data.agentRoute?
                        <>
                            <TextField
                                label='Название'
                                value={name}
                                className={isMobileApp?classes.inputM:classes.inputDF}
                                onChange={handleName}
                                inputProps={{
                                    'aria-label': 'description',
                                    readOnly: profile.role==='агент',
                                }}
                            />
                        {router.query.id==='new'&&profile.role==='admin'?
                            <FormControl className={isMobileApp?classes.inputM:classes.inputDF}>
                                <InputLabel>Организация</InputLabel>
                                <Select value={organization._id}onChange={handleOrganization}>
                                    {data.organizations.map((element)=>
                                        <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            :
                            null
                        }
                        {router.query.id==='new'?
                            <FormControl className={isMobileApp?classes.inputM:classes.inputDF}>
                                <InputLabel>Район</InputLabel>
                                <Select value={district._id} onChange={handleDistrict}>
                                    {districts.map((element)=>
                                        <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            :
                            <TextField
                                label='Район'
                                value={district.name}
                                className={isMobileApp?classes.inputM:classes.inputDF}
                                inputProps={{
                                    'aria-label': 'description',
                                    readOnly: true
                                }}
                            />
                        }
                        <br/>
                            <div style={{ justifyContent: 'center' }} className={classes.row}>
                                <div style={{background: dayWeek===0?'#ffb300':'#ffffff'}} onClick={()=>{setDayWeek(0)}} className={classes.selectType}>
                                    {`ПН ${clients[0].length}`}
                                </div>
                                <div style={{background: dayWeek===1?'#ffb300':'#ffffff'}} onClick={()=>{setDayWeek(1)}} className={classes.selectType}>
                                    {`ВТ ${clients[1].length}`}
                                </div>
                                <div style={{background: dayWeek===2?'#ffb300':'#ffffff'}} onClick={()=>{setDayWeek(2)}} className={classes.selectType}>
                                    {`СР ${clients[2].length}`}
                                </div>
                                <div style={{background: dayWeek===3?'#ffb300':'#ffffff'}} onClick={()=>{setDayWeek(3)}} className={classes.selectType}>
                                    {`ЧТ ${clients[3].length}`}
                                </div>
                                <div style={{background: dayWeek===4?'#ffb300':'#ffffff'}} onClick={()=>{setDayWeek(4)}} className={classes.selectType}>
                                    {`ПТ ${clients[4].length}`}
                                </div>
                                <div style={{background: dayWeek===5?'#ffb300':'#ffffff'}} onClick={()=>{setDayWeek(5)}} className={classes.selectType}>
                                    {`СБ ${clients[5].length}`}
                                </div>
                                <div style={{background: dayWeek===6?'#ffb300':'#ffffff'}} onClick={()=>{setDayWeek(6)}} className={classes.selectType}>
                                    {`ВС ${clients[6].length}`}
                                </div>
                            </div>
                            <br/>
                            <div className={classes.listInvoices}>
                                {filtredClient?filtredClient.map((element, idx)=> {
                                    if (idx <= pagination) {
                                        let selected = clients[dayWeek].includes(element._id)
                                        if(profile.role!=='агент'||selected)
                                        return (
                                            <div key={idx} style={isMobileApp ? {alignItems: 'baseline'} : {}}
                                                 className={isMobileApp ? classes.column : classes.row}>
                                                <LazyLoad scrollContainer={'.App-body'} key={element._id}
                                                          height={height} offset={[height, 0]} debounce={0}
                                                          once={true}
                                                          placeholder={<CardClientPlaceholder height={height}/>}>
                                                    <div>
                                                        {
                                                            profile.role!=='агент'?
                                                                <Checkbox checked={selected}
                                                                          onChange={() => {
                                                                              if (!selected) {
                                                                                  clients[dayWeek].push(element._id)
                                                                              } else {
                                                                                  clients[dayWeek].splice(clients[dayWeek].indexOf(element._id), 1)
                                                                              }
                                                                              setClients([...clients])
                                                                          }}
                                                                />
                                                                :null
                                                        }
                                                        <CardClient element={element}/>
                                                    </div>
                                                </LazyLoad>
                                            </div>
                                        )
                                    }
                                    else return null
                                }):null}
                            </div>
                        {
                            profile.role!=='агент'?
                                <div className={isMobileApp?classes.bottomRouteM:classes.bottomRouteD}>
                                    {
                                        router.query.id==='new'?
                                            <Button onClick={async()=>{
                                                if (name.length>0&&district._id&&organization._id) {
                                                    const action = async() => {
                                                        await addAgentRoute({
                                                            organization: organization._id,
                                                            clients: clients,
                                                            name: name,
                                                            district: district._id,
                                                        })
                                                        Router.push(`/agentroutes/${organization._id}`)
                                                    }
                                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
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
                                                    let editElement = {_id: data.agentRoute._id, clients: clients}
                                                    if(name.length>0&&name!==data.agentRoute.name)editElement.name = name;
                                                    await setAgentRoute(editElement)
                                                }
                                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }} size='small' color='primary'>
                                                Сохранить
                                            </Button>
                                            {['организация', 'менеджер', 'admin'].includes(profile.role)?
                                                <>
                                                <Button onClick={async()=>{
                                                    const action = async() => {
                                                        await deleteAgentRoute([data.agentRoute._id], data.agentRoute.organization._id)
                                                        Router.push(`/agentroutes/${data.agentRoute.organization._id}`)
                                                    }
                                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
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
                                :null
                        }
                            </>
                        :'Ничего не найдено'}
                </CardContent>
            </Card>
        </App>
    )
})

AgentRoute.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['организация', 'admin', 'менеджер', 'агент'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
                Router.push('/')
    return {
        data: {
            ...ctx.query.id!=='new'?await getAgentRoute({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined): {agentRoute: {organization: {}, clients: [], name: '', district: {}}},
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

export default connect(mapStateToProps, mapDispatchToProps)(AgentRoute);