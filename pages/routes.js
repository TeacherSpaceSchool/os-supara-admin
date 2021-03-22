import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
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
    let [roles, setRoles] = useState(['специалист', 'бухгалтерия', 'кассир', 'снабженец', 'завсклад', 'генеральный директор', 'финансовый директор',... data.roles?data.roles.map(element=>element.name):[]]);
    const { pinCode } = props.user;
    let [divisionsForRoute, setDivisionsForRoute] = useState(data.divisionsForRoute);
    let [list, setList] = useState(data.routes);
    const { search } = props.app;
    const height = 174
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    const initialRender = useRef(true);
    let [paginationWork, setPaginationWork] = useState(true);
    const getList = async()=>{
        setList((await getRoutes({search: search, skip: 0})).routes)
        forceCheck()
        setPaginationWork(true);
        (document.getElementsByClassName('App-body'))[0].scroll({top: 0, left: 0, behavior: 'instant' });
    }
    useEffect(()=>{
        (async()=>{
            if(!initialRender.current&&pinCode) {
                setRoles(['специалист', 'бухгалтерия', 'кассир', 'снабженец', 'завсклад', 'генеральный директор', 'финансовый директор',... (await getRoles({search: ''})).roles.map(element=>element.name)])
                setDivisionsForRoute((await getDivisionsForRoute()).divisionsForRoute)
                await getList()
            }
        })()
    },[pinCode])
    useEffect(()=>{
        (async()=>{
            if(initialRender.current) {
                initialRender.current = false;
            } else {
                if(searchTimeOut)
                    clearTimeout(searchTimeOut)
                searchTimeOut = setTimeout(async()=>{
                    await getList()
                }, 500)
                setSearchTimeOut(searchTimeOut)
            }
        })()
    },[search])
    useEffect(()=>{
        forceCheck()
    },[list])
    const checkPagination = async()=>{
        if(paginationWork){
            let addedList = (await getRoutes({search: search, skip: list.length})).routes
            if(addedList.length>0){
                setList([...list, ...addedList])
            }
            else
                setPaginationWork(false)
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
                <CardRoute divisionsForRoute={divisionsForRoute} roles={roles} setList={setList} list={list}/>
                {list?list.map((element, idx)=> {
                    return (
                        <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height}
                                  offset={[height, 0]} debounce={0} once={true}
                                          placeholder={<CardRoutePlaceholder height={height}/>}>
                                    <CardRoute divisionsForRoute={divisionsForRoute} roles={roles} key={element._id} setList={setList} list={list}
                                                  idx={idx} element={element}/>
                                </LazyLoad>
                            )

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
            ...await getRoutes({search: '', skip: 0}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getRoles({search: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getDivisionsForRoute(ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Routes);