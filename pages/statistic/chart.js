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
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getStatisticOrderChart, getActiveOrganization } from '../../src/gql/statistic'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as appActions from '../../redux/actions/app'
import { Chart } from 'react-charts'

function CustomTooltip({ getStyle, primaryAxis, datum }) {
    const data = React.useMemo(
        () =>
            datum
                ? [
                    {
                        data: datum.group.map(d => ({
                            primary: d.series.label,
                            secondary: d.secondary,
                            color: getStyle(d).fill
                        }))
                    }
                ]
                : [],
        [datum, getStyle]
    )
    console.log(data)
    return datum ? (
        <div
            style={{
                color: 'white',
                pointerEvents: 'none'
            }}
        >
            <h3
                style={{
                    display: 'block',
                    textAlign: 'center'
                }}
            >
                {primaryAxis.format(datum.primary)}
            </h3>
            <div
                style={{
                    height: '200px',
                    display: 'flex'
                }}
            >
            </div>
        </div>
    ) : null
}

const ChartStatistic = React.memo((props) => {

    const classes = pageListStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    let [dateStart, setDateStart] = useState(null);
    let [dateType, setDateType] = useState('day');
    let [statisticOrderChart, setStatisticOrderChart] = useState(undefined);
    let [showStat, setShowStat] = useState(false);
    let [organization, setOrganization] = useState(undefined);
    const { showLoad } = props.appActions;
    useEffect(()=>{
        (async()=>{
            if(profile.role==='admin') {
                await showLoad(true)
                dateStart=dateStart?dateStart:new Date();
                setStatisticOrderChart((await getStatisticOrderChart({
                    company: organization ? organization._id : undefined,
                    dateStart: dateStart,
                    dateType: dateType
                })).statisticOrderChart)
                await showLoad(false)
            }
        })()
    },[organization, dateStart, dateType])
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { position: 'left', type: 'linear', stacked: true }
        ],
        []
    )
    const series = React.useMemo(
        () => ({
            type: 'bar'
        }),
        []
    )
    return (
        <App pageName='Графики заказов'>
            <Head>
                <title>Графики заказов</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Графики заказов' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/statistic/chart`} />
                <link rel='canonical' href={`${urlMain}/statistic/chart`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    <div className={classes.row}>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('day')} size='small' color={dateType==='day'?'primary':''}>
                            День
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('month')} size='small' color={dateType==='month'?'primary':''}>
                            Месяц
                        </Button>
                        <Button style={{width: 50, margin: 5}} variant='contained' onClick={()=>setDateType('year')} size='small' color={dateType==='year'?'primary':''}>
                            Год
                        </Button>
                    </div>
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
                    {
                        statisticOrderChart?
                            <div
                                style={{
                                    width: isMobileApp?'calc(100vw - 32px)':'calc(100vw - 340px)',
                                    height: isMobileApp?'calc(100vh - 202px)':'calc(100vh - 222px)'
                                }}
                            >
                                <Chart
                                    series={series}
                                    data={statisticOrderChart.geoStatistic}
                                    axes={axes}
                                    tooltip
                                    primaryCursor
                                    secondaryCursor
                                />
                            </div>
                            :
                            null
                    }
                </CardContent>
            </Card>
            <div className='count' onClick={()=>setShowStat(!showStat)}>
                {
                    statisticOrderChart?
                        `${statisticOrderChart.all} сом`
                        :null
                }
            </div>
        </App>
    )
})

ChartStatistic.getInitialProps = async function(ctx) {
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

function mapDispatchToProps(dispatch) {
    return {

        appActions: bindActionCreators(appActions, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartStatistic);