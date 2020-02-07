import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getOrganizations } from '../../src/gql/organization'
import { getDistrict, setDistrict, deleteDistrict, addDistrict } from '../../src/gql/district'
import { getAgents, getEcspeditors } from '../../src/gql/employment'
import { getClientsWithoutDistrict } from '../../src/gql/client'
import districtStyle from '../../src/styleMUI/district/district'
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

const Confirmation = dynamic(() => import('../../components/dialog/Confirmation'))

const District = React.memo((props) => {
    const { profile } = props.user;
    const classes = districtStyle();
    const { data } = props;
    const router = useRouter()
    const { isMobileApp } = props.app;

    let [name, setName] = useState(data.district?data.district.name:'');
    let handleName =  (event) => {
        setName(event.target.value)
    };
    let [agent, setAgent] = useState(data.district&&data.district.agent?data.district.agent:{});
    let handleAgent =  (event) => {
        setAgent({_id: event.target.value, name: event.target.name})
    };
    let [ecspeditor, setEcspeditor] = useState(data.district&&data.district.ecspeditor?data.district.ecspeditor:{});
    let handleEcspeditor =  (event) => {
        setEcspeditor({_id: event.target.value, name: event.target.name})
    };
    let [organization, setOrganization] = useState(router.query.id==='new'||!data.district?{}:{_id: data.district.organization._id, name: data.district.organization.name});
    let handleOrganization =  (event) => {
        setOrganization({_id: event.target.value, name: event.target.name})
    };
    let [client, setClient] = useState(data.district?data.district.client:[]);
    let [allClient, setAllClient] = useState([]);
    let [unselectedClient, setUnselectedClient] = useState([]);
    let [agents, setAgents] = useState([]);
    let [ecspeditors, setEcspeditors] = useState([]);
    let [selectType, setSelectType] = useState('Все');
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    useEffect(()=>{
        (async()=>{
            if(data.district) {
                if (['организация', 'менеджер'].includes(profile.role) && router.query.id === 'new') {
                    let organization = data.organizations.filter(element => element._id === profile.organization)
                    setOrganization(organization[0])
                }
            }
        })()
    },[profile])
    useEffect(()=>{
        (async()=>{
            if(data.district) {
                if (router.query.id === 'new') {
                    setAgent({})
                    setEcspeditor({})
                }
                if(organization._id) {
                    setAgents((await getAgents({_id: organization._id})).agents)
                    setEcspeditors((await getEcspeditors({_id: organization._id})).ecspeditors)
                    setUnselectedClient((await getClientsWithoutDistrict(organization._id)).clientsWithoutDistrict)
                }
            }
        })()
    },[organization])
    useEffect(()=>{
        (async()=>{
            if(data.district) {
                if (selectType == 'Все')
                    setAllClient([...client, ...unselectedClient])
                else if (selectType == 'Свободные')
                    setAllClient([...unselectedClient])
                else if (selectType == 'Выбраные')
                    setAllClient([...client])
            }
        })()
    },[selectType, unselectedClient, client])
    return (
        <App pageName={data.district?router.query.id==='new'?'Добавить':data.district.name:'Ничего не найдено'}>
            <Head>
                <title>{data.district?router.query.id==='new'?'Добавить':data.district.name:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={data.district?router.query.id==='new'?'Добавить':data.district.name:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/district/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/district/${router.query.id}`}/>
            </Head>
            <Card className={isMobileApp?classes.pageM:classes.pageD}>
                {data.district?
                    <>
                    <CardContent className={classes.column}>
                        {data.district?
                            <>
                            <TextField
                                label='Название'
                                value={name}
                                className={isMobileApp?classes.inputM:classes.inputDF}
                                onChange={handleName}
                                inputProps={{
                                    'aria-label': 'description',
                                }}
                            />
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
                                null
                            }
                            <FormControl className={isMobileApp?classes.inputM:classes.inputDF}>
                                <InputLabel>Агент</InputLabel>
                                <Select value={agent._id} onChange={handleAgent}>
                                    {agents.map((element)=>
                                        <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
                            <FormControl className={isMobileApp?classes.inputM:classes.inputDF}>
                                <InputLabel>Экспедитор</InputLabel>
                                <Select value={ecspeditor._id} onChange={handleEcspeditor}>
                                    {ecspeditors.map((element)=>
                                        <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                    )}
                                </Select>
                            </FormControl>
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
                                {allClient?allClient.map((element, idx)=> {
                                    return (
                                        <div key={idx} style={isMobileApp?{alignItems: 'baseline'}:{}} className={isMobileApp?classes.column:classes.row}>
                                            <Checkbox checked={client.includes(element)} onChange={() => {
                                                if (!client.includes(element)) {
                                                    client.push(element)
                                                    unselectedClient.splice(unselectedClient.indexOf(element), 1)
                                                } else {
                                                    client.splice(client.indexOf(element), 1)
                                                    unselectedClient.push(element)
                                                }
                                                setClient([...client])
                                            }}
                                            />
                                            <CardClient element={element}/>
                                        </div>
                                    )
                                }):null}
                            </div>
                            <div className={isMobileApp?classes.bottomRouteM:classes.bottomRouteD}>
                                {
                                    router.query.id==='new'?
                                        <Button onClick={async()=>{
                                            if (name.length>0) {
                                                const action = async() => {
                                                    client = client.map(element=>element._id)
                                                    await addDistrict({
                                                        organization: organization._id,
                                                        client: client,
                                                        name: name,
                                                        agent: agent._id,
                                                        ecspeditor: ecspeditor._id
                                                    })
                                                    Router.push('/districts')
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
                                                let editElement = {_id: data.district._id, client: client.map(element=>element._id)}
                                                if(!data.district.agent||agent._id!==data.district.agent._id)editElement.agent = agent._id;
                                                if(!data.district.ecspeditor||ecspeditor._id!==data.district.ecspeditor._id)editElement.ecspeditor = ecspeditor._id;
                                                if(name!==data.district.name)editElement.name = name;
                                                if(organization._id!==data.district.organization._id)editElement.organization = organization._id;
                                                await setDistrict(editElement)
                                            }
                                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }} size='small' color='primary'>
                                            Сохранить
                                        </Button>
                                        {['организация', 'менеджер', 'admin'].includes(profile.role)?
                                            <>
                                            <Button onClick={async()=>{
                                                const action = async() => {
                                                    await deleteDistrict([data.district._id])
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

District.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['организация', 'менеджер', 'admin'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
                Router.push('/')
    return {
        data: {
            ...ctx.query.id!=='new'?await getDistrict({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined): {district: {organization: {}, client: [], name: '', agent: {}, ecspeditor: {}}},
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

export default connect(mapStateToProps, mapDispatchToProps)(District);