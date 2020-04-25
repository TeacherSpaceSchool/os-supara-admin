import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getAutos } from '../src/gql/auto'
import pageListStyle from '../src/styleMUI/auto/autoList'
import CardAuto from '../components/auto/CardAuto'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardAutoPlaceholder from '../components/auto/CardAutoPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import Router from 'next/router'
import initialApp from '../src/initialApp'

const Autos = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.autos);
    const { search, sort, filter } = props.app;
    const { profile } = props.user;
    let height = ['организация', 'admin'].includes(profile.role)?213:167
    useEffect(()=>{
        (async()=>{
            setList((await getAutos({search: search, sort: sort, filter: filter})).autos)
        })()
    },[sort, search, filter])
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
        <App checkPagination={checkPagination} searchShow={true} sorts={data.sortAuto} filters={data.filterAuto} pageName={'Транспорт'}>
            <Head>
                <title>Транспорт</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Транспорт' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/autos`} />
                <link rel='canonical' href={`${urlMain}/autos`}/>
            </Head>
            <div className='count'>
                {`Всего транспорта: ${list.length}`}
            </div>
            <div className={classes.page}>
                {list?list.map((element, idx)=> {
                    if(idx<=pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardAutoPlaceholder height={height}/>}>
                                <CardAuto key={element._id} setList={setList} element={element}/>
                            </LazyLoad>
                        )
                }):null}
            </div>
            {['admin', 'организация'].includes(profile.role)?
                <Link href='/auto/[id]' as={`/auto/new`}>
                    <Fab color='primary' aria-label='add' className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
                :
                null
            }
        </App>
    )
})

Autos.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!(ctx.store.getState().user.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: await getAutos({search: '', sort: '-createdAt', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
    };
};

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(Autos);