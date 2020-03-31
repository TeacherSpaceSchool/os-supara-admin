import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import pageListStyle from '../../src/styleMUI/client/clientList'
import {getClientsTrash, getClientsTrashSimpleStatistic} from '../../src/gql/client'
import {getOrdersTrash, getInvoicesTrashSimpleStatistic} from '../../src/gql/order'
import { connect } from 'react-redux'
import Router from 'next/router'
import { urlMain } from '../../redux/constants/other'
import { forceCheck } from 'react-lazyload';
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import CardClientPlaceholder from '../../components/client/CardClientPlaceholder'
import CardClient from '../../components/client/CardClient'
import CardOrderPlaceholder from '../../components/order/CardOrderPlaceholder'
import CardOrder from '../../components/order/CardOrder'
import LazyLoad from 'react-lazyload';
const height = 140;


const Trash = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.clientsTrash);
    let [simpleStatistic, setSimpleStatistic] = useState(['0']);
    let [paginationWork, setPaginationWork] = useState(true);
    const { search, filter } = props.app;
    const checkPagination = async()=>{
        if(paginationWork){
            let addedList = filter==='Клиенты'?(await getClientsTrash({search: search, skip: list.length})).clientsTrash:(await getOrdersTrash({search: search, skip: list.length})).invoicesTrash
            if(addedList.length>0){
                setList([...list, ...addedList])
            }
            else
                setPaginationWork(false)
        }
    }
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    useEffect(()=>{
        (async()=>{
            if(searchTimeOut)
                clearTimeout(searchTimeOut)
            searchTimeOut = setTimeout(async()=>{
                setList(filter==='Клиенты'?(await getClientsTrash({search: search, skip: 0})).clientsTrash:(await getOrdersTrash({search: search, skip: 0})).invoicesTrash)
                setSimpleStatistic(filter==='Клиенты'?(await getClientsTrashSimpleStatistic({search: search})).clientsTrashSimpleStatistic[0]:(await getInvoicesTrashSimpleStatistic({search: search})).invoicesTrashSimpleStatistic[0])
                forceCheck()
                setPaginationWork(true);
                (document.getElementsByClassName('App-body'))[0].scroll({top: 0, left: 0, behavior: 'instant' });
            }, 500)
            setSearchTimeOut(searchTimeOut)
        })()
    },[filter, search])
    return (
        <App checkPagination={checkPagination} searchShow={true} filters={[{name: 'Клиенты', value: 'Клиенты'}, {name: 'Заказы', value: 'Заказы'}]} pageName='Корзина'>
            <Head>
                <title>Корзина</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Корзина' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/trash`} />
                <link rel='canonical' href={`${urlMain}/statistic/trash`}/>
            </Head>
            <div className='count'>
                {`Всего: ${simpleStatistic}`}
            </div>
            <div className={classes.page}>
                {list?list.map((element, idx)=> {
                    return(
                        <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]}
                                  debounce={0} once={true} placeholder={<CardClientPlaceholder height={height}/>}>
                            {
                                filter==='Клиенты'&&element.name?
                                    <CardClient list={list} idx={idx} key={element._id} setList={setList} element={element}/>
                                    :
                                    filter==='Заказы'&&element.orders?
                                        <CardOrder selected={[]} list={list} idx={idx} setList={setList} key={element._id} element={element}/>
                                        :
                                        null
                            }
                        </LazyLoad>
                    )}
                ):null}
            </div>
        </App>
    )
})

Trash.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    let role = ctx.store.getState().user.profile.role
    ctx.store.getState().app.filter = 'Клиенты'
    let authenticated = ctx.store.getState().user.authenticated
    if(authenticated&&'admin'!==role)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            ...(await getClientsTrashSimpleStatistic({search: '', skip: 0}, ctx.req?await getClientGqlSsr(ctx.req):undefined)),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Trash);