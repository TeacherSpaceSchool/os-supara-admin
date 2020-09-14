import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getApplications } from '../src/gql/application'
import pageListStyle from '../src/styleMUI/list'
import CardApplication from '../components/CardApplication'
import { urlMain } from '../redux/constants/other'
import Router from 'next/router'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardApplicationPlaceholder from '../components/CardPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { pdDDMMYY, differenceDates } from '../src/lib'

const Applications = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const initialRender = useRef(true);
    let [list, setList] = useState(data.applications);
    const { search, filter, sort, date } = props.app;
    const { profile } = props.user;
    let height = 50
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    const router = useRouter()
    useEffect(()=>{
        (async()=>{
            if(initialRender.current) {
                initialRender.current = false;
            } else {
                if(searchTimeOut)
                    clearTimeout(searchTimeOut)
                searchTimeOut = setTimeout(async()=>{
                    setList((await getApplications({search: search, filter: filter, sort: sort, skip: 0, ...router.query.supplier&&router.query.dateStart&&router.query.dateEnd?{supplier: router.query.supplier, date: router.query.dateStart, dateEnd: router.query.dateEnd}:{date: date}})).applications)
                    forceCheck()
                    setPaginationWork(true);
                    (document.getElementsByClassName('App-body'))[0].scroll({top: 0, left: 0, behavior: 'instant' });
                }, 500)
                setSearchTimeOut(searchTimeOut)
            }
        })()
    },[filter, sort, search, date])
    useEffect(()=>{
        forceCheck()
    },[list])
    let [paginationWork, setPaginationWork] = useState(true);
    const checkPagination = async()=>{
        if(paginationWork){
            let addedList = (await getApplications({search: search, sort: sort, filter: filter, date: date, skip: list.length})).applications
            if(addedList.length>0){
                setList([...list, ...addedList])
            }
            else
                setPaginationWork(false)
        }
    }
    const statusColor = {
        'обработка': 'orange',
        'принят': 'blue',
        'выполнен': 'green',
        'отмена': 'red'
    }
    const { isMobileApp } = props.app;
    return (
        <App setList={setList} list={list} checkPagination={checkPagination} dates={!router.query.supplier&&!router.query.dateStart&&!router.query.dateEnd} filters={data.filterApplication} sorts={data.sortApplication} searchShow={true} pageName='Заявки'>
            <Head>
                <title>Заявки</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Заявки' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/applications`} />
                <link rel='canonical' href={`${urlMain}/applications`}/>
            </Head>
            <div style={{zoom: 0.9}}>
                <div className={classes.tableRow} style={{width: 1600}}>
                    <div className={classes.cell} style={{width: 50}}><div className={classes.nameTable}>Номер</div></div>
                    <div className={classes.cell} style={{width: 70}}><div className={classes.nameTable}>Статус</div></div>
                    <div className={classes.cell} style={{width: 60}}><div className={classes.nameTable}>Подача</div></div>
                    <div className={classes.cell} style={{width: 60}}><div className={classes.nameTable}>Срок</div></div>
                    <div className={classes.cell} style={{width: 60}}><div className={classes.nameTable}>Закрыт</div></div>
                    <div className={classes.cell} style={{width: 120}}><div className={classes.nameTable}>Категория</div></div>
                    <div className={classes.cell} style={{width: 120}}><div className={classes.nameTable}>Подразделение</div></div>
                    <div className={classes.cell} style={{width: 120}}><div className={classes.nameTable}>Снабженец</div></div>
                    <div className={classes.cell} style={{width: 120}}><div className={classes.nameTable}>Специалист</div></div>
                    <div className={classes.cell} style={{width: 100}}><div className={classes.nameTable}>Сумма</div></div>
                    <div className={classes.cell} style={{width: 500}}><div className={classes.nameTable}>Роли</div></div>
                </div>
                {list?list.map((element)=> {
                    const difference = differenceDates(new Date(element.term), new Date())
                    return(
                        <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}>
                            <Link href='/application/[id]' as={`/application/${element._id}`}>
                                <div className={classes.tableRow} style={{width: 1600, cursor: 'pointer', background: 'white'}}>
                                    <div className={classes.cell} style={{width: 50}}>
                                        <div className={classes.value} style={{marginLeft: 0, marginBottom: 0}}>
                                            {element.number}
                                        </div>
                                    </div>
                                    <div className={classes.cell} style={{fontWeight: 'bold', color: statusColor[element.status], width: 70}}>
                                        {element.status}
                                    </div>
                                    <div className={classes.cell} style={{width: 60}}>
                                        <div className={classes.value} style={{marginLeft: 0, marginBottom: 0}}>
                                            {pdDDMMYY(element.createdAt)}
                                        </div>
                                    </div>
                                    <div className={classes.cell} style={{width: 60}}>
                                        <div className={classes.value} style={{marginLeft: 0, marginBottom: 0, color: element.status==='выполнен'?'black':difference<0?'red':difference<1?'orange':'green'}}>
                                            {element.term?pdDDMMYY(element.term):null}
                                        </div>
                                    </div>
                                    <div className={classes.cell} style={{width: 60}}>
                                        <div className={classes.value} style={{marginLeft: 0, marginBottom: 0}}>
                                            {element.dateClose?pdDDMMYY(element.createdAt):null}
                                        </div>
                                    </div>
                                    <div className={classes.cell} style={{width: 120}}>
                                        <div className={classes.value} style={{marginLeft: 0, marginBottom: 5}}>{element.category.name}</div>
                                    </div>
                                    <div className={classes.cell} style={{width: 120}}>
                                        <div className={classes.value} style={{marginLeft: 0, marginBottom: 5}}>{element.division.name}</div>
                                    </div>
                                    <div className={classes.cell} style={{width: 120}}>
                                        <div className={classes.value} style={{marginLeft: 0, marginBottom: 5}}>{element.supplier.name}</div>
                                    </div>
                                    <div className={classes.cell} style={{width: 120}}>
                                        <div className={classes.value} style={{marginLeft: 0, marginBottom: 5}}>{element.specialist.name}</div>
                                    </div>
                                    <div className={classes.cell} style={{width: 100}}>
                                        {
                                            element.amount.map((amount, idx) =>
                                                <div key={idx} className={classes.value} style={{marginLeft: 0, marginBottom: 5}}>{`${amount.value} ${amount.name}`}</div>
                                            )
                                        }
                                    </div>
                                    <div className={classes.cell} style={{width: 500}}>
                                        <div className={classes.row}>
                                            {
                                                element.routes.map((route, idx) =>
                                                    <div key={`${element._id}${idx}`} className={classes.value} style={{color: route.cancel?'red':route.confirmation?'green':'white'}}>
                                                        {route.role}<br/>
                                                        {route.cancel?pdDDMMYY(route.cancel):route.confirmation?pdDDMMYY(route.confirmation):null}
                                                    </div>
                                                )
                                            }
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </LazyLoad>
                    )}
                ):null}
            </div>
            {
                profile.role==='специалист'?
                    <Link href='/application/[id]' as={`/application/new`}>
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

Applications.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    ctx.store.getState().app.sort = '-createdAt'
    return {
        data: {
            ...await getApplications({ search: '', filter: '', sort: '-createdAt', skip: 0, ...ctx.query.supplier&&ctx.query.dateStart&&ctx.query.dateEnd?{supplier: ctx.query.supplier, date: ctx.query.dateStart, dateEnd: ctx.query.dateEnd}:{date: ''} }, ctx.req?await getClientGqlSsr(ctx.req):undefined)
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(Applications);