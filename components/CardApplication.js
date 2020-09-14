import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardApplicationStyle from '../src/styleMUI/card'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { deleteApplication, getUnloadingApplication} from '../src/gql/application'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import Confirmation from './dialog/Confirmation'
import { pdDDMMYYHHMM, differenceDates } from '../src/lib'
import Link from 'next/link';
import * as appActions from '../redux/actions/app'

const CardApplication = React.memo((props) => {
    const classes = cardApplicationStyle();
    const { element, setList, idx, list } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showLoad } = props.appActions;
    const statusColor = {
        'обработка': 'orange',
        'принят': 'blue',
        'выполнен': 'green',
        'отмена': 'red'
    }
    const difference = differenceDates(new Date(element.term), new Date())
    return (
            <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <Link href='/application/[id]' as={`/application/${element._id}`}>
                    <CardActionArea>
                        <CardContent>
                            <div className={classes.listStatus} style={{width: ['обработка', 'отмена'].includes(element.status)?140:'auto'}}>
                                <div className={classes.status} style={{background: statusColor[element.status]}}>{element.status}</div>
                                {
                                    ['обработка', 'отмена'].includes(element.status)?
                                        element.routes.map((route, idx) =>
                                            <div key={`${element._id}${idx}`} className={classes.status} style={{background: route.cancel?'red':route.confirmation?'green':'white'}}>
                                                {route.role}<br/>
                                                {route.cancel?pdDDMMYYHHMM(route.cancel):route.confirmation?pdDDMMYYHHMM(route.confirmation):null}
                                            </div>
                                        )
                                        :
                                        null
                                }
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
                                    element.term?
                                        <div className={classes.row} style={{color: element.status==='выполнен'?'black':difference<0?'red':difference<1?'yellow':'green'}}>
                                            <div className={classes.nameField}>Срок:&nbsp;</div>
                                            <div className={classes.value}>{pdDDMMYYHHMM(element.term)}</div>
                                        </div>
                                        :
                                        null

                                }
                                {
                                    element.dateClose?
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>Время закрытия:&nbsp;</div>
                                            <div className={classes.value}>{pdDDMMYYHHMM(element.dateClose)}</div>
                                        </div>
                                        :
                                        null

                                }
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Категория:&nbsp;</div>
                                    <div className={classes.value}>{element.category.name}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Подразделение:&nbsp;</div>
                                    <div className={classes.value}>{element.division.name}</div>
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
                        element.status==='обработка'&&['admin', 'менеджер', 'специалист', 'снабженец'].includes(profile.role)?
                            <Button size='small' color='primary' onClick={()=>{
                                const action = async() => {
                                    await deleteApplication([element._id])
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
                        !['обработка', 'отмена'].includes(element.status)?
                            <Button size='small' color='primary' onClick={async()=>{
                                await showLoad(true)
                                window.open(((await getUnloadingApplication({
                                    _id: element._id,
                                })).unloadingApplication).data, '_blank');
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

export default connect(mapStateToProps, mapDispatchToProps)(CardApplication)