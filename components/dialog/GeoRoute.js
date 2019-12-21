import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import { Map, YMaps, Placemark } from 'react-yandex-maps';
import Fab from '@material-ui/core/Fab';
import GpsFixed from '@material-ui/icons/GpsFixed';
import * as snackbarActions from '../../redux/actions/snackbar'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Confirmation from './Confirmation'

const Geo =  React.memo(
    (props) =>{
        const { showMiniDialog, setMiniDialog } = props.mini_dialogActions;
        const { classes, invoices } = props;
        /*let getGeo = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position)=>{
                    setNewGeo(position.coords.latitude+', '+position.coords.longitude)
                });
            } else {
                showSnackBar('Геолокация не поддерживается')
            }
        }*/
        let [load, setLoad] = useState(true);
        return (
            <YMaps>
                <div className={classes.column}>
                    <div style={{height: window.innerHeight-128, width: window.innerWidth-48, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        {
                            load?<CircularProgress/>:null
                        }
                        <div style={{display: load?'none':'block'}}>
                            <Map onLoad={()=>{setLoad(false)}} height={window.innerHeight-128} width={window.innerWidth-48} defaultState={{ center: ['42.8700000', '74.5900000'], zoom: 12 }} >
                                {invoices.map((invoice, idx)=>
                                    <Placemark
                                        key={idx}
                                        options={{draggable: false, iconColor: !invoice.confirmationForwarder?'red':'#ffb300'}}
                                        properties={{iconCaption: invoice.number}}
                                        geometry={invoice.address[1]?invoice.address[1].split(', '):'42.8700000, 74.5900000'} />
                                )}
                            </Map>
                        </div>
                    </div>
                    <center>
                        <Button variant='contained' color='secondary' onClick={()=>{showMiniDialog(false);}} className={classes.button}>
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