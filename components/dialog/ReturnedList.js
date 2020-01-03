import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Button from '@material-ui/core/Button';
import dialogContentStyle from '../../src/styleMUI/dialogContent'

const ShippingList =  React.memo(
    (props) =>{
        const { classes, invoices } = props;
        const { isMobileApp } = props.app;
        const { showMiniDialog } = props.mini_dialogActions;
        let [shippingList, setShippingList] = useState([]);
        useEffect(()=>{
            let shippingListObject = {}
            shippingList = []
            for(let i=0; i<invoices.length; i++){
                for(let ii=0; ii<invoices[ii].orders.length; ii++) {
                    if(invoices[i].orders[ii].returned){
                        if(!shippingListObject[invoices[i].orders[ii].item._id]){
                            shippingListObject[invoices[i].orders[ii].item._id] = {
                                name: invoices[i].orders[ii].item.name,
                                count: invoices[i].orders[ii].returned
                            }
                        }
                        else {
                            shippingListObject[invoices[i].orders[ii].item._id].count+=invoices[i].orders[ii].returned
                        }
                    }
                }
            }
            let keys = Object.keys(shippingListObject)
            for(let i=0; i<keys.length; i++){
                shippingListObject[keys[i]]._id = keys[i]
                shippingList.push(shippingListObject[keys[i]])
            }
            setShippingList([...shippingList])
        },[])
        const width = isMobileApp? (window.innerWidth-112) : 500
        return (
            <div className={classes.main} style={{width: width}}>
                {
                    shippingList.map((order, idx) => {
                        return(
                                <div style={{width: width}} key={idx} className={classes.column}>
                                    <a href={`/item/${order._id}`} target='_blank'>
                                        <div style={{width: width}} className={classes.row}>
                                            <div className={classes.nameField}>Товар:&nbsp;</div>
                                            <div className={classes.value}>{order.name}</div>
                                        </div>
                                    </a>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>Количество:&nbsp;</div>
                                        <div className={classes.value}>{order.count}&nbsp;шт</div>
                                    </div>
                                    <br/>
                                </div>
                            )
                    })
                }
                <div>
                    <Button variant="contained" color="secondary" onClick={()=>{showMiniDialog(false);}} className={classes.button}>
                        Закрыть
                    </Button>
                </div>
            </div>
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
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

ShippingList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(ShippingList));