import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import cardOrganizationStyle from '../../src/styleMUI/organization/cardOrganization.js'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { onoffOrganization, deleteOrganization, restoreOrganization } from '../../src/gql/organization'
import Confirmation from '../../components/dialog/Confirmation'


const CardOrganization = React.memo((props) => {
    const classes = cardOrganizationStyle();
    const { element, setList, organization, list } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    let [status, setStatus] = useState(element!==undefined?element.status:'');
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <CardActionArea>
                   <div className={classes.line}>
                        <img
                            className={classes.mediaO}
                            src={element.image}
                            alt={element.name}
                        />
                        <h3 className={classes.input}>
                            {element.name}
                        </h3>
                    </div>
                </CardActionArea>
                {
                    element.del!=='deleted'&&element.name!=='AZYK.STORE'&&profile.role === 'admin'&&organization ?
                        <CardActions>
                            <Button onClick={async()=>{
                                        const action = async() => {
                                            await onoffOrganization([element._id])
                                            setStatus(status==='active'?'deactive':'active')
                                        }
                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    }} size='small' color='primary'>
                                {status==='active'?'Отключить':'Включить'}
                            </Button>
                                    <Button onClick={async()=>{
                                        const action = async() => {
                                            const list = (await deleteOrganization([element._id])).organizations
                                            setList(list)
                                        }
                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    }} size='small' color='primary'>
                                        Удалить
                                    </Button>
                        </CardActions>
                        :
                        null
                }
            {
                element.del==='deleted'&&profile.role==='admin'?
                    <CardActions>
                        <Button onClick={async()=>{
                            const action = async() => {
                                await restoreOrganization([element._id])
                                let _list = [...list]
                                _list.splice(_list.indexOf(element), 1)
                                setList(_list)
                            }
                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                            showMiniDialog(true)
                        }} size='small' color='primary'>
                            Восстановить
                        </Button>
                    </CardActions>
                    :
                    null
            }
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