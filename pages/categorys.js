import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getCategorys } from '../src/gql/category'
import pageListStyle from '../src/styleMUI/list'
import CardCategory from '../components/CardCategory'
import { urlMain } from '../redux/constants/other'
import Router from 'next/router'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardPlaceholder from '../components/CardPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import { getSuppliers } from '../src/gql/user'

const Categorys = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.categorys);
    const { search } = props.app;
    let height = 310
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    const initialRender = useRef(true);
    let [paginationWork, setPaginationWork] = useState(true);
    useEffect(()=>{
        (async()=>{
            if(initialRender.current) {
                initialRender.current = false;
            } else {
                if(searchTimeOut)
                    clearTimeout(searchTimeOut)
                searchTimeOut = setTimeout(async()=>{
                    setList((await getCategorys({search: search, skip: 0})).categorys)
                    forceCheck()
                    setPaginationWork(true);
                    (document.getElementsByClassName('App-body'))[0].scroll({top: 0, left: 0, behavior: 'instant' });
                }, 500)
                setSearchTimeOut(searchTimeOut)
            }
        })()
    },[search])
    useEffect(()=>{
        forceCheck()
    },[list])
    const checkPagination = async()=>{
        if(paginationWork){
            let addedList = (await getCategorys({search: search, skip: list.length})).categorys
            if(addedList.length>0){
                setList([...list, ...addedList])
            }
            else
                setPaginationWork(false)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName='Категории'>
            <Head>
                <title>Категории</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Категории' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/categorys`} />
                <link rel='canonical' href={`${urlMain}/categorys`}/>
            </Head>
            <div className={classes.page}>
                <CardCategory suppliers={data.suppliers} list={list} setList={setList}/>
                {list?list.map((element, idx)=> {
                    if(element.suppliers)
                        element.suppliers = element.suppliers.map(supplier=>supplier._id?supplier._id:supplier)
                    else
                        element.suppliers = []
                    return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardPlaceholder height={height}/>}>
                                <CardCategory suppliers={data.suppliers} key={element._id} setList={setList} list={list} idx={idx} element={element}/>
                            </LazyLoad>
                        )}
                ):null}
            </div>
        </App>
    )
})

Categorys.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'менеджер', 'специалист', 'снабженец'].includes(ctx.store.getState().user.profile.role))
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
            ...await getCategorys({search: '', skip: 0}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getSuppliers(ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
    }
}

export default connect(mapStateToProps)(Categorys);