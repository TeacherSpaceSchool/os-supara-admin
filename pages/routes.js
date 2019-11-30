import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import CardRoute from '../components/route/CardRoute'
import pageListStyle from '../src/styleMUI/route/routeList'
import {getRoutes} from '../src/gql/route'
import { connect } from 'react-redux'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import Router from 'next/router'

const Routes = React.memo((props) => {
    const { profile } = props.user;
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.routes);
    const { search, filter, sort } = props.app;
    useEffect(()=>{
        (async()=>{
            setList((await getRoutes({search: search, sort: sort, filter: filter})).routes)
        })()
    },[filter, sort, search]);
    return (
        <App filters={data.filterRoute} sorts={data.sortRoute} pageName='Маршрутные листы'>
            <Head>
                <title>Маршрутные листы</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Маршрутные листы' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`http://${process.env.URL}/static/512x512.png`} />
                <meta property="og:url" content={`http://${process.env.URL}/routes`} />
                <link rel='canonical' href={`http://${process.env.URL}/routes`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <CardRoute setList={setList} key={element._id} element={element}/>
                ):null}
            </div>
            {['admin', 'организация', 'менеджер'].includes(profile.role)?
                <Link href='/route/[id]' as={`/route/new`}>
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

Routes.getInitialProps = async function(ctx) {
    if(!['admin', 'организация', 'менеджер'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: await getRoutes({search: '', sort: '-updatedAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Routes);