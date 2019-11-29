import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardOrderStyle from '../../src/styleMUI/orders/cardOrder'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import dynamic from 'next/dynamic'
import { pdDDMMYYHHMM } from '../../src/lib'

const Order = dynamic(
    () => import('../dialog/Order')
)

const CardOrder = React.memo((props) => {
    const classes = cardOrderStyle();
    const { element, setList, route, getInvoices } = props;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const statusColor = {
        'обработка': 'orange',
        'принят': 'blue',
        'выполнен': 'green',
        'отмена': 'red'
    }
    return (
        <Card className={classes.card} onClick={()=>{setMiniDialog('Заказ', <Order getInvoices={getInvoices} route={route} element={element} setList={setList}/>); showMiniDialog(true)}}>
            <CardActionArea>
                <CardContent className={classes.column}>
                    <div className={classes.row}>
                        <div className={classes.number}>{element.number}</div>&nbsp;
                        <div className={classes.date}>{pdDDMMYYHHMM(new Date(element.updatedAt))}</div>&nbsp;&nbsp;
                        <div className={classes.status} style={{background: statusColor[element.orders[0].status]}}>{
                            element.orders[0].status==='принят'&&(element.confirmationForwarder||element.confirmationClient)?
                                route?
                                    element.confirmationForwarder?
                                        'выполнен'
                                        :
                                        element.orders[0].status
                                    :
                                    element.confirmationClient?
                                        'выполнен'
                                        :
                                        element.confirmationForwarder?
                                            'доставлен'
                                            :
                                            element.orders[0].status
                                :
                                element.orders[0].status
                        }</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Адрес:&nbsp;</div>
                        <div className={classes.value}>{element.address}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Получатель:&nbsp;</div>
                        <div className={classes.value}>{element.client.name}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Поставщик:&nbsp;</div>
                        <div className={classes.value}>{element.orders[0].item.organization.name}</div>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.nameField}>Сумма:&nbsp;</div>
                        <div className={classes.value}>{element.allPrice}&nbsp;сом</div>
                    </div>
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