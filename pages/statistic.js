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
    const { isMobileApp } = props.app;
    return (
        <App pageName='Статистика'>
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
                <Link href='/statistic/clientGeo'>
                    <Card className={isMobileApp?classes.cardM:classes.cardD}>
                        <CardActionArea>
                            <div className={classes.line}>
                                <h3 className={classes.input}>
                                    Карта продаж
                                </h3>
                            </div>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link href='/statistic/client'>
                    <Card className={isMobileApp?classes.cardM:classes.cardD}>
                        <CardActionArea>
                            <div className={classes.line}>
                                <h3 className={classes.input}>
                                    Клиенты
                                </h3>
                            </div>
                        </CardActionArea>
                    </Card>
                </Link>
                <Link href='/statistic/item'>
                    <Card className={isMobileApp?classes.cardM:classes.cardD}>
                        <CardActionArea>
                            <div className={classes.line}>
                                <h3 className={classes.input}>
                                    Товары
                                </h3>
                            </div>
                        </CardActionArea>
                    </Card>
                </Link>
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