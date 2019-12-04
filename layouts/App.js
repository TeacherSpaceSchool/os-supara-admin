import React, { useEffect } from 'react';
import { getAds } from '../src/gql/ads'
import AppBar from '../components/app/AppBar'
import Dialog from '../components/app/Dialog'
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

export const mainWindow = React.createRef();

const App = React.memo(props => {
    const { setProfile, logout } = props.userActions;
    const { showLoad } = props.appActions;
    const { profile, authenticated } = props.user;
    let { sorts, filters, getList, pageName } = props;
    const router = useRouter();
    //let [ads, setAds] = useState({});
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
    useEffect( ()=>{
        (async ()=>{
            if(authenticated){
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
            //setAds((await getAds()).ads)
        })()
    },[])
    const { load } = props.app;
    /*const { data: { data }, loading } = useSubscription(
        BASKET_SUBSCRIPTION
    );
    console.log(data, loading)*/
    return(
        <div ref={mainWindow} className='App'>
            <Drawer />
            <AppBar pageName={pageName} sorts={sorts} filters={filters}/>
            <div className='App-body'>
                {/*
                       ads&&ads.url?
                           <a href={ads.url}>
                               <img
                                   src={ads.image}
                                   alt={ads.title}
                                   className='marketImg'
                               />
                           </a>
                           :
                           null*/
                }
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
        appActions: bindActionCreators(appActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);