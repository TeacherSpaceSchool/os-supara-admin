import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import CardAds from '../components/ads/CardAds';
import pageListStyle from '../src/styleMUI/ads/adsList'
import {getAdss} from '../src/gql/ads'
import { connect } from 'react-redux'


const Ads = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.adss);
    const { search, filter, sort } = props.app;
    const { profile } = props.user;
    useEffect(()=>{
        (async()=>{
            setList((await getAdss({search: search, sort: sort, filter: filter})).adss)
        })()
    },[filter, sort, search])
    return (
        <App filters={data.filterAds} sorts={data.sortAds} pageName='Акции'>
            <Head>
                <title>Акции</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Акции' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`http://${process.env.URL}/static/512x512.png`} />
                <meta property="og:url" content={`http://${process.env.URL}/ads`} />
                <link rel='canonical' href={`http://${process.env.URL}/ads`}/>
            </Head>
            <div className={classes.page}>
                {profile.role==='admin'?<CardAds setList={setList}/>:null}
                {list?list.map((element)=>
                    <CardAds setList={setList} key={element._id} element={element}/>
                ):null}
            </div>
        </App>
    )
})

Ads.getInitialProps = async function() {
    return {
        data: await getAdss({search: '', sort: '-updatedAt', filter: ''})
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Ads);