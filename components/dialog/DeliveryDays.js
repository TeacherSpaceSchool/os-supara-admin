import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Chip from '@material-ui/core/Chip';
import Button from '@material-ui/core/Button';
import dialogContentStyle from '../../src/styleMUI/dialogContent'

const DeliveryDays =  React.memo(
    (props) =>{
        const { classes, deliveryDays, setDeliveryDays, edit } = props;
        const { isMobileApp } = props.app;
        const { showMiniDialog } = props.mini_dialogActions;
        let [deliveryDaysEdit, setDeliveryDaysEdit] = useState(deliveryDays);
        let handleDeliveryDaysEdit = (day)=>{
            if(edit){
                let indexarray = deliveryDaysEdit.indexOf(day);
                if(indexarray===-1)
                    deliveryDaysEdit.push(day)
                else
                    deliveryDaysEdit.splice(indexarray, 1)
                setDeliveryDaysEdit([...deliveryDaysEdit])
            }
        }
        const width = isMobileApp? (window.innerWidth-112) : 500
        return (
            <div className={classes.main}>
                <div>
                    <Chip
                        label='Пн'
                        className={classes.chip}
                        color={deliveryDaysEdit.includes('Пн')?'primary':'inherit'}
                        onClick={()=>{handleDeliveryDaysEdit('Пн')}}
                    />
                    <Chip
                        label='Вт'
                        className={classes.chip}
                        color={deliveryDaysEdit.includes('Вт')?'primary':'inherit'}
                        onClick={()=>{handleDeliveryDaysEdit('Вт')}}
                    />
                    <Chip
                        label='Ср'
                        className={classes.chip}
                        color={deliveryDaysEdit.includes('Ср')?'primary':'inherit'}
                        onClick={()=>{handleDeliveryDaysEdit('Ср')}}
                    />
                    <Chip
                        label='Чт'
                        className={classes.chip}
                        color={deliveryDaysEdit.includes('Чт')?'primary':'inherit'}
                        onClick={()=>{handleDeliveryDaysEdit('Чт')}}
                    />
                    <Chip
                        label='Пт'
                        className={classes.chip}
                        color={deliveryDaysEdit.includes('Пт')?'primary':'inherit'}
                        onClick={()=>{handleDeliveryDaysEdit('Пт')}}
                    />
                    <Chip
                        label='Сб'
                        className={classes.chip}
                        color={deliveryDaysEdit.includes('Сб')?'primary':'inherit'}
                        onClick={()=>{handleDeliveryDaysEdit('Сб')}}
                    />
                    <Chip
                        label='Вс'
                        className={classes.chip}
                        color={deliveryDaysEdit.includes('Вс')?'primary':'inherit'}
                        onClick={()=>{handleDeliveryDaysEdit('Вс')}}
                    />
                </div>
                <br/>
                <div>
                    {
                        edit?
                            <Button variant="contained" color="primary" onClick={async()=>{
                                await setDeliveryDays(deliveryDaysEdit);
                                showMiniDialog(false);
                            }} className={classes.button}>
                                Сохранить
                            </Button>
                            :
                            null
                    }
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

DeliveryDays.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(DeliveryDays));