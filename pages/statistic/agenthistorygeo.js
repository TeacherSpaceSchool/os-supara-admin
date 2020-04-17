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
import Table from '../../components/app/Table'
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getAgentHistoryGeos } from '../../src/gql/agentHistoryGeo'
import { getActiveOrganization } from '../../src/gql/statistic'
import { getAgents } from '../../src/gql/employment'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as appActions from '../../redux/actions/app'

const AgentHistoryGeo = React.memo((props) => {

    const classes = pageListStyle();
    const { data } = props;
    const { isMobileApp, date } = props.app;
    const { profile } = props.user;
    let organizations = [{name: 'AZYK.STORE', _id: 'super'}, ...data.activeOrganization];
    let [agentHistoryGeo, setAgentHistoryGeo] = useState(undefined);
    let [organization, setOrganization] = useState({_id: undefined});
    let [agents, setAgents] = useState([]);
    let [agent, setAgent] = useState({_id: undefined});
    const { showLoad } = props.appActions;
    useEffect(()=>{
        (async()=>{
            if(profile.role!=='admin') {
                setAgents((await getAgents({})).agents)
                setAgent({_id: undefined})
            }
        })()
    },[])
    useEffect(()=>{
        (async()=>{
            if(profile.role==='admin'&&organization._id) {
                setAgents((await getAgents({_id: organization._id})).agents)
                setAgent({_id: undefined})
            }
        })()
    },[organization])
    useEffect(()=>{
        (async()=>{
            if(organization&&organization._id){
                await showLoad(true)
                setAgentHistoryGeo((await getAgentHistoryGeos({
                    agent: agent?agent._id:undefined,
                    date: date,
                    organization: organization._id
                })).agentHistoryGeos)
                await showLoad(false)
            }
        })()
    },[agent, date])
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])
    return (
        <App pageName='История посещений' dates={true}>
            <Head>
                <title>История посещений</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='История посещений' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/agenthistorygeo`} />
                <link rel='canonical' href={`${urlMain}/statistic/agenthistorygeo`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        {
                            profile.role==='admin'?
                                <Autocomplete
                                    className={classes.input}
                                    options={organizations}
                                    getOptionLabel={option => option.name}
                                    value={organization}
                                    onChange={(event, newValue) => {
                                        setOrganization(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Организация' fullWidth />
                                    )}
                                />
                                :
                                null
                        }
                        <Autocomplete
                            className={classes.input}
                            options={agents}
                            getOptionLabel={option => option.name}
                            value={agent}
                            onChange={(event, newValue) => {
                                setAgent(newValue)
                            }}
                            noOptionsText='Ничего не найдено'
                            renderInput={params => (
                                <TextField {...params} label='Агент' fullWidth />
                            )}
                        />
                    </div>
                    {
                        agentHistoryGeo?
                            <Table type='item' row={agentHistoryGeo.row} columns={agentHistoryGeo.columns}/>
                            :null
                    }
                </CardContent>
            </Card>
            {
                agentHistoryGeo?
                    <div className='count'>
                        {`Всего точек: ${agentHistoryGeo.row.length}`}
                    </div>
                    :null
            }
        </App>
    )
})

AgentHistoryGeo.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'организация', 'менеджер'].includes(ctx.store.getState().user.profile.role))
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

        appActions: bindActionCreators(appActions, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AgentHistoryGeo);