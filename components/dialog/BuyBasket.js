import React, { useState, useEffect } from 'react';
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
import Link from 'next/link';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { addBasket } from '../../src/gql/basket';

const BuyBasket =  React.memo(
    (props) =>{
        const { isMobileApp } = props.app;
        const { client, allPrice, organization, bonus, adss, agent, basket } = props;
        const { showMiniDialog, setMiniDialog } = props.mini_dialogActions;
        const { showSnackBar } = props.snackbarActions;
        const { classes } = props;
        const width = isMobileApp? (window.innerWidth-112) : 500
        let [address, setAddress] = useState([client.address[0]]);
        let [coment, setComent] = useState('');
        let [noSplit, setNoSplit] = useState(false);
        let handleComent =  (event) => {
            setComent(event.target.value)
        };
        let [paymentMethod, setPaymentMethod] = useState('Наличные');
        let [useBonus, setUseBonus] = useState(false);
        let paymentMethods = [
            'Наличные'
        ]
        let handlePaymentMethod =  (event) => {
            setPaymentMethod(event.target.value)
        };
        useEffect(()=>{
            (async()=>{
                for (let i = 0; i < basket.length; i++) {
                    if(basket[i].count>0)
                        await addBasket({item: basket[i]._id, count: basket[i].count, consignment: basket[i].consignment})
                }
            })()
        },[])
        return (
            <div className={classes.main}>
                {
                    adss&&adss.length>0?
                        <>
                        <Link href={`/ads/${organization._id}`}>
                            <div className={classes.showAds} style={{width: width}}>
                                <WhatshotIcon color='inherit'/>&nbsp;Просмотреть акции
                            </div>
                        </Link>
                        <br/>
                        </>
                        :
                        null
                }
                <div style={{width: width}} className={classes.itogo}><b>Адрес доставки: &nbsp;</b>{client.address[0][0]}</div>
                <Link href={'client/[id]'} as={`/client/${client._id}`}>
                    Изменить адрес
                </Link>
                <br/>
                <Input
                    style={{width: width}}
                    placeholder='Комментарий'
                    value={coment}
                    className={isMobileApp?classes.inputM:classes.inputD}
                    onChange={handleComent}
                    inputProps={{
                        'aria-label': 'description',
                    }}
                />
                <br/>
                {/*<FormControl style={{width: width}} className={isMobileApp?classes.inputM:classes.inputD}>
                    <InputLabel>Способ оплаты</InputLabel>
                    <Select value={paymentMethod} onChange={handlePaymentMethod}>
                        {paymentMethods.map((element)=>
                            <MenuItem key={element} value={element} >{element}</MenuItem>
                        )}
                    </Select>
                </FormControl>
                <br/>*/}
                {
                    !agent&&organization.minimumOrder>0?
                        <>
                        <div style={{width: width}} className={classes.itogo}><b>Минимальный заказ:</b>{` ${organization.minimumOrder} сом`}</div>
                        </>
                        :null
                }
                {
                    bonus&&bonus.addedBonus?
                        <FormControlLabel
                            style={{width: width}}
                            onChange={(e)=>{
                                setUseBonus(e.target.checked)
                            }}
                            control={<Checkbox/>}
                            label={`Использовать бонус ${bonus.addedBonus} сом`}
                        />
                        :
                        null
                }
                <FormControlLabel
                    style={{width: width}}
                    onChange={(e)=>{
                        setNoSplit(e.target.checked)
                    }}
                    control={<Checkbox/>}
                    label={'Cчет фактура'}
                />
                <div style={{width: width}} className={classes.itogo}><b>Итого:</b>{` ${useBonus?(allPrice*address.length)-bonus.addedBonus:allPrice*address.length} сом`}</div>
                <br/>
                <div>
                    <Button variant='contained' color='primary' onClick={async()=>{
                        if(agent||!organization.minimumOrder===0||organization.minimumOrder<allPrice) {
                            let proofeAddress = address.length > 0
                            if(proofeAddress){
                                for (let i = 0; i<address.length; i++){
                                    proofeAddress = address[i][0].length > 0
                                }
                            }
                            if(proofeAddress) {
                                if (paymentMethod.length > 0) {
                                    const action = async () => {
                                        await addOrders({
                                            noSplit: noSplit,
                                            info: coment,
                                            usedBonus: useBonus,
                                            paymentMethod: paymentMethod,
                                            address: address,
                                            organization: organization._id,
                                            client: client._id
                                        })
                                        Router.push('/orders')
                                        showMiniDialog(false);
                                    }
                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                } else
                                    showSnackBar('Заполните все поля')
                            }
                            else {
                                showSnackBar('Укажите адрес точнее')
                            }
                        } else {
                            showSnackBar('Сумма заказа должна быть выше минимальной')
                        }
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