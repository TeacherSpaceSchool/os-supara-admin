import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addOrders } from '../../src/gql/order'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import * as userActions from '../../redux/actions/user'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import Checkbox from '@material-ui/core/Checkbox';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Router from 'next/router'
import Confirmation from './Confirmation'

const BuyBasket =  React.memo(
    (props) =>{
        const { isMobileApp } = props.app;
        const { client, allPrice } = props;
        const { showMiniDialog, setMiniDialog } = props.mini_dialogActions;
        const { showSnackBar } = props.snackbarActions;
        const { classes } = props;
        const width = isMobileApp? (window.innerWidth-126) : 500
        let [address, setAddress] = useState([]);
        let [coment, setComent] = useState('');
        let handleComent =  (event) => {
            setComent(event.target.value)
        };
        let [paymentMethod, setPaymentMethod] = useState('');
        let paymentMethods = [
            'Наличные'
        ]
        let handlePaymentMethod =  (event) => {
            setPaymentMethod(event.target.value)
        };
        return (
            <div className={classes.main}>
                <FormControl component='fieldset' style={{width: width}}>
                    <FormLabel component='legend'>Адреса доставки:</FormLabel>
                    <FormGroup>
                        {
                            client.address.map((element, idx) => (
                                <FormControlLabel
                                    key={idx}
                                    onChange={(e)=>{
                                        if(e.target.checked)
                                            address.push(element)
                                        else {
                                            address.splice(address.indexOf(element), 1)
                                        }
                                        setAddress([...address])
                                    }}
                                    control={<Checkbox value={idx} />}
                                    label={element[0]}
                                />
                            ))
                        }
                    </FormGroup>
                </FormControl>
                <br/>
                <Input
                    style={{width: width}}
                    placeholder='Коментарий'
                    value={coment}
                    className={isMobileApp?classes.inputM:classes.inputD}
                    onChange={handleComent}
                    inputProps={{
                        'aria-label': 'description',
                    }}
                />
                <br/>
                <FormControl style={{width: width}} className={isMobileApp?classes.inputM:classes.inputD}>
                    <InputLabel>Способ оплаты</InputLabel>
                    <Select value={paymentMethod} onChange={handlePaymentMethod}>
                        {paymentMethods.map((element)=>
                            <MenuItem key={element} value={element} >{element}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <br/>
                <div style={{width: width}} className={classes.itogo}><b>Итого:</b>{` ${allPrice} сом`}</div>
                <br/>
                <div>
                    <Button variant='contained' color='primary' onClick={async()=>{
                        if(paymentMethod.length>0&&address.length>0){
                            const action = async() => {
                                await addOrders({info: coment, paymentMethod: paymentMethod, address: address})
                                Router.push('/orders')
                                showMiniDialog(false);
                            }
                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                        } else
                            showSnackBar('Заполните все поля')
                    }} className={classes.button}>
                        Купить
                    </Button>
                    <Button variant='contained' color='secondary' onClick={()=>{showMiniDialog(false);}} className={classes.button}>
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
        user: state.user,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

BuyBasket.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(BuyBasket));