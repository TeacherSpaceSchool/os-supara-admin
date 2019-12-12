import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/favorite/favoriteList'
import CardItem from '../components/items/CardItem'
import { favorites } from '../src/gql/items';
import Router from 'next/router'
import { urlMain } from '../redux/constants/other'
const height = 377;
import LazyLoad from 'react-lazyload';
import CardItemPlaceholder from '../components/items/CardItemPlaceholder'

const Items = React.memo((props) => {
    const { authenticated } = props.user;
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.favorites);
    const { search } = props.app;
    useEffect(()=>{
        (async()=>{
            if(!authenticated&&localStorage.favorites){
                let favorites = JSON.parse(localStorage.favorites)
                setList(favorites.filter(favorite => favorite.name.includes(search)))
            }
            else setList((await favorites({search: search})).favorites)
        })()
    },[search])
    useEffect(()=>{
        (async()=>{
            if(!authenticated){
                if(!localStorage.favorites) {
                    localStorage.favorites = JSON.stringify([])
                }
                setList(JSON.parse(localStorage.favorites))
            }
        })()
    },[])
    let getList = async()=>{
        setList((await favorites({search: search})).favorites)
    };
    return (
        <App getList={getList} pageName='Избранное'>
            <Head>
                <title>Избранное</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Избранное' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/favorite`} />
                <link rel='canonical' href={`${urlMain}/favorite`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={50}  placeholder={<CardItemPlaceholder/>}>
                        <CardItem setList={setList} setFavorites={setList} getList={getList} key={element._id} element={element}/>
                    </LazyLoad>
                ):null}
            </div>
        </App>
    )
})

Items.getInitialProps = async function(ctx) {
    if('client'!==ctx.store.getState().user.profile.role&&ctx.store.getState().user.authenticated)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: await favorites({search: ''}),
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Items);