import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardCashConsumableStyle from '../src/styleMUI/card'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { getUnloadingCashConsumable} from '../src/gql/cashConsumable'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import { pdDDMMYYHHMM } from '../src/lib'
import Link from 'next/link';
import * as appActions from '../redux/actions/app'

const CardCashConsumable = React.memo((props) => {
    const classes = cardCashConsumableStyle();
    const { element } = props;
    const { isMobileApp } = props.app;
    const { showLoad } = props.appActions;
    return (
            <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <Link href='/cashconsumable/[id]' as={`/cashconsumable/${element._id}`}>
                    <CardActionArea>
                        <CardContent>
                            <div className={classes.column}>
                                <div className={classes.row}>
                                    <div className={classes.number}>{element.number}</div>&nbsp;
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Снабженец:&nbsp;</div>
                                    <div className={classes.value}>{element.supplier.name}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Дата выплаты:&nbsp;</div>
                                    <div className={classes.value}>{pdDDMMYYHHMM(element.createdAt)}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Сумма:&nbsp;</div>
                                    <div className={classes.value}>{`${element.amount} ${element.currencyType}`}</div>
                                </div>
                            </div>
                        </CardContent>
                    </CardActionArea>
                </Link>
                <CardActions>
                    {
                        'обработка' !== element.status ?
                            <Button size='small' color='primary' onClick={async () => {
                                await showLoad(true)
                                window.open(((await getUnloadingCashConsumable({
                                    _id: element._id,
                                })).unloadingCashConsumable).data, '_blank');
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

export default connect(mapStateToProps, mapDispatchToProps)(CardCashConsumable)