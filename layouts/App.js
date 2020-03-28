import React, { useEffect, useState } from 'react';
import AppBar from '../components/app/AppBar'
import Dialog from '../components/app/Dialog'
import FullDialog from '../components/app/FullDialog'
import SnackBar from '../components/app/SnackBar'
import Drawer from '../components/app/Drawer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFavoriteItem } from '../src/gql/items'
import { addBasket } from '../src/gql/basket'
import * as userActions from '../redux/actions/user'
import * as appActions from '../redux/actions/app'
import CircularProgress from '@material-ui/core/CircularProgress';
import '../scss/app.scss'
import Router from 'next/router'
import { useRouter } from 'next/router';
import { subscriptionOrder } from '../src/gql/order';
import { subscriptionReturned } from '../src/gql/returned';
import { useSubscription } from '@apollo/react-hooks';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

export const mainWindow = React.createRef();
export const alert = React.createRef();

const App = React.memo(props => {
    const { setProfile, logout } = props.userActions;
    const { profile, authenticated } = props.user;
    const { load } = props.app;
    let { checkPagination, sorts, filters, getList, pageName, dates, searchShow, setList, list } = props;
    const router = useRouter();
    const [unread, setUnread] = useState({});
    const [reloadPage, setReloadPage] = useState(false);
    useEffect( ()=>{
        if(authenticated&&!profile.role)
            setProfile()
        else if(!authenticated&&profile.role)
            logout(false)
    },[authenticated,])

    Router.events.on('routeChangeStart', (url, err)=>{

        if(router.asPath!==url&&(router.asPath.includes('items')||router.asPath.includes('brand'))) {
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

    //if(authenticated&&profile.role&&'экспедитор'!==profile.role) {
    const subscriptionOrderRes = useSubscription(subscriptionOrder);
    const subscriptionReturnedRes = useSubscription(subscriptionReturned);
    useEffect( ()=>{
        if(
            authenticated&&
            profile.role&&
            'экспедитор'!==profile.role&&
            subscriptionReturnedRes.data&&
            profile._id!==subscriptionReturnedRes.data.reloadReturned.who
        ) {
            if (router.pathname === '/returneds') {
                if(subscriptionReturnedRes.data.reloadReturned.type==='ADD'){
                    setList([subscriptionReturnedRes.data.reloadReturned.invoice, ...list])
                }
                else if(subscriptionReturnedRes.data.reloadReturned.type==='SET'){
                    let _list = [...list]
                    for(let i=0; i<_list.length; i++){
                        if(_list[i]._id===subscriptionReturnedRes.data.reloadReturned.returned._id){
                            _list[i]=subscriptionReturnedRes.data.reloadReturned.returned
                        }
                    }
                    setList([..._list])
                }
                else if(subscriptionReturnedRes.data.reloadReturned.type==='DELETE'){
                    let index = 0
                    let _list = [...list]
                    for(let i=0; i<_list.length; i++){
                        if(_list[i]._id===subscriptionReturnedRes.data.reloadReturned.returned._id){
                            index = i
                        }
                    }
                    _list.splice(index, 1);
                    setList([..._list])
                }
            }
            else {
                if(!unread.returneds) {
                    unread.returneds = true
                    setUnread({...unread})
                }
                if( navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                    navigator.vibrate(200);
                /*if (alert.current)
                    alert.current.play()*/
            }
        }
    },[subscriptionReturnedRes.data])
    useEffect( ()=>{
        if(
            authenticated&&
            profile.role&&
            'экспедитор'!==profile.role&&
            subscriptionOrderRes.data&&
            profile._id!==subscriptionOrderRes.data.reloadOrder.who
        ) {
            if (router.pathname === '/orders') {
                if(subscriptionOrderRes.data.reloadOrder.type==='ADD'){
                    setList([subscriptionOrderRes.data.reloadOrder.invoice, ...list])
                }
                else if(subscriptionOrderRes.data.reloadOrder.type==='SET'){
                    let _list = [...list]
                    for(let i=0; i<_list.length; i++){
                        if(_list[i]._id===subscriptionOrderRes.data.reloadOrder.invoice._id){
                            _list[i]=subscriptionOrderRes.data.reloadOrder.invoice
                        }
                    }
                    setList([..._list])
                }
                else if(subscriptionOrderRes.data.reloadOrder.type==='DELETE'){
                    let index = 0
                    let _list = [...list]
                    for(let i=0; i<_list.length; i++){
                        if(_list[i]._id===subscriptionOrderRes.data.reloadOrder.invoice._id){
                            index = i
                        }
                    }
                    _list.splice(index, 1);
                    setList([..._list])
                }
            }
            else {
                if(!unread.orders) {
                    unread.orders = true
                    setUnread({...unread})
                }
                if( navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                    navigator.vibrate(200);
                /*if (alert.current)
                    alert.current.play()*/
            }
        }
    },[subscriptionOrderRes.data])
    //}
    return(
        <div ref={mainWindow} className='App'>
            <Drawer unread={unread} setUnread={setUnread}/>
            <AppBar searchShow={searchShow} dates={dates} pageName={pageName} sorts={sorts} filters={filters}/>
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
        appActions: bindActionCreators(appActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);