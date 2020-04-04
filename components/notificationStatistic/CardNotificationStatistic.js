import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import cardAdsStyle from '../../src/styleMUI/notificationStatistic/cardNotificationStatistic'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import { addNotificationStatistic } from '../../src/gql/notificationStatisticAzyk'
import TextField from '@material-ui/core/TextField';
import { bindActionCreators } from 'redux'
import * as snackbarActions from '../../redux/actions/snackbar'
import {pdDDMMYYHHMM} from '../../src/lib'
import Confirmation from '../dialog/Confirmation'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'


const NotificationStatistic = React.memo((props) => {
    const classes = cardAdsStyle();
    const { element, setList } = props;
    const { isMobileApp } = props.app;
    //addCard
    let [title, setTitle] = useState(element?element.title:'');
    let handleTitle =  (event) => {
        setTitle(event.target.value)
    };
    let [text, setText] = useState(element?element.text:'');
    let handleText =  (event) => {
        setText(event.target.value)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    return (
          <> {
                !element ?
                    <Card className={classes.card}>
                        <CardContent>
                                <TextField
                                    label='Заголовок'
                                    value={title}
                                    className={classes.input}
                                    onChange={handleTitle}
                                    inputProps={{
                                        'aria-label': 'description',
                                    }}
                                />
                                <br/>
                                <br/>
                                <TextField
                                    label='Текст'
                                    value={text}
                                    className={classes.input}
                                    onChange={handleText}
                                    inputProps={{
                                        'aria-label': 'description',
                                    }}
                                />
                            </CardContent>
                        <CardActions>
                            <Button onClick={async()=> {
                                if (text.length > 0 && title.length > 0) {
                                    setTitle('')
                                    setText('')
                                    const action = async() => {
                                        let res = (await addNotificationStatistic({text: text, title: title})).notificationStatistics
                                        setList(res)
                                    }
                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                } else {
                                    showSnackBar('Заполните все поля')
                                }
                            }
                            } size='small' color='primary'>
                                Отправить
                            </Button>
                        </CardActions>
                    </Card>
                    :
                    <Card className={classes.card}>
                        <CardContent>
                            <CardActionArea>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Создан:&nbsp;</div>
                                    <div className={classes.value}>{pdDDMMYYHHMM(element.createdAt)}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Заголовок:&nbsp;</div>
                                    <div className={classes.value}>{title}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Текст:&nbsp;</div>
                                    <div className={classes.value}>{text}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Доставлено:&nbsp;</div>
                                    <div className={classes.value}>{element.delivered}</div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Провалено:&nbsp;</div>
                                    <div className={classes.value}>{element.failed}</div>
                                </div>
                            </CardActionArea>
                        </CardContent>
                    </Card>
            }</>
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
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationStatistic)