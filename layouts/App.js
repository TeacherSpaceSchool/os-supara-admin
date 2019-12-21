import React, { useEffect } from 'react';
import AppBar from '../components/app/AppBar'
import Dialog from '../components/app/Dialog'
import SnackBar from '../components/app/SnackBar'
import Drawer from '../components/app/Drawer'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addFavoriteItem } from '../src/gql/items'
import { addBasket } from '../src/gql/basket'
import * as paginationActions from '../redux/actions/pagination'
import * as userActions from '../redux/actions/user'
import * as appActions from '../redux/actions/app'
import CircularProgress from '@material-ui/core/CircularProgress';
import '../scss/app.scss'
import Router from 'next/router'
import { useRouter } from 'next/router';
import { useBottomScrollListener } from 'react-bottom-scroll-listener';

export const mainWindow = React.createRef();

const App = React.memo(props => {
    const { setProfile, logout } = props.userActions;
    const { next, disable } = props.paginationActions;
    const { showLoad } = props.appActions;
    const { profile, authenticated } = props.user;
    const { work, count } = props.pagination;
    let { sorts, filters, getList, pageName, dates, searchShow } = props;
    const router = useRouter();
    useEffect( ()=>{
        if(authenticated)
            setProfile()
        else if(!authenticated&&profile.role)
            logout(false)
    },[authenticated,])
    Router.events.on('routeChangeStart', (err, url)=>{
        if(!router.pathname.includes(url))
            showLoad(true)
        if (err.cancelled) {
            showLoad(false)
        }
    })
    const containerRef = useBottomScrollListener(()=>{
        if(work) next()
    });
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
    const { load } = props.app;
    return(
        <div ref={mainWindow} className='App'>
            <Drawer/>
            <AppBar searchShow={searchShow} dates={dates} pageName={pageName} sorts={sorts} filters={filters}/>
            <div ref={containerRef} className='App-body'>
                {props.children}
            </div>
            <Dialog />
            <SnackBar/>
            {load?
                <div className='load'>
                    <CircularProgress/>
                </div>
                :
                null
            }
        </div>
    )
});

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app,
        pagination: state.pagination
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch),
        paginationActions: bindActionCreators(paginationActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);