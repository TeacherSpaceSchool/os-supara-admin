import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../../src/styleMUI/statistic/statistic'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Router from 'next/router'
import { urlMain } from '../../redux/constants/other'
import initialApp from '../../src/initialApp'
import Table from '../../components/app/Table'
import { getStatisticClientActivity } from '../../src/gql/statistic'

const ClientStatisticActive = React.memo((props) => {

    const classes = pageListStyle();
    const { isMobileApp, filter } = props.app;
    let [statisticActive, setStatisticActive] = useState(undefined);
    useEffect(()=>{
        (async()=>{
        setStatisticActive((await getStatisticClientActivity(filter, undefined)).statisticClientActivity)
        })()
    },[filter])
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])
    let [showStat, setShowStat] = useState(false);
    const filters = [{name: 'Все', value: false}, {name: 'Online', value: true}]
    return (
        <App pageName='Статистика активности' filters={filters}>
            <Head>
                <title>Статистика активности</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Статистика активности' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/active`} />
                <link rel='canonical' href={`${urlMain}/statistic/active`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    {
                        statisticActive?
                            <>
                            <Table type='client' row={statisticActive.row.slice(1)} columns={statisticActive.columns}/>
                            <div className='count' onClick={()=>setShowStat(!showStat)}>
                                {
                                    statisticActive?
                                        <>
                                        <div className={classes.rowStatic}>{`Всего активность: ${statisticActive.row[0].data[0]}`}</div>
                                        <div className={classes.rowStatic}>{`Без активности: ${statisticActive.row[0].data[9]}`}</div>
                                        <div className={classes.rowStatic}>{`Всего заказов: ${statisticActive.row[0].data[5]}`}</div>
                                        <div className={classes.rowStatic}>{`Без заказов: ${statisticActive.row[0].data[4]}`}</div>
                                        {
                                            showStat?
                                                <>
                                                <div className={classes.rowStatic}>{`Сегодня активность: ${statisticActive.row[0].data[1]}`}</div>
                                                <div className={classes.rowStatic}>{`Сегодня заказов: ${statisticActive.row[0].data[6]}`}</div>
                                                <div className={classes.rowStatic}>{`Недельная активность: ${statisticActive.row[0].data[2]}`}</div>
                                                <div className={classes.rowStatic}>{`Недельные заказы: ${statisticActive.row[0].data[7]}`}</div>
                                                <div className={classes.rowStatic}>{`Месячная активность: ${statisticActive.row[0].data[3]}`}</div>
                                                <div className={classes.rowStatic}>{`Месячные заказы: ${statisticActive.row[0].data[8]}`}</div>
                                                </>
                                                :
                                                null
                                        }
                                        </>
                                        :null
                                }
                            </div>
                            </>
                            :null
                    }

                </CardContent>
            </Card>
        </App>
    )
})

ClientStatisticActive.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.filter = true
    if(!['admin'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(ClientStatisticActive);