import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardWaybillStyle from '../src/styleMUI/card'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { deleteWaybill, getUnloadingWaybill } from '../src/gql/waybill'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import Confirmation from './dialog/Confirmation'
import { pdDDMMYYHHMM } from '../src/lib'
import Link from 'next/link';
import * as appActions from '../redux/actions/app'

const CardWaybill = React.memo((props) => {
    const classes = cardWaybillStyle();
    const { element, setList, idx, list } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showLoad } = props.appActions;
    const statusColor = {
        'обработка': 'orange',
        'принят': 'green'
    }
    return (
            <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <Link href='/waybill/[id]' as={`/waybill/${element._id}`}>
                    <CardActionArea>
                        <CardContent>
                            <div className={classes.listStatus} style={{width: 'auto'}}>
                                <div className={classes.status} style={{background: statusColor[element.status]}}>{element.status}</div>
                            </div>
                            <div className={classes.column}>
                                <div className={classes.row}>
                                    <div className={classes.number}>{element.number}</div>&nbsp;
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Время подачи:&nbsp;</div>
                                    <div className={classes.value}>{pdDDMMYYHHMM(element.createdAt)}</div>
                                </div>
                                {
                                    element.acceptSpecialist?
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Подтверждение специалиста:&nbsp;</div>
                                            <div className={classes.value}>{pdDDMMYYHHMM(element.acceptSpecialist)}</div>
                                        </div>
                                        :
                                        null

                                }
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Заявка:&nbsp;</div>
                                    <div className={classes.value}>{element.application.number}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Снабженец:&nbsp;</div>
                                    <div className={classes.value}>{element.supplier.name}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Специалист:&nbsp;</div>
                                    <div className={classes.value}>{element.specialist.name}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Продавец:&nbsp;</div>
                                    <div className={classes.value}>{element.seller}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Сумма:&nbsp;</div>
                                    <div className={classes.column}>
                                        {
                                            element.amount.map((amount, idx) =>
                                                <div key={idx} className={classes.value}>{`${amount.value} ${amount.name}`}</div>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions>
                    {
                        element.status==='обработка'&&['admin', 'менеджер', 'снабженец'].includes(profile.role)?
                            <Button size='small' color='primary' onClick={()=>{
                                const action = async() => {
                                    await deleteWaybill([element._id])
                                    list.splice(idx, 1);
                                    setList([...list])
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }}>
                                Удалить
                            </Button>
                            :
                            null
                    }
                    {
                        'обработка'!==element.status ?
                            <Button size='small' color='primary' onClick={async () => {
                                await showLoad(true)
                                window.open(((await getUnloadingWaybill({
                                    _id: element._id,
                                })).unloadingWaybill).data, '_blank');
                                await showLoad(false)
                            }}>
                                Выгрузить
                            </Button>
                            :
                            null
                    }
                </CardActions>
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
        appActions: bindActionCreators(appActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardWaybill)