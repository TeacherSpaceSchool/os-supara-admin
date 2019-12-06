import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import pageListStyle from '../src/styleMUI/client/clientList'
import {getClients} from '../src/gql/client'
import CardClient from '../components/client/CardClient'
import { connect } from 'react-redux'
import Router from 'next/router'
import { urlMain } from '../redux/constants/other'


const Client = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.clients);
    const { search, filter, sort } = props.app;
    useEffect(()=>{
        (async()=>{
            setList((await getClients({search: search, sort: sort, filter: filter})).clients)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterClient} sorts={data.sortClient} pageName='Клиенты'>
            <Head>
                <title>Клиенты</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Клиенты' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/clients`} />
                <link rel='canonical' href={`${urlMain}/clients`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <CardClient key={element._id} setList={setList} element={element}/>
                ):null}
            </div>
        </App>
    )
})

Client.getInitialProps = async function(ctx) {
    let role = ctx.store.getState().user.profile.role
    let authenticated = ctx.store.getState().user.authenticated
    if(authenticated&&!['admin', 'организация', 'менеджер'].includes(role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: await getClients({search: '', sort: '-createdAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Client);