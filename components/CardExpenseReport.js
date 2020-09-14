import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardExpenseReportStyle from '../src/styleMUI/card'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { deleteExpenseReport, getUnloadingExpenseReport} from '../src/gql/expenseReport'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import Confirmation from './dialog/Confirmation'
import { pdDDMMYYHHMM } from '../src/lib'
import Link from 'next/link';
import * as appActions from '../redux/actions/app'

const CardExpenseReport = React.memo((props) => {
    const classes = cardExpenseReportStyle();
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
                <Link href='/expensereport/[id]' as={`/expensereport/${element._id}`}>
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
                                    element.acceptHead?
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Подтверждение начальника отдела:&nbsp;</div>
                                            <div className={classes.value}>{pdDDMMYYHHMM(element.acceptHead)}</div>
                                        </div>
                                        :
                                        null

                                }
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Снабженец:&nbsp;</div>
                                    <div className={classes.value}>{element.supplier.name}</div>
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
                                    await deleteExpenseReport([element._id])
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
                        'обработка' !== element.status ?
                            <Button size='small' color='primary' onClick={async () => {
                                await showLoad(true)
                                window.open(((await getUnloadingExpenseReport({
                                    _id: element._id,
                                })).unloadingExpenseReport).data, '_blank');
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

export default connect(mapStateToProps, mapDispatchToProps)(CardExpenseReport)