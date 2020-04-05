import Head from 'next/head';
import React from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/statistic/statisticsList'
import { urlMain } from '../redux/constants/other'
import Link from 'next/link';
import Router from 'next/router'
import initialApp from '../src/initialApp'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';

const Statistic = React.memo((props) => {
    const classes = pageListStyle();
    const { isMobileApp, search } = props.app;
    const list = [
        {
            name: 'Выгрузка заказов',
            link: '/statistic/unloadingorders',
        },
        {
            name: 'Выгрузка интеграции 1С',
            link: '/statistic/integrateoutshoro',
        },
        {
            name: 'Выгрузка клиентов',
            link: '/statistic/unloadingclients',
        },
        {
            name: 'Графики заказов',
            link: '/statistic/chart'
        },
        {
            name: 'Загрузка клиентов 1C',
            link: '/statistic/uploadingclients',
        },
        {
            name: 'Загрузка районов 1C',
            link: '/statistic/uploadingdistricts',
        },
        {
            name: 'Интеграция 1С',
            link: '/statistic/integrates',
        },
        {
            name: 'История посещений',
            link: '/statistic/agenthistorygeo'
        },
        {
            name: 'Карта продаж',
            link: '/statistic/clientGeo'
        },
        {
            name: 'Корзина',
            link: '/statistic/trash',
        },
        {
            name: 'Подписчики',
            link: '/statistic/subscriber'
        },
        {
            name: 'Проверка заказов',
            link:'/statistic/checkorder',
        },
        {
            name: 'Проверка интеграции клиентов',
            link:'/statistic/checkintegrateclient',
        },
        {
            name: 'Пуш-уведомления',
            link: '/statistic/notificationStatistic'
        },
        {
            name: 'Статистика активности',
            link: '/statistic/active'
        },
        {
            name: 'Статистика клиентов',
            link: '/statistic/client'
        },
        {
            name: 'Статистика товаров',
            link: '/statistic/item'
        },
        {
            name: 'Статистика заказов',
            link: '/statistic/order'
        },
    ]
    return (
        <App searchShow={true} pageName='Статистика'>
            <Head>
                <title>Статистика</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Статистика' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistics`} />
                <link rel='canonical' href={`${urlMain}/statistics`}/>
            </Head>
            <div className={classes.page}>
                {list.map((element, idx)=> {
                    if(element.name.toLowerCase().includes(search.toLowerCase()))
                        return(
                            <Link key={idx} href={element.link}>
                                <Card className={isMobileApp?classes.cardM:classes.cardD}>
                                    <CardActionArea>
                                        <div className={classes.line}>
                                            <h3 className={classes.input}>
                                                {element.name}
                                            </h3>
                                        </div>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        )}
                )}
            </div>
        </App>
    )
})

Statistic.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {}
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Statistic);