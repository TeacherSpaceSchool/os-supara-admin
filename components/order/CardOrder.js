import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardOrderStyle from '../../src/styleMUI/orders/cardOrder'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import { pdDDMMYYHHMM } from '../../src/lib'
import Order from '../dialog/Order'

const CardOrder = React.memo((props) => {
    const classes = cardOrderStyle();
    const { element, setList, route, getInvoices } = props;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { profile, authenticated} = props.user;
    const statusColor = {
        'обработка': 'orange',
        'принят': 'blue',
        'выполнен': 'green',
        'отмена': 'red'
    }
    let [priceAfterReturn, setPriceAfterReturn] = useState(0);
    useEffect(()=>{
        priceAfterReturn = 0
        for(let i=0; i<element.orders.length; i++){
            priceAfterReturn += (element.allPrice-element.orders[i].returned*(element.orders[i].item.stock?element.orders[i].item.stock:element.orders[i].item.price))
        }
        setPriceAfterReturn(priceAfterReturn)
    },[element,])
    return (
        <Card className={classes.card} onClick={()=>{setMiniDialog('Заказ', <Order getInvoices={getInvoices} route={route} element={element} setList={setList}/>); showMiniDialog(true)}}>
            <CardActionArea>
                <CardContent className={classes.column}>
                    <div className={classes.row}>
                        <div className={classes.number}>{element.number}</div>&nbsp;
                        <div className={classes.status} style={{background: statusColor[element.orders[0].status]}}>{
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
                    {
                        element.agent&&element.agent.name?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Агент: &nbsp;</div>
                                <div className={classes.value}>{element.agent.name}</div>
                            </div>
                            :
                            null
                    }
                    <div className={classes.row}>
                        <div className={classes.nameField}>Время заказа:&nbsp;</div>
                        <div className={classes.value}>{pdDDMMYYHHMM(new Date(element.createdAt))}</div>
                    </div>
                    {
                        element.dateDelivery?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Время доставки:&nbsp;</div>
                                <div className={classes.value}>{pdDDMMYYHHMM(new Date(element.dateDelivery))}</div>
                            </div>
                            :
                            null

                    }
                    <div className={classes.row}>
                        <div className={classes.nameField}>Адрес:&nbsp;</div>
                        <div className={classes.value}>{element.address[0]}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Получатель:&nbsp;</div>
                        <div className={classes.value}>{element.client.name}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Поставщик:&nbsp;</div>
                        <div className={classes.value}>{element.orders[0].item.organization.name}</div>
                    </div>
                    {
                        element.usedBonus&&element.usedBonus>0?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Использованный бонус:&nbsp;</div>
                                <div className={classes.value}>{element.usedBonus}&nbsp;сом</div>
                            </div>
                            :
                            null
                    }
                    <div className={classes.row}>
                        <div className={classes.nameField}>Сумма&nbsp;{priceAfterReturn!==element.allPrice?'(факт./итого)':''}:</div>
                        <div className={classes.value}>{priceAfterReturn!==element.allPrice?`${priceAfterReturn} сом/${element.allPrice} сом`:`${element.allPrice} сом`}</div>
                    </div>
                    {
                        element.consignmentPrice?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Консигнации:&nbsp;</div>
                                <div className={classes.value} style={{color: element.paymentConsignation?'green':'red'}}>
                                    {element.consignmentPrice}&nbsp;сом,&nbsp;{element.paymentConsignation?'оплачены':'не оплачены'}
                                </div>
                            </div>
                            :
                            null
                    }
                    {
                        authenticated&&profile.role!=='client'?
                            <>
                            {
                                element.allTonnage?
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>Тоннаж:&nbsp;</div>
                                        <div className={classes.value}>{element.allTonnage}&nbsp;кг</div>
                                    </div>
                                    :
                                    null
                            }
                            {
                                element.allSize?
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>Кубатура:&nbsp;</div>
                                        <div className={classes.value}>{element.allSize}&nbsp;см³</div>
                                    </div>
                                    :
                                    null
                            }
                            </>
                        :
                            null
                    }
                </CardContent>
            </CardActionArea>
        </Card>
    );
})

function mapStateToProps (state) {
    return {
        user: state.user,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardOrder)