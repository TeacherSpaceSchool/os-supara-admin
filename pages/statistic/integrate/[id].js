import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../../layouts/App';
import { connect } from 'react-redux'
import { getOrganization } from '../../../src/gql/organization'
import { getIntegrate1Cs, getAgentsIntegrate1C, getClientsIntegrate1C, getEcspeditorsIntegrate1C, getItemsIntegrate1C } from '../../../src/gql/integrate1C'
import pageListStyle from '../../../src/styleMUI/subcategory/subcategoryList'
import CardIntegrate from '../../../components/integrate/CardIntegrate'
import { useRouter } from 'next/router'
import { urlMain } from '../../../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardIntegratePlaceholder from '../../../components/integrate/CardIntegratePlaceholder'
import { getClientGqlSsr } from '../../../src/getClientGQL'
import initialApp from '../../../src/initialApp'

const Integrate = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const router = useRouter()
    let [list, setList] = useState(data.integrate1Cs);
    let [items, setItems] = useState(data.itemsIntegrate1C);
    let [agents, setAgents] = useState(data.agentsIntegrate1C);
    let [ecspeditors, setEcspeditors] = useState(data.ecspeditorsIntegrate1C);
    let [clients, setClients] = useState(data.clientsIntegrate1C);
    const { search, filter } = props.app;
    let [showStat, setShowStat] = useState(false);
    let height = 189
    useEffect(()=>{
        (async()=>{
            setList((await getIntegrate1Cs({search: search, filter: filter}, router.query.id)).integrate1Cs)
        })()
    },[filter,  search])
    useEffect(()=>{
        (async()=>{
            forceCheck()
            setPagination(100)
            setItems((await getItemsIntegrate1C(router.query.id)).itemsIntegrate1C)
            setAgents((await getAgentsIntegrate1C(router.query.id)).agentsIntegrate1C)
            setEcspeditors((await getEcspeditorsIntegrate1C(router.query.id)).ecspeditorsIntegrate1C)
            setClients((await getClientsIntegrate1C(router.query.id)).clientsIntegrate1C)
        })()
    },[list])
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} filters={data.filterIntegrate1C} pageName={data.organization?data.organization.name:'Ничего не найдено'}>
            <Head>
                <title>{data.organization?data.organization.name:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={data.organization!==null?data.organization.name:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/statistic/integrate/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/statistic/integrate/${router.query.id}`}/>
            </Head>
            <div className={classes.page}>
                <div className='count' onClick={()=>setShowStat(!showStat)}>
                    {`Всего интеграций: ${list.length}`}
                    {
                        showStat?
                            <>
                            <br/>
                            <br/>
                            {`Осталось агентов: ${agents.length}`}
                            <br/>
                            <br/>
                            {`Осталось экспедиторов: ${ecspeditors.length}`}
                            <br/>
                            <br/>
                            {`Осталось товаров: ${items.length}`}
                            <br/>
                            <br/>
                            {`Осталось клиентов: ${clients.length}`}
                            </>
                            :
                            null
                    }
                </div>
                <CardIntegrate organization={router.query.id} items={items} clients={clients} agents={agents} ecspeditors={ecspeditors} setList={setList}/>

                {data.organization?
                    list?list.map((element, idx)=> {
                        if(idx<=pagination)
                            return(
                                <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardIntegratePlaceholder height={height}/>}>
                                    <CardIntegrate element={element} organization={router.query.id} items={items} clients={clients} agents={agents} ecspeditors={ecspeditors} setList={setList}/>
                                </LazyLoad>
                            )}
                    ):null
                    :null
                }
            </div>
        </App>
    )
})

Integrate.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    return {
        data: {
            ...(await getIntegrate1Cs({search: '', filter: ''}, ctx.query.id, ctx.req?await getClientGqlSsr(ctx.req):null)),
            ...(await getOrganization({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):null)),
            ...(await getItemsIntegrate1C(ctx.query.id, ctx.req?await getClientGqlSsr(ctx.req):null)),
            ...(await getAgentsIntegrate1C(ctx.query.id, ctx.req?await getClientGqlSsr(ctx.req):null)),
            ...(await getEcspeditorsIntegrate1C(ctx.query.id, ctx.req?await getClientGqlSsr(ctx.req):null)),
            ...(await getClientsIntegrate1C(ctx.query.id, ctx.req?await getClientGqlSsr(ctx.req):null)),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Integrate);