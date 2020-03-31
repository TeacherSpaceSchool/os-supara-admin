import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import cardRouteStyle from '../../src/styleMUI/route/cardRoute'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import { deleteRoute } from '../../src/gql/route'
import Link from 'next/link';
import { pdDDMMYY } from '../../src/lib'
import Confirmation from '../dialog/Confirmation'

const CardOrder = React.memo((props) => {
    const classes = cardRouteStyle();
    const { element, setList } = props;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { profile } = props.user;
    const statusColor = {
        'создан': 'orange',
        'выполняется': 'blue',
        'выполнен': 'green',
    }
    return (
        <Card className={classes.card}>
            <Link href='/route/[id]' as={`/route/${element!==undefined?element._id:'new'}`}>
                <CardActionArea>
                    <CardContent className={classes.column}>
                        <div className={classes.row}>
                            <div className={classes.nameField}>Номер:&nbsp;</div>
                            <div className={classes.value}>{element.number}</div>
                            <div className={classes.status} style={{background: statusColor[element.status]}}>{element.status}</div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>Дата:&nbsp;</div>
                            <div className={classes.value}>{pdDDMMYY(element.dateStart)}</div>
                        </div>
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
                        <div className={classes.row}>
                            <div className={classes.nameField}>Организация:&nbsp;</div>
                            <div className={classes.value}>{element.organization?element.organization.name:'AZYK.STORE'}</div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>Экспедитор:&nbsp;</div>
                            <div className={classes.value}>{element.employment.name}</div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>Заказы:&nbsp;</div>
                            <div className={classes.column}>
                                {element.invoices.map((invoice, idx)=> idx<4?<div key={idx} className={classes.value}>{invoice.number}</div>:idx===4?'...':null)}
                            </div>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {
                    ['организация', 'менеджер', 'admin'].includes(profile.role)&&element.status==='создан'?
                        <Button onClick={async()=>{
                            const action = async() => {
                                setList((await deleteRoute([element._id])).routes)
                            }
                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            Удалить
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardOrder)