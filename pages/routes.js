import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { getRoutes } from '../src/gql/route'
import { getRoles } from '../src/gql/role'
import { getDivisionsForRoute } from '../src/gql/division'
import pageListStyle from '../src/styleMUI/list'
import CardRoute from '../components/CardRoute'
import { urlMain } from '../redux/constants/other'
import Router from 'next/router'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import { forceCheck } from 'react-lazyload';
import LazyLoad from 'react-lazyload';
import CardRoutePlaceholder from '../components/CardPlaceholder'
import { connect } from 'react-redux'

const Routes = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const roles = ['специалист', 'бухгалтерия', 'кассир', 'снабженец', 'генеральный директор', 'финансовый директор', ...data.roles.map(element=>element.name)]
    let [list, setList] = useState(data.routes);
    const { search } = props.app;
    const height = 100
    useEffect(()=>{
        (async()=>{
            setPagination(100)
            setList((await getRoutes({search: search})).routes)
        })()
    },[search])
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName='Маршруты'>
            <Head>
                <title>Маршруты</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Маршруты' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/routes`} />
                <link rel='canonical' href={`${urlMain}/routes`}/>
            </Head>
            <div className={classes.page}>
                <CardRoute divisionsForRoute={data.divisionsForRoute} roles={roles} setList={setList} list={list}/>
                {list?list.map((element, idx)=> {
                        if (idx <= pagination) {
                            return (
                                <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height}
                                          offset={[height, 0]} debounce={0} once={true}
                                          placeholder={<CardRoutePlaceholder height={height}/>}>
                                    <CardRoute divisionsForRoute={data.divisionsForRoute} roles={roles} key={element._id} setList={setList} list={list}
                                                  idx={idx} element={element}/>
                                </LazyLoad>
                            )
                        }
                    }
                ):null}
            </div>
        </App>
    )
})

Routes.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'менеджер'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        }
        else {
            Router.push('/')
        }
    return {
        data: {
            ...await getRoutes({search: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getRoles({search: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getDivisionsForRoute(ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
    }
}

export default connect(mapStateToProps)(Routes);