import React, { useEffect, useState } from 'react';
import AppBar from '../components/app/AppBar'
import Dialog from '../components/app/Dialog'
import FullDialog from '../components/app/FullDialog'
import SnackBar from '../components/app/SnackBar'
import Drawer from '../components/app/Drawer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../redux/actions/user'
import * as appActions from '../redux/actions/app'
import CircularProgress from '@material-ui/core/CircularProgress';
import '../scss/app.scss'
import Router from 'next/router'
import { useRouter } from 'next/router';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';
import { useSubscription } from '@apollo/react-hooks';
import { subscriptionData } from '../src/gql/data';

export const mainWindow = React.createRef();
export const alert = React.createRef();

const App = React.memo(props => {
    const { setProfile, logout } = props.userActions;
    const { setIsMobileApp } = props.appActions;
    const { profile, authenticated } = props.user;
    const { load, search } = props.app;
    let { checkPagination, sorts, filters, pageName, dates, searchShow, setList, list, defaultOpenSearch } = props;
    const router = useRouter();
    const [unread, setUnread] = useState({});
    const [reloadPage, setReloadPage] = useState(false);
    useEffect( ()=>{
        if(authenticated&&!profile.role)
            setProfile()
        else if(!authenticated&&profile.role)
            logout(false)
    },[authenticated])
    useEffect( ()=>{
        if(mainWindow.current&&mainWindow.current.offsetWidth<900) {
            setIsMobileApp(true)
        }
    },[mainWindow])

    Router.events.on('routeChangeStart', async (url, err)=>{

        if(router.asPath!==url&&(router.asPath.includes('applications')||router.asPath.includes('divisions'))) {
            if(!sessionStorage.scrollPostionStore)
                sessionStorage.scrollPostionStore = JSON.stringify({})
            let scrollPostionStore = JSON.parse(sessionStorage.scrollPostionStore)
            let appBody = (document.getElementsByClassName('App-body'))[0]
            scrollPostionStore[router.asPath] = appBody.scrollTop
            sessionStorage.scrollPostionStore = JSON.stringify(scrollPostionStore)
        }


        if (!router.pathname.includes(url)&&!router.asPath.includes(url)&&!reloadPage)
            setReloadPage(true)
        if (err&&err.cancelled&&reloadPage)
            setReloadPage(false)
    })

    Router.events.on('routeChangeComplete', (url) => {
        if(sessionStorage.scrollPostionStore) {
            let appBody = (document.getElementsByClassName('App-body'))[0]
            appBody.scroll({
                top: (JSON.parse(sessionStorage.scrollPostionStore))[url],
                left: 0,
                behavior: 'instant'
            });
        }

    });

    const containerRef = useBottomScrollListener(async()=>{
        if(checkPagination) {
            await setReloadPage(true)
            await checkPagination()
            await setReloadPage(false)
        }
    });


    let subscriptionDataRes = useSubscription(subscriptionData);
    useEffect( ()=>{
        if (
            subscriptionDataRes &&
            authenticated &&
            profile.role &&
            subscriptionDataRes.data &&
            subscriptionDataRes.data.reloadData
        ) {
            if(subscriptionDataRes.data.reloadData.application){
                if (router.pathname === '/applications') {
                    if (subscriptionDataRes.data.reloadData.type === 'ADD'&&!search.length) {
                        setList([subscriptionDataRes.data.reloadData.application, ...list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'SET') {
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.application._id) {
                                _list[i] = subscriptionDataRes.data.reloadData.application
                            }
                        }
                        setList([..._list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'DELETE') {
                        let index = undefined
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.application._id) {
                                index = i
                            }
                        }
                        if(index!==undefined) {
                            _list.splice(index, 1);
                            setList([..._list])
                        }
                    }
                }
                else {
                    if (!unread.applications) {
                        unread.applications = true
                        setUnread({...unread})
                    }
                    if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                        navigator.vibrate(200);
                }

            }
            else if(subscriptionDataRes.data.reloadData.cashConsumable){
                if (router.pathname === '/cashconsumables') {
                    if (subscriptionDataRes.data.reloadData.type === 'ADD'&&!search.length) {
                        setList([subscriptionDataRes.data.reloadData.cashConsumable, ...list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'SET') {
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.cashConsumable._id) {
                                _list[i] = subscriptionDataRes.data.reloadData.cashConsumable
                            }
                        }
                        setList([..._list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'DELETE') {
                        let index = undefined
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.cashConsumable._id) {
                                index = i
                            }
                        }
                        if(index!==undefined) {
                            _list.splice(index, 1);
                            setList([..._list])
                        }
                    }
                }
                else {
                    if (!unread.cashConsumables) {
                        unread.cashConsumables = true
                        setUnread({...unread})
                    }
                    if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                        navigator.vibrate(200);
                }

            }
            else if(subscriptionDataRes.data.reloadData.waybill){
                if (router.pathname === '/waybills') {
                    if (subscriptionDataRes.data.reloadData.type === 'ADD'&&!search.length) {
                        setList([subscriptionDataRes.data.reloadData.waybill, ...list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'SET') {
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.waybill._id) {
                                _list[i] = subscriptionDataRes.data.reloadData.waybill
                            }
                        }
                        setList([..._list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'DELETE') {
                        let index = undefined
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.waybill._id) {
                                index = i
                            }
                        }
                        if(index!==undefined) {
                            _list.splice(index, 1);
                            setList([..._list])
                        }
                    }
                }
                else {
                    if (!unread.waybills) {
                        unread.waybills = true
                        setUnread({...unread})
                    }
                    if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                        navigator.vibrate(200);
                }

            }
            else if(subscriptionDataRes.data.reloadData.expenseReport){
                if (router.pathname === '/expensereports') {
                    if (subscriptionDataRes.data.reloadData.type === 'ADD'&&!search.length) {
                        setList([subscriptionDataRes.data.reloadData.expenseReport, ...list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'SET') {
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.expenseReport._id) {
                                _list[i] = subscriptionDataRes.data.reloadData.expenseReport
                            }
                        }
                        setList([..._list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'DELETE') {
                        let index = undefined
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.expenseReport._id) {
                                index = i
                            }
                        }
                        if(index!==undefined) {
                            _list.splice(index, 1);
                            setList([..._list])
                        }
                    }
                }
                else {
                    if (!unread.expenseReports) {
                        unread.expenseReports = true
                        setUnread({...unread})
                    }
                    if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                        navigator.vibrate(200);
                }
            }
            else if(subscriptionDataRes.data.reloadData.balance){
                if (router.pathname === '/balances') {
                    if (subscriptionDataRes.data.reloadData.type === 'ADD'&&!search.length) {
                        setList([subscriptionDataRes.data.reloadData.balance, ...list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'SET') {
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.balance._id) {
                                _list[i] = subscriptionDataRes.data.reloadData.balance
                            }
                        }
                        setList([..._list])
                    }
                    else if (subscriptionDataRes.data.reloadData.type === 'DELETE') {
                        let index = undefined
                        let _list = [...list]
                        for (let i = 0; i < _list.length; i++) {
                            if (_list[i]._id === subscriptionDataRes.data.reloadData.balance._id) {
                                index = i
                            }
                        }
                        if(index!==undefined) {
                            _list.splice(index, 1);
                            setList([..._list])
                        }
                    }
                }
                else {
                    if (!unread.balances) {
                        unread.balances = true
                        setUnread({...unread})
                    }
                    if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                        navigator.vibrate(200);
                }

            }

        }
    },[subscriptionDataRes.data])

    return(
        <div ref={mainWindow} className='App'>
            <Drawer unread={unread} setUnread={setUnread}/>
            <AppBar unread={unread} defaultOpenSearch={defaultOpenSearch} searchShow={searchShow} dates={dates} pageName={pageName} sorts={sorts} filters={filters}/>
            <div ref={containerRef} className='App-body'>
                {props.children}
            </div>
            <FullDialog/>
            <Dialog />
            <SnackBar/>
            {load||reloadPage?
                <div className='load'>
                    <CircularProgress/>
                </div>
                :
                null
            }
            <audio src='/alert.mp3' ref={alert}/>
        </div>
    )
});

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);