import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import { Map, YMaps, Placemark, TrafficControl } from 'react-yandex-maps';
import Order from './Order';
import GpsFixed from '@material-ui/icons/GpsFixed';
import * as snackbarActions from '../../redux/actions/snackbar'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Confirmation from './Confirmation'

const Geo =  React.memo(
    (props) =>{
        const { showFullDialog, setMiniDialog, showMiniDialog } = props.mini_dialogActions;
        const { showSnackBar } = props.snackbarActions;
        const { classes, invoices, getInvoices, route,  } = props;

        /*let getGeo = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position)=>{
                    setNewGeo(position.coords.latitude+', '+position.coords.longitude)
                });
            } else {
                showSnackBar('Геолокация не поддерживается')
            }
        }*/
        let [geo, setGeo] = useState(null);
        const searchTimeOutRef = useRef(null);
        useEffect(()=>{
            if (navigator.geolocation) {
                let geoTimer = setTimeout(()=>{
                    navigator.geolocation.getCurrentPosition((position)=>{
                        setGeo([position.coords.latitude, position.coords.longitude])
                    });
                }, 1000)
                searchTimeOutRef.current = geoTimer
                return ()=>{
                    clearTimeout(searchTimeOutRef.current)
                }
            } else {
                showSnackBar('Геолокация не поддерживается')
            }
        });
        let [load, setLoad] = useState(true);
        let [map, setMap] = useState(null);
        let onApiAvaliable = (ymaps)=>{
            let route = invoices.map(invoice=>{return { type: 'wayPoint', point: invoice.address[1].split(', ') }})
            ymaps.route(route, {
                mapStateAutoApply: true
            }).then((route) => {
                console.log(route)
                route.getPaths().options.set({
                    // в балуне выводим только информацию о времени движения с учетом пробок
                    balloonContentBodyLayout: ymaps.templateLayoutFactory.createClass('$[properties.humanJamsTime]'),
                    // можно выставить настройки графики маршруту
                    strokeColor: '0000ffff',
                    opacity: 0.9
                });

                // добавляем маршрут на карту
                map.geoObjects.add(route);
            });
        }
        return (
            <YMaps onApiAvaliable={(ymaps) => {console.log(1);onApiAvaliable(ymaps)}}>
                <div className={classes.column}>
                    <div style={{height: window.innerHeight-128, width: window.innerWidth-48, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {
                            load?<CircularProgress/>:null
                        }
                        <div style={{display: load?'none':'block'}}>
                            <Map instanceRef={(ref) => setMap(ref)} onLoad={()=>{setLoad(false)}} height={window.innerHeight-128} width={window.innerWidth-48} defaultState={{ center: ['42.8700000', '74.5900000'], zoom: 12 }} >
                                <TrafficControl options={{ float: 'right' }} />
                                {geo?
                                    <Placemark
                                        options={{draggable: false, iconColor: '#ffb300'}}
                                        properties={{iconCaption: 'Я'}}
                                        geometry={geo} />
                                    :
                                    null
                                }
                                {invoices.map((invoice, idx)=>
                                    <Placemark
                                        onClick={()=>{setMiniDialog('Заказ', <Order getInvoices={getInvoices} route={route} element={invoice}/>); showMiniDialog(true)}}
                                        key={idx}
                                        options={{draggable: false, iconColor: !invoice.confirmationForwarder?'red':'#ffb300'}}
                                        properties={{iconCaption: invoice.number}}
                                        geometry={invoice.address[1]?invoice.address[1].split(', '):'42.8700000, 74.5900000'} />
                                )}
                            </Map>
                        </div>
                    </div>
                    <center>
                        <Button variant='contained' color='secondary' onClick={()=>{showFullDialog(false);}} className={classes.button}>
                            Закрыть
                        </Button>
                    </center>
                </div>
            </YMaps>
        );
    }
)

function mapStateToProps (state) {
    return {
        mini_dialog: state.mini_dialog,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch)
    }
}

Geo.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(Geo));