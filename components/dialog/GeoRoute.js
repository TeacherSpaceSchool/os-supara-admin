import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import { Map, YMaps, Placemark, TrafficControl } from 'react-yandex-maps';
import SetRoute from './SetRoute';
import * as snackbarActions from '../../redux/actions/snackbar'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

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
                searchTimeOutRef.current = setTimeout(() => {
                    navigator.geolocation.getCurrentPosition((position) => {
                        setGeo([position.coords.latitude, position.coords.longitude])
                    });
                }, 1000)
                return ()=>{
                    clearTimeout(searchTimeOutRef.current)
                }
            } else {
                showSnackBar('Геолокация не поддерживается')
            }
        });
        let [load, setLoad] = useState(true);
        let [map, setMap] = useState(null);
        useEffect(()=>{
            (async()=>{
               if(map){
                   console.log()
               }
            })()
        },[map])

        return (
            <YMaps>
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
                                {invoices.map((invoice, idx)=> {
                                    if(invoice.address[1]) return <Placemark
                                            onClick={() => {
                                                setMiniDialog('Заказ', <SetRoute
                                                    geo={invoice.address[1].split(', ')}
                                                    getInvoices={getInvoices} route={route} invoice={invoice}/>);
                                                showMiniDialog(true)
                                            }}
                                            key={idx}
                                            options={{
                                                draggable: false,
                                                iconColor: !invoice.confirmationForwarder ? 'red' : '#ffb300'
                                            }}
                                            properties={{iconCaption: invoice.client.name}}
                                            geometry={invoice.address[1].split(', ')}/>
                                    }
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