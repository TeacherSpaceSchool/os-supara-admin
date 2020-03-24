import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import cardSubscriberStyle from '../../src/styleMUI/subscriber/cardSubscriber'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { deleteSubscriber } from '../../src/gql/subscriber'
import { bindActionCreators } from 'redux'
import Confirmation from '../dialog/Confirmation'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'


const NotificationStatistic = React.memo((props) => {
    const classes = cardSubscriberStyle();
    const { element, setList } = props;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    return (
                    <Card className={classes.card}>
                        <CardContent>
                            <CardActionArea>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Дата подписки:&nbsp;</div>
                                    <div className={classes.value}>{element.createdAt}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Номер:&nbsp;</div>
                                    <div className={classes.value}>{element.number}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Подписчик:&nbsp;</div>
                                    <div className={classes.value}>{element.user}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Статус:&nbsp;</div>
                                    <div className={classes.value}>{element.status}</div>
                                </div>
                            </CardActionArea>
                        </CardContent>
                        <CardActions>
                            <Button onClick={async()=> {
                                const action = async() => {
                                    let res = (await deleteSubscriber([element._id])).subscribers
                                    setList(res)
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }} size='small' color='primary'>
                                Удалить
                            </Button>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationStatistic)