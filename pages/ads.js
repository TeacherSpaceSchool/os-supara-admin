import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import CardAds from '../components/ads/CardAds';
import pageListStyle from '../src/styleMUI/ads/adsList'
import {getAdss} from '../src/gql/ads'
import { connect } from 'react-redux'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardAdsPlaceholder from '../components/ads/CardAdsPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'

const Ads = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.adss);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    const { count } = props.pagination;
    useEffect(()=>{
        (async()=>{
            setList((await getAdss({search: search, sort: sort, filter: filter})).adss)
            forceCheck()
        })()
    },[filter, sort, search, count])
    let height = profile.role==='admin'?400:200
    return (
        <App filters={data.filterAds} sorts={data.sortAds} pageName='Акции'>
            <Head>
                <title>Акции</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Акции' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/ads`} />
                <link rel='canonical' href={`${urlMain}/ads`}/>
            </Head>
            <div className={classes.page}>
                {profile.role==='admin'?<CardAds setList={setList}/>:null}
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardAdsPlaceholder height={height}/>}>
                        <CardAds setList={setList} key={element._id} element={element}/>
                    </LazyLoad>
                ):null}
            </div>
        </App>
    )
})

Ads.getInitialProps = async function(ctx) {
    ctx.store.getState().pagination.work = true
    return {
        data: await getAdss({search: '', sort: '-createdAt', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
        pagination: state.pagination
    }
}

export default connect(mapStateToProps)(Ads);