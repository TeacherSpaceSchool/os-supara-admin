import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/favorite/favoriteList'
import CardItem from '../components/items/CardItem'
import { favorites } from '../src/gql/items';
import Router from 'next/router'

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
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=>
                    <CardItem setList={setList} setFavorites={setList} getList={getList} key={element._id} element={element}/>
                ):null}
            </div>
        </App>
    )
})

Items.getInitialProps = async function(ctx) {
    if('client'===ctx.store.getState().user.profile.role||!ctx.store.getState().user.authenticated)
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