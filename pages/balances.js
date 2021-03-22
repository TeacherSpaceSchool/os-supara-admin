import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getBalances } from '../src/gql/balance'
import pageListStyle from '../src/styleMUI/list'
import CardBalance from '../components/CardBalance'
import { urlMain } from '../redux/constants/other'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardBalancePlaceholder from '../components/CardPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import Router from 'next/router'

const Balances = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const initialRender = useRef(true);
    let [list, setList] = useState(data.balances);
    const { pinCode } = props.user;
    const { search } = props.app;
    let height = 116
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    const getList = async()=> {
        setList((await getBalances({search: search, skip: 0})).balances)
        forceCheck()
        setPaginationWork(true);
        (document.getElementsByClassName('App-body'))[0].scroll({top: 0, left: 0, behavior: 'instant' });
    }
    useEffect(()=>{
        (async()=>{
            if(!initialRender.current&&pinCode) {
                await getList()
            }
        })()
    },[pinCode])
    useEffect(()=>{
        (async()=>{
            if(initialRender.current) {
                initialRender.current = false;
            } else {
                if(searchTimeOut)
                    clearTimeout(searchTimeOut)
                searchTimeOut = setTimeout(async()=>{
                    await getList()
                }, 500)
                setSearchTimeOut(searchTimeOut)
            }
        })()
    },[search])
    useEffect(()=>{
        forceCheck()
    },[list])
    let [paginationWork, setPaginationWork] = useState(true);
    const checkPagination = async()=>{
        if(paginationWork){
            let addedList = (await getBalances({search: search, skip: list.length})).balances
            if(addedList.length>0){
                setList([...list, ...addedList])
            }
            else
                setPaginationWork(false)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName='Баланс'>
            <Head>
                <title>Баланс</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Баланс' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/balances`} />
                <link rel='canonical' href={`${urlMain}/balances`}/>
            </Head>
            <div className={classes.page}>
                {list?list.map((element)=> {
                    return(
                        <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardBalancePlaceholder height={height}/>}>
                            <CardBalance history key={element._id} element={element}/>
                        </LazyLoad>
                    )}
                ):null}
            </div>
        </App>
    )
})

Balances.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'менеджер', 'снабженец'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        }
        else {
            Router.push('/')
        }
    return {
        data: {
            ...await getBalances({search: '', skip: 0}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Balances);