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
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Confirmation from '../../components/dialog/Confirmation'

const CardOrganization = React.memo((props) => {
    const classes = cardOrganizationStyle();
    const { element } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    let [status, setStatus] = useState(element.user.status);
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            <CardActionArea>
                <Link href='/client/[id]' as={`/client/${element.user._id}`}>
                    <CardContent className={classes.line}>
                        <label htmlFor='contained-button-file'>
                            <LazyLoadImage
                                placeholderSrc='/static/add.png'
                                effect='blur'
                                className={classes.media}
                                src={element.image}
                                alt={element.name}
                            />
                        </label>
                        <div>
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
                                <div className={classes.value}>
                                    {element.user.phone}
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
                    profile.role === 'admin' ?
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