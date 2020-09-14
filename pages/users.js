import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getUsers } from '../src/gql/user'
import { getRoles } from '../src/gql/role'
import pageListStyle from '../src/styleMUI/list'
import CardUser from '../components/CardUser'
import { urlMain } from '../redux/constants/other'
import Router from 'next/router'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardUserPlaceholder from '../components/CardPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'

const Users = React.memo((props) => {
    const classes = pageListStyle();
    const { data} = props;
    let [list, setList] = useState(data.users);
    const { search, filter  } = props.app;
    let height = 100
    useEffect(()=>{
        (async()=>{
            setPagination(100)
            setList((await getUsers({search: search, filter: filter})).users)
        })()
    },[search, filter])
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
    const roles = ['менеджер', 'специалист', 'бухгалтерия', 'кассир', 'снабженец', 'генеральный директор', 'финансовый директор', 'начальник отдела', ...data.roles.map(element=>element.name)]
    return (
        <App checkPagination={checkPagination} searchShow={true} filters={data.filterUser} pageName='Пользователи'>
            <Head>
                <title>Пользователи</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Пользователи' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/users`} />
                <link rel='canonical' href={`${urlMain}/users`}/>
            </Head>
            <div className={classes.page}>
                <div className='count'>
                    {`Всего: ${list.length}`}
                </div>
                <CardUser roles={roles} list={list} setList={setList}/>
                {list?list.map((element, idx)=> {
                    if(idx<=pagination)
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}  placeholder={<CardUserPlaceholder height={height}/>}>
                                <CardUser roles={roles} key={element._id} setList={setList} list={list} idx={idx} element={element}/>
                            </LazyLoad>
                        )}
                ):null}
            </div>
        </App>
    )
})

Users.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.filter = ''
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
            ...await getUsers({search: '', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getRoles({search: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
    }
}

export default connect(mapStateToProps)(Users);