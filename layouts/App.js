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
import { useSubscription } from '@apollo/react-hooks';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

export const mainWindow = React.createRef();
export const alert = React.createRef();

const App = React.memo(props => {
    const { setProfile, logout } = props.userActions;
    const { profile, authenticated } = props.user;
    const { load } = props.app;
    let { checkPagination, sorts, filters, getList, pageName, dates, searchShow } = props;
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


        if(router.asPath!==url) {
            if(!localStorage.scrollPostionStore)
                localStorage.scrollPostionStore = JSON.stringify({})
            let scrollPostionStore = JSON.parse(localStorage.scrollPostionStore)
            let appBody = (document.getElementsByClassName('App-body'))[0]
            scrollPostionStore[router.asPath] = appBody.scrollTop
            localStorage.scrollPostionStore = JSON.stringify(scrollPostionStore)
        }


        if (!router.pathname.includes(url)&&!router.asPath.includes(url)&&!reloadPage)
            setReloadPage(true)
        if (err&&err.cancelled&&reloadPage)
            setReloadPage(false)
    })

    Router.events.on('routeChangeComplete', (url) => {
        if(localStorage.scrollPostionStore) {
            let appBody = (document.getElementsByClassName('App-body'))[0]
            appBody.scroll({
                top: (JSON.parse(localStorage.scrollPostionStore))[url],
                left: 0,
                behavior: 'instant'
            });
        }

    });

    const containerRef = useBottomScrollListener(()=>{
        if(checkPagination)
            checkPagination()
    });

    //if(authenticated&&profile.role&&'экспедитор'!==profile.role) {
        const subscriptionOrderRes = useSubscription(subscriptionOrder);
        if(
            authenticated&&
            profile.role&&
            'экспедитор'!==profile.role&&
            subscriptionOrderRes.data&&
            profile._id!==subscriptionOrderRes.data.reloadOrder.who
        ) {
            if (router.pathname === '/orders')
                getList()
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
    //}
    useEffect( ()=>{
        (async ()=>{
            if(authenticated&&profile.role==='client'){
                if(localStorage.favorites&&localStorage.favorites!=='[]') {
                    let favorites = JSON.parse(localStorage.favorites)
                    favorites = favorites.map(element => element._id)
                    await addFavoriteItem(favorites)
                    localStorage.favorites = JSON.stringify([])
                    if (getList !== undefined)
                        await getList()
                }
                if(localStorage.basket&&localStorage.basket!=='[]') {
                    let basket = JSON.parse(localStorage.basket)
                    for(let i=0; i<basket.length; i++){
                        await addBasket({item: basket[i].item._id, count: basket[i].count})
                    }
                    localStorage.basket = '[]'
                    if (getList !== undefined)
                        await getList()
                }
            }
        })()
    },[])
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