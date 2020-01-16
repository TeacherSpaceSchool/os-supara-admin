import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardOrganizationStyle from '../../src/styleMUI/client/cardClient'
import { connect } from 'react-redux'
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { onoffClient, deleteClient } from '../../src/gql/client'
import { pdDDMMYYHHMM } from '../../src/lib'
import CardActions from '@material-ui/core/CardActions';
import NotificationsActive from '@material-ui/icons/NotificationsActive';
import NotificationsOff from '@material-ui/icons/NotificationsOff';
import Confirmation from '../../components/dialog/Confirmation'


const CardOrganization = React.memo((props) => {
    const classes = cardOrganizationStyle();
    const { element, setList } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    let [status, setStatus] = useState(element.user?element.user.status:'');
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            <Link href='/client/[id]' as={`/client/${element._id}`}>
            <CardActionArea>
                    <CardContent className={classes.line}>
                        {
                            profile.role==='admin'?
                                element.notification?
                                    <NotificationsActive color='primary' className={classes.notification}/>
                                    :
                                    <NotificationsOff color='secondary' className={classes.notification}/>
                                :
                                null
                        }
                        <label htmlFor='contained-button-file'>
                            <img
                                className={classes.media}
                                src={element.image?element.image:'/static/add.png'}
                                alt={element.name}
                            />
                        </label>
                        <div style={{width: 'calc(100% - 70px)'}}>
                            {
                                element.organization?
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>
                                            Организация:&nbsp;
                                        </div>
                                        <div className={classes.value}>
                                            {element.organization.name}
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                            <div className={classes.row}>
                                <div className={classes.nameField}>
                                    Имя:&nbsp;
                                </div>
                                <div className={classes.value}>
                                    {element.name}
                                </div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.nameField}>
                                    Телефон:&nbsp;
                                </div>
                                <div>
                                    {element.phone.map((phone, idx)=>
                                        idx<4?
                                            <div key={`phone${idx}`} className={classes.value}>
                                                {phone}
                                            </div>
                                            :
                                            idx===4?
                                                '...'
                                                :
                                                null
                                    )}
                                </div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.nameField}>
                                    Адрес:&nbsp;
                                </div>
                                <div>
                                    {element.address.map((addres, idx)=>
                                        idx<4?
                                            <div key={`addres${idx}`} className={classes.value}>
                                                {`${addres[2]?`${addres[2]}, `:''}${addres[0]}`}
                                            </div>
                                            :
                                            idx===4?
                                                '...'
                                                :
                                                null
                                    )}
                                </div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.nameField}>
                                    Регистрация:&nbsp;
                                </div>
                                <div className={classes.value}>
                                    {pdDDMMYYHHMM(new Date(element.createdAt))}
                                </div>
                            </div>
                            {
                                element.lastActive?
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>
                                            Активность:&nbsp;
                                        </div>
                                        <div className={classes.value}>
                                            {pdDDMMYYHHMM(new Date(element.lastActive))}
                                        </div>
                                    </div>
                                    :
                                    null
                            }
                        </div>
                    </CardContent>
            </CardActionArea>
            </Link>
            <CardActions>
                {
                    element.user&&profile.role === 'admin' ?
                        <Button onClick={async()=>{
                            const action = async() => {
                                await onoffClient([element._id])
                                setStatus(status==='active'?'deactive':'active')
                            }
                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            {status==='active'?'Отключить':'Включить'}
                        </Button>
                        :
                        null
                }
                {
                    (!element.user&&element.organization&&profile.organization===element.organization._id&&['организация', 'менеджер', 'агент'].includes(profile.role))
                    ||profile.role==='admin' ?
                        <Button onClick={async()=>{
                            const action = async() => {
                                setList((await deleteClient([element._id])).clients)
                            }
                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
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
        app: state.app,
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardOrganization)