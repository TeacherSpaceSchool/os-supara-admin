import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import CardDistrict from '../components/district/CardDistrict'
import pageListStyle from '../src/styleMUI/district/districtList'
import {getDistricts} from '../src/gql/district'
import { connect } from 'react-redux'
import { urlMain } from '../redux/constants/other'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import Router from 'next/router'
import { getClientGqlSsr } from '../src/getClientGQL'
const height = 210
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardDistrictPlaceholder from '../components/district/CardDistrictPlaceholder'
import initialApp from '../src/initialApp'

const Districts = React.memo((props) => {
    const { profile } = props.user;
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.districts);
    const { search, filter, sort, date } = props.app;
    let getList = async()=>{
        setList((await getDistricts({search: search, sort: sort, filter: filter})).districts)
    }
    useEffect(()=>{
        getList()
    },[filter, sort, search]);
    useEffect(()=>{
        forceCheck()
    },[list])
    return (
        <App getList={getList} searchShow={true} filters={data.filterDistrict} sorts={data.sortDistrict} pageName='Районы'>
            <Head>
                <title>Районы</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Районы' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/districts`} />
                <link rel='canonical' href={`${urlMain}/districts`}/>
            </Head>
            <div className='count'>
                {`Всего районов: ${list.length}`}
            </div>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardDistrictPlaceholder/>}>
                        <CardDistrict setList={setList} key={element._id} element={element}/>
                    </LazyLoad>
                ):null}
            </div>
            {['admin', 'организация', 'менеджер'].includes(profile.role)?
                <Link href='/district/[id]' as={`/district/new`}>
                    <Fab color='primary' aria-label='add' className={classes.fab}>
                        <AddIcon />
                    </Fab>
                </Link>
                :
                null
            }
        </App>
    )
})

Districts.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'организация', 'менеджер'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: await getDistricts({search: '', sort: '-createdAt', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
        pagination: state.pagination
    }
}

export default connect(mapStateToProps)(Districts);