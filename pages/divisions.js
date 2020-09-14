import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getDivisions } from '../src/gql/division'
import { getSuppliers, getSpecialists, getHeads } from '../src/gql/user'
import pageListStyle from '../src/styleMUI/list'
import CardDivision from '../components/CardDivision'
import { urlMain } from '../redux/constants/other'
import Router from 'next/router'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardDivisionPlaceholder from '../components/CardPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'

const Divisions = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    let [list, setList] = useState(data.divisions);
    const { search } = props.app;
    const height = 252
    useEffect(()=>{
        (async()=>{
            setPagination(100)
            setList((await getDivisions({search: search})).divisions)
        })()
    },[search])
    useEffect(()=>{
        setPagination(100)
        forceCheck()
    },[list])
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<list.length){
            setPagination(pagination+100)
        }
    }
    return (
        <App checkPagination={checkPagination} searchShow={true} pageName='Подразделения'>
            <Head>
                <title>Подразделения</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Подразделения' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/divisions`} />
                <link rel='canonical' href={`${urlMain}/divisions`}/>
            </Head>
            <div className={classes.page}>
                <div className='count'>
                    {`Всего: ${list.length}`}
                </div>
                <CardDivision heads={data.heads} suppliers={data.suppliers} specialists={data.specialists} list={list} setList={setList}/>
                {list?list.map((element, idx)=> {
                        if (idx <= pagination) {
                            if(element.suppliers)
                                element.suppliers = element.suppliers.map(supplier=>supplier._id?supplier._id:supplier)
                            else
                                element.suppliers = []
                            if(element.specialists)
                                element.specialists = element.specialists.map(specialist=>specialist._id?specialist._id:specialist)
                            else
                                element.specialists = []
                            return (
                                <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height}
                                          offset={[height, 0]} debounce={0} once={true}
                                          placeholder={<CardDivisionPlaceholder height={height}/>}>
                                    <CardDivision heads={data.heads} suppliers={data.suppliers} specialists={data.specialists} key={element._id} setList={setList} list={list}
                                                  idx={idx} element={element}/>
                                </LazyLoad>
                            )
                        }
                    }
                ):null}
            </div>
        </App>
    )
})

Divisions.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'менеджер'].includes(ctx.store.getState().user.profile.role))
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
            ...await getDivisions({search: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getSuppliers(ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getHeads(ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getSpecialists(ctx.req?await getClientGqlSsr(ctx.req):undefined)
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
    }
}

export default connect(mapStateToProps)(Divisions);