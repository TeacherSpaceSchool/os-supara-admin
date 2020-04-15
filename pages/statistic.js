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
    const { profile } = props.user;
    const list = [
        {
            name: 'Акционная интеграции 1С',
            link: '/statistic/outxmlads',
            role: ['admin']
        },
        {
            name: 'Выгрузка акционных заказов',
            link: '/statistic/unloadingadsorders',
            role: ['admin', 'организация']
        },
        {
            name: 'Выгрузка заказов',
            link: '/statistic/unloadingorders',
            role: ['admin']
        },
        {
            name: 'Выгрузка интеграции 1С',
            link: '/statistic/integrateoutshoro',
            role: ['admin']
        },
        {
            name: 'Выгрузка клиентов',
            link: '/statistic/unloadingclients',
            role: ['admin']
        },
        {
            name: 'Графики заказов',
            link: '/statistic/chart',
            role: ['admin']
        },
        {
            name: 'Загрузка клиентов 1C',
            link: '/statistic/uploadingclients',
            role: ['admin']
        },
        {
            name: 'Загрузка районов 1C',
            link: '/statistic/uploadingdistricts',
            role: ['admin']
        },
        {
            name: 'Интеграция 1С',
            link: '/statistic/integrates',
            role: ['admin']
        },
        {
            name: 'История посещений',
            link: '/statistic/agenthistorygeo',
            role: ['admin']
        },
        {
            name: 'Карта продаж',
            link: '/statistic/clientGeo',
            role: ['admin']
        },
        {
            name: 'Корзина',
            link: '/statistic/trash',
            role: ['admin']
        },
        {
            name: 'Логистика',
            link: '/statistic/logisticorder',
            role: ['admin', 'организация', 'менеджер', 'агент']
        },
        {
            name: 'Подписчики',
            link: '/statistic/subscriber',
            role: ['admin']
        },
        {
            name: 'Проверка заказов',
            link:'/statistic/checkorder',
            role: ['admin']
        },
        {
            name: 'Проверка интеграции клиентов',
            link:'/statistic/checkintegrateclient',
            role: ['admin']
        },
        {
            name: 'Пуш-уведомления',
            link: '/statistic/notificationStatistic',
            role: ['admin']
        },
        {
            name: 'Статистика агентов',
            link: '/statistic/agents',
            role: ['admin']
        },
        {
            name: 'Статистика активности',
            link: '/statistic/active',
            role: ['admin']
        },
        {
            name: 'Статистика акций',
            link: '/statistic/adss',
            role: ['admin']
        },
        {
            name: 'Статистика возвратов',
            link: '/statistic/returneds',
            role: ['admin']
        },
        {
            name: 'Статистика клиентов',
            link: '/statistic/client',
            role: ['admin']
        },
        {
            name: 'Статистика товаров',
            link: '/statistic/item',
            role: ['admin']
        },
        {
            name: 'Статистика заказов',
            link: '/statistic/order',
            role: ['admin']
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
                    if(element.name.toLowerCase().includes(search.toLowerCase())&&element.role.includes(profile.role))
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
    if(!['admin', 'организация', 'менеджер', 'агент'].includes(ctx.store.getState().user.profile.role))
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