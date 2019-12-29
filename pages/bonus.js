import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getBonuses } from '../src/gql/bonus'
import pageListStyle from '../src/styleMUI/bonus/bonusList'
import CardBonus from '../components/bonus/CardBonus'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardBonusPlaceholder from '../components/bonus/CardBonusPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'

const Bonus = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.bonuses);
    const { search, sort } = props.app;
    const { profile } = props.user;
    let height = profile.role==='admin'?227:119
    useEffect(()=>{
        (async()=>{
            setList((await getBonuses({search: search, sort: sort})).bonuses)
        })()
    },[sort, search])
    useEffect(()=>{
        forceCheck()
    },[list])

    return (
        <App searchShow={true} sorts={data.sortBonus} pageName={['организация', 'менеджер'].includes(profile.role)?'Бонусы компании':'Бонусы компаний'}>
            <Head>
                <title>{['организация', 'менеджер'].includes(profile.role)?'Бонусы компании':'Бонусы компаний'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={['организация', 'менеджер'].includes(profile.role)?'Бонусы компании':'Бонусы компаний'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/bonus`} />
                <link rel='canonical' href={`${urlMain}/bonus`}/>
            </Head>
            <div className='count'>
                {`Всего бонусов: ${list.length}`}
            </div>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardBonusPlaceholder height={height}/>}>
                        <CardBonus key={element._id} setList={setList} element={element}/>
                    </LazyLoad>
                ):null}
            </div>
        </App>
    )
})

Bonus.getInitialProps = async function(ctx) {
    return {
        data: await getBonuses({search: '', sort: '-createdAt'}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(Bonus);