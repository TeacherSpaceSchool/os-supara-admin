import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getBonusesClient } from '../src/gql/bonusclient'
import pageListStyle from '../src/styleMUI/bonus/bonusList'
import CardBonusClient from '../components/bonusclient/CardBonusClient'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardBonusClientPlaceholder from '../components/bonusclient/CardBonusClientPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'

const BonusClient = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.bonusesClient);
    const { search, sort } = props.app;
    const { profile } = props.user;
    let height = profile.role==='admin'?227:119
    useEffect(()=>{
        (async()=>{
            setList((await getBonusesClient({search: search, sort: sort})).bonusesClient)
            forceCheck()
        })()
    },[sort, search])
    return (
        <App searchShow={true} sorts={data.sortBonusClient} pageName={['admin', 'организация', 'менеджер'].includes(profile.role)?'Бонусы клиентов':'Мои бонусы'}>
            <Head>
                <title>{['admin', 'организация', 'менеджер'].includes(profile.role)?'Бонусы клиентов':'Мои бонусы'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={['admin', 'организация', 'менеджер'].includes(profile.role)?'Бонусы клиентов':'Мои бонусы'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/bonusclient`} />
                <link rel='canonical' href={`${urlMain}/bonusclient`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardBonusClientPlaceholder height={height}/>}>
                        <CardBonusClient key={element._id} element={element}/>
                    </LazyLoad>
                ):null}
            </div>
        </App>
    )
})

BonusClient.getInitialProps = async function(ctx) {
    return {
        data: await getBonusesClient({search: '', sort: '-createdAt'}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
    };
};

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
     }
}

export default connect(mapStateToProps, mapDispatchToProps)(BonusClient);