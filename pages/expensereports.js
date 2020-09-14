import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getExpenseReports } from '../src/gql/expenseReport'
import pageListStyle from '../src/styleMUI/list'
import CardExpenseReport from '../components/CardExpenseReport'
import { urlMain } from '../redux/constants/other'
import Router from 'next/router'
import LazyLoad from 'react-lazyload';
import { forceCheck } from 'react-lazyload';
import CardExpenseReportPlaceholder from '../components/CardPlaceholder'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Link from 'next/link';
import { pdDDMMYY } from '../src/lib'

const ExpenseReports = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    const initialRender = useRef(true);
    let [list, setList] = useState(data.expenseReports);
    const { search, filter, sort, date } = props.app;
    const { profile } = props.user;
    let height = 130
    let [searchTimeOut, setSearchTimeOut] = useState(null);
    const statusColor = {
        'обработка': 'orange',
        'принят': 'green'
    }
    useEffect(()=>{
        (async()=>{
            if(initialRender.current) {
                initialRender.current = false;
            } else {
                if(searchTimeOut)
                    clearTimeout(searchTimeOut)
                searchTimeOut = setTimeout(async()=>{
                    setList((await getExpenseReports({search: search, filter: filter, sort: sort, date: date, skip: 0})).expenseReports)
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
            let addedList = (await getExpenseReports({search: search, sort: sort, filter: filter, date: date, skip: list.length})).expenseReports
            if(addedList.length>0){
                setList([...list, ...addedList])
            }
            else
                setPaginationWork(false)
        }
    }
    return (
        <App setList={setList} list={list} checkPagination={checkPagination} dates={true} filters={data.filterExpenseReport} sorts={data.sortExpenseReport} searchShow={true} pageName='Авансовые отчеты'>
            <Head>
                <title>Авансовые отчеты</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Авансовые отчеты' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/expensereports`} />
                <link rel='canonical' href={`${urlMain}/expensereports`}/>
            </Head>
            <center>
                <div>
                    <div className={classes.tableRow} style={{width: 510}}>
                        <div className={classes.cell} style={{width: 50}}><div className={classes.nameTable}>Номер</div></div>
                        <div className={classes.cell} style={{width: 80}}><div className={classes.nameTable}>Статус</div></div>
                        <div className={classes.cell} style={{width: 60}}><div className={classes.nameTable}>Подача</div></div>
                        <div className={classes.cell} style={{width: 60}}><div className={classes.nameTable}>Принят</div></div>
                        <div className={classes.cell} style={{width: 120}}><div className={classes.nameTable}>Снабженец</div></div>
                        <div className={classes.cell} style={{width: 40}}><div className={classes.nameTable}>1С</div></div>
                    </div>
                    {list?list.map((element)=> {
                        return(
                            <LazyLoad scrollContainer={'.App-body'} key={element._id} height={height} offset={[height, 0]} debounce={0} once={true}>
                                <Link href='/expensereport/[id]' as={`/expensereport/${element._id}`}>
                                    <div className={classes.tableRow} style={{width: 510, cursor: 'pointer', background: 'white'}}>
                                        <div className={classes.cell} style={{width: 50}}>
                                            <div className={classes.value} style={{marginLeft: 0, marginBottom: 0}}>
                                                {element.number}
                                            </div>
                                        </div>
                                        <div className={classes.cell} style={{fontWeight: 'bold', color: statusColor[element.status], width: 80}}>
                                            {element.status}
                                        </div>
                                        <div className={classes.cell} style={{width: 60}}>
                                            <div className={classes.value} style={{marginLeft: 0, marginBottom: 0}}>
                                                {pdDDMMYY(element.createdAt)}
                                            </div>
                                        </div>
                                        <div className={classes.cell} style={{width: 60}}>
                                            <div className={classes.value} style={{marginLeft: 0, marginBottom: 0}}>
                                                {element.acceptHead?pdDDMMYY(element.acceptHead):null}
                                            </div>
                                        </div>
                                        <div className={classes.cell} style={{width: 120}}>
                                            <div className={classes.value} style={{marginLeft: 0, marginBottom: 5}}>{element.supplier.name}</div>
                                        </div>
                                        <div className={classes.cell} style={{width: 40, color: element.sync?'green':'red'}}>
                                            <div className={classes.value} style={{marginLeft: 0, marginBottom: 5}}>{element.sync?'да':'нет'}</div>
                                        </div>
                                    </div>
                                </Link>
                            </LazyLoad>
                        )}
                    ):null}
                </div>
            </center>
            {
                profile.role==='снабженец'&&!(list.filter(element=>element.status==='обработка')).length?
                    <Link href='/expensereport/[id]' as={`/expensereport/new`}>
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

ExpenseReports.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'менеджер', 'начальник отдела', 'снабженец'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        }
        else {
            Router.push('/')
        }
    ctx.store.getState().app.sort = '-createdAt'
    return {
        data: {
            ...await getExpenseReports({search: '', filter: '', sort: '-createdAt', date: '', skip: 0}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

export default connect(mapStateToProps)(ExpenseReports);