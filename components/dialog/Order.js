import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { cancelOrders, approveOrders } from '../../src/gql/order'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import * as userActions from '../../redux/actions/user'
import Button from '@material-ui/core/Button';
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import { pdDDMMYYHHMM } from '../../src/lib'
import Confirmation from './Confirmation'
import Geo from '../../components/dialog/Geo'

const Order =  React.memo(
    (props) =>{
        const { isMobileApp } = props.app;
        const { profile } = props.user;
        const { showMiniDialog, setMiniDialog } = props.mini_dialogActions;
        const { classes, element, setList, route, getInvoices } = props;
        const width = isMobileApp? (window.innerWidth-144) : 500;
        return (
            <div className={classes.column} style={{width: width}}>
                <div className={classes.row}>
                    <div className={classes.nameField}>Заказ №:&nbsp;</div>
                    <div className={classes.value}>{element.number}</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Статус:&nbsp;</div>
                    <div className={classes.value}>{
                            element.orders[0].status==='принят'&&(element.confirmationForwarder||element.confirmationClient)?
                                element.confirmationClient?
                                    'подтвержден клиентом'
                                    :
                                    element.confirmationForwarder?
                                        'доставлен поставщиком'
                                        :
                                        element.orders[0].status
                                :
                                element.orders[0].status
                    }</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Адрес: &nbsp;</div>
                    <div className={classes.value}>{element.address[0]}</div>
                </div>
                <div className={classes.geo} style={{color: element.address[1]?'#ffb300':'red'}} onClick={()=>{
                    setMiniDialog('Геолокация', <Geo geo={element.address[1]}/>, true)
                    showMiniDialog(true)
                }}>
                    {
                        element.address[1]?
                            'Посмотреть геолокацию'
                            :
                            'Геолокация не задана'
                    }
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Время заказа: &nbsp;</div>
                    <div className={classes.value}>{pdDDMMYYHHMM(new Date(element.createdAt))}</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Время доставки:&nbsp;</div>
                    <div className={classes.value}>{pdDDMMYYHHMM(new Date(element.dateDelivery))}</div>
                </div>
                <a href={`/client/${element.client.user._id}`} target='_blank'>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Получатель:&nbsp;</div>
                        <div className={classes.value}>{element.client.name}</div>
                    </div>
                </a>
                <a href={`/organization/${element.orders[0].item.organization._id}`} target='_blank'>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Поставщик:&nbsp;</div>
                        <div className={classes.value}>{element.orders[0].item.organization.name}</div>
                    </div>
                </a>
                <div className={classes.row}>
                    <div className={classes.nameField}>Сумма:&nbsp;</div>
                    <div className={classes.value}>{element.allPrice}&nbsp;сом</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Способ оплаты:&nbsp;</div>
                    <div className={classes.value}>{element.paymentMethod}</div>
                </div>
                <div className={classes.row}>
                    <div className={classes.nameField}>Информация:&nbsp;</div>
                    <div className={classes.value}>{element.info}</div>
                </div>
                <br/>
                <div className={classes.column}>
                    <b>Товары:</b>
                    <br/>
                    <br/>
                    {
                        element.orders.map((order, idx) => (
                            <div key={idx} className={classes.column}>
                                <a href={`/item/${order.item._id}`} target='_blank'>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>Товар:&nbsp;</div>
                                        <div className={classes.value}>{order.item.name}</div>
                                    </div>
                                </a>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Количество:&nbsp;</div>
                                    <div className={classes.value}>{order.count}&nbsp;шт</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Общая стоимость:&nbsp;</div>
                                    <div className={classes.value}>{order.allPrice}&nbsp;сом</div>
                                </div>
                                <br/>
                            </div>
                        ))
                    }
                </div>
                <div>
                    {
                        (
                            (profile.role==='client'&&'принят'===element.orders[0].status&&!element.confirmationClient)
                            ||
                            (['менеджер', 'организация'].includes(profile.role)&&'принят'===element.orders[0].status&&!element.confirmationForwarder)
                            ||
                            profile.role==='admin'
                        )?
                            <Button variant='contained' color='primary' onClick={()=>{
                                const action = async() => {
                                    let invoices = (await approveOrders({route: route, invoices: [element._id]})).invoices
                                    if(setList)
                                        setList(invoices)
                                    if(getInvoices)
                                        getInvoices()
                                }
                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                            }} className={classes.button}>
                                Заказ выполнен
                            </Button>
                            :
                            null
                    }
                    {
                        (profile.role==='client'&&element.orders[0].status==='обработка')
                        ||(['менеджер', 'организация'].includes(profile.role)&&['обработка', 'принят'].includes(element.orders[0].status)&&!element.confirmationForwarder
                        ||profile.role==='admin')?
                            <Button variant='contained' color='primary' onClick={()=>{
                                let _id = element.orders.map(order=>order._id)
                                const action = async() => {
                                    let invoices = (await cancelOrders({_id: _id})).invoices
                                    if(setList)
                                        setList(invoices)
                                    if(getInvoices)
                                        getInvoices()
                                }
                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                            }} className={classes.button}>
                                Отменить заказ
                            </Button>
                            :
                            null
                    }
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

Order.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(Order));