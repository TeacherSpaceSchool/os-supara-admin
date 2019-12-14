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
import { onoffClient } from '../../src/gql/client'
import CardActions from '@material-ui/core/CardActions';
import Confirmation from '../../components/dialog/Confirmation'


const CardOrganization = React.memo((props) => {
    const classes = cardOrganizationStyle();
    const { element } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    let [status, setStatus] = useState(element.user?element.user.status:'');
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            <CardActionArea>
                <Link href='/client/[id]' as={`/client/${element._id}`}>
                    <CardContent className={classes.line}>
                        <label htmlFor='contained-button-file'>
                            <img
                                className={classes.media}
                                src={element.image?element.image:'/static/add.png'}
                                alt={element.name}
                            />
                        </label>
                        <div>
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
                                            <div key={idx} className={classes.value}>
                                                {phone}
                                            </div>
                                    )}
                                </div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.nameField}>
                                    Адрес:&nbsp;
                                </div>
                                <div>
                                    {element.address.map((addres, idx)=>
                                        <div key={idx} className={classes.value}>
                                            {addres[0]}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Link>
            </CardActionArea>
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