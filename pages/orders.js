import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import CardOrder from '../components/order/CardOrder'
import pageListStyle from '../src/styleMUI/orders/orderList'
import {getOrders} from '../src/gql/order'
import { connect } from 'react-redux'
import Router from 'next/router'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardOrderPlaceholder from '../components/order/CardOrderPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
const height = 225


const Orders = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;

    let [list, setList] = useState(data.invoices);
    const { search, filter, sort, date } = props.app;
    useEffect(()=>{
        (async()=>{
            let orders = (await getOrders({search: search, sort: sort, filter: filter, date: date})).invoices
            setList(orders)

            let tonnage = 0;
            let size = 0;
            let price = 0;
            for(let i=0; i<orders.length; i++){
                price+=orders[i].allPrice
                size+=orders[i].allSize
                tonnage+=orders[i].allTonnage
            }
            setPrice(price)
            setTonnage(tonnage)
            setSize(size)

        })()
    },[filter, sort, search, date])
    useEffect(()=>{
        forceCheck()
    },[list])

    let [tonnage, setTonnage] = useState(0);
    let [size, setSize] = useState(0);
    let [price, setPrice] = useState(0);
    let [showStat, setShowStat] = useState(false);

    return (
        <App searchShow={true} dates={true} filters={data.filterInvoice} sorts={data.sortInvoice} pageName='Заказы'>
            <Head>
                <title>Заказы</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Заказы' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/orders`} />
                <link rel='canonical' href={`${urlMain}/orders`}/>
            </Head>
            <div className='count' onClick={()=>setShowStat(!showStat)}>
                {
                    `Всего заказов: ${list.length}`
                }
                {
                    showStat?
                        <>
                        <br/>
                        <br/>
                        {`Всего сумма: ${price} сом`}
                        {
                            tonnage?
                                <>
                                <br/>
                                <br/>
                                {`Всего тонаж: ${tonnage} кг`}
                                </>
                                :
                                null
                        }
                        {
                            size?
                                <>
                                <br/>
                                <br/>
                                {`Всего кубатура: ${size} см³`}
                                </>
                                :
                                null
                        }
                        </>
                        :
                        null
                }
            </div>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardOrderPlaceholder/>}>
                        <CardOrder setList={setList} key={element._id} element={element}/>
                    </LazyLoad>
                ):null}
            </div>
        </App>
    )
})

Orders.getInitialProps = async function(ctx) {
    if(!['admin', 'организация', 'менеджер', 'client', 'агент'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: await getOrders({search: '', sort: '-createdAt', filter: '', date: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Orders);