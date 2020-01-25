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
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getStatisticItem, getActiveOrganization } from '../../src/gql/statistic'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const ItemStatistic = React.memo((props) => {

    const classes = pageListStyle();
    const { data } = props;
    console.log(data)
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    let [dateStart, setDateStart] = useState(null);
    let [statisticItem, setStatisticItem] = useState(data.statisticItem);
    let [showStat, setShowStat] = useState(false);
    let [organization, setOrganization] = useState({_id: 'all'});
    useEffect(()=>{
        (async()=>{
            if(profile.role==='admin')
                setStatisticItem((await getStatisticItem({company: organization?organization._id: 'all', dateStart: dateStart?dateStart:null})).statisticItem)
        })()
    },[organization, dateStart])

    return (
        <App pageName='Статистика товаров'>
            <Head>
                <title>Статистика товаров</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Статистика товаров' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/items`} />
                <link rel='canonical' href={`${urlMain}/statistic/items`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        <Autocomplete
                            className={classes.input}
                            options={data.activeOrganization}
                            getOptionLabel={option => option.name}
                            value={organization}
                            onChange={(event, newValue) => {
                                setOrganization(newValue)
                            }}
                            noOptionsText='Ничего не найдено'
                            renderInput={params => (
                                <TextField {...params} label='Организация' fullWidth />
                            )}
                        />
                        <TextField
                            className={classes.input}
                            label='Дата начала'
                            type='date'
                            InputLabelProps={{
                                shrink: true,
                            }}
                            value={dateStart}
                            inputProps={{
                                'aria-label': 'description',
                            }}
                            onChange={ event => setDateStart(event.target.value) }
                        />
                    </div>
                    <Table row={(statisticItem.row).slice(1)} columns={statisticItem.columns}/>
                </CardContent>
            </Card>
            <div className='count' onClick={()=>setShowStat(!showStat)}>
                {`Активных товаров: ${statisticItem.row[0].data[0]}`}
                {
                    showStat?
                        <>
                        <br/>
                        <br/>
                        {`Всего прибыль: ${statisticItem.row[0].data[1]} сом`}
                        <br/>
                        <br/>
                        {`Конс: ${statisticItem.row[0].data[2]} сом`}
                        <br/>
                        <br/>
                        {`Выполнено: ${statisticItem.row[0].data[3]} шт`}
                        <br/>
                        <br/>
                        {`Отменено: ${statisticItem.row[0].data[4]} шт`}
                        </>
                        :
                        null
                }
            </div>
        </App>
    )
})

ItemStatistic.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            ...await getStatisticItem({company: 'all'}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getActiveOrganization(ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(ItemStatistic);