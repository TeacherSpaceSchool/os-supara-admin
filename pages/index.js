import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import { getCategorys } from '../src/gql/category'
import pageListStyle from '../src/styleMUI/category/categoryList'
import CardCategory from '../components/category/CardCategory'
import { urlMain } from '../redux/constants/other'
import Router from 'next/router'
import LazyLoad from 'react-lazyload';
import CardCategoryPlaceholder from '../components/category/CardCategoryPlaceholder'

const Index = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.categorys);
    const { search, filter, sort } = props.app;
    const { profile, authenticated } = props.user;
    let height = profile.role==='admin'?161:83
    useEffect(()=>{
        (async()=>{
            setList((await getCategorys({search: search, sort: sort, filter: filter})).categorys)
        })()
    },[filter, sort, search])
    useEffect(()=>{
        if(!(!authenticated||['admin', 'client'].includes(profile.role)||!profile.role))
            Router.push('/items/all')
    },[profile, authenticated])
    return (
        <App filters={data.filterCategory} sorts={data.sortCategory} pageName='Товары'>
            <Head>
                <title>Азык - электронный склад связывающий производителя с торговой точкой</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Азык - электронный склад связывающий производителя с торговой точкой' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}`} />
                <link rel='canonical' href={`${urlMain}`}/>
            </Head>
            <div className={classes.page}>
                {profile.role==='admin'?
                    <>
                    <CardCategory setList={setList}/>
                    </>
                    :
                    null
                }
                <CardCategory element={{image: '/static/add.png', name: 'Все подкатегории', _id: 'all'}} setList='all'/>
                {list?list.map((element)=>
                    element.name!=='Не задано'?
                        <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={100}  placeholder={<CardCategoryPlaceholder height={height}/>}>
                            <CardCategory key={element._id} setList={setList} element={element}/>
                        </LazyLoad>
                        :
                        null
                ):null}
            </div>
        </App>
    )
})

Index.getInitialProps = async function(ctx) {
    let role = ctx.store.getState().user.profile.role
    let authenticated = ctx.store.getState().user.authenticated
    if(!(!authenticated||['admin', 'client'].includes(role)||!role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/items/all'
            })
            ctx.res.end()
        } else
            Router.push('/items/all')
    return {
        data: await getCategorys({search: '', sort: '-createdAt', filter: ''})
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

export default connect(mapStateToProps, mapDispatchToProps)(Index);