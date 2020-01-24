import Head from 'next/head';
import React, {useState} from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import Router from 'next/router'
import { urlMain } from '../../redux/constants/other'
import initialApp from '../../src/initialApp'
import { getClientGqlSsr } from '../../src/getClientGQL'
import { getStatisticClientGeo } from '../../src/gql/statistic'
import { Map, YMaps, Placemark } from 'react-yandex-maps';

const ClientGeoStatistic = React.memo((props) => {

    const { data } = props;
    const { isMobileApp } = props.app;
    let [load, setLoad] = useState(true);
    console.log(data)
    return (
        <YMaps>
            <App pageName='Карта клиентов'>
                <Head>
                    <title>Карта клиентов</title>
                    <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                    <meta property='og:title' content='Карта клиентов' />
                    <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                    <meta property='og:type' content='website' />
                    <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                    <meta property='og:url' content={`${urlMain}/statistic/clientGeo`} />
                    <link rel='canonical' href={`${urlMain}/statistic/clientGeo`}/>
                </Head>
                {
                    process.browser?
                        <div style={{height: window.innerHeight-64, width: isMobileApp?window.innerWidth:window.innerWidth-300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                            <div style={{display: load?'none':'block'}}>
                                <Map onLoad={()=>{setLoad(false)}} height={window.innerHeight-64} width={isMobileApp?window.innerWidth:window.innerWidth-300}
                                     state={{ center: [42.8700000, 74.5900000], zoom: 12 }}
                                >
                                    {
                                        data.statisticClientGeo?
                                            data.statisticClientGeo.map(
                                                (element, idx) => {
                                                    return <Placemark
                                                        onClick={()=>{window.open(`/client/${element.client}`,'_blank');}}
                                                        key={idx}
                                                        options={{iconColor: element.data[1]}}
                                                        properties={{iconCaption: `${element.data[0]==='true' ? `🔔` : '🔕'}${element.address[2] ? `${element.address[2]}, ` : ''}${element.address[0]}`}}
                                                        geometry={element.address[1].split(', ')}/>
                                                }
                                            )
                                            :
                                            null
                                    }
                                </Map>
                            </div>
                        </div>
                        :
                        null
                }
            </App>
        </YMaps>
    )
})

ClientGeoStatistic.getInitialProps = async function(ctx) {
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
            ...await getStatisticClientGeo(ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(ClientGeoStatistic);