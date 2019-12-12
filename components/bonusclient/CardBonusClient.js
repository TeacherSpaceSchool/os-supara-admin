import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import cardOrganizationStyle from '../../src/styleMUI/bonus/cardBonus'
import { connect } from 'react-redux'
import Link from 'next/link';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { setBonus } from '../../src/gql/bonus'
import Confirmation from '../../components/dialog/Confirmation'
import { checkInt } from '../../src/lib'


const CardBonus = React.memo((props) => {
    const classes = cardOrganizationStyle();
    const { element } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            <CardActionArea>
                <CardContent className={classes.line}>
                     <img
                         className={classes.media}
                         src={ ['организация', 'менеджер', 'агент'].includes(profile.role)?element.client.image:element.bonus.organization.image}
                         alt={element.bonus.organization.name}
                     />
                    <div>
                        {
                            !['организация', 'менеджер', 'агент'].includes(profile.role)?
                                <Link href='/organization/[id]' as={`/organization/${element.bonus.organization._id}`}>
                                    <h3 className={isMobileApp?classes.inputM:classes.inputD}>
                                        {element.bonus.organization.name}
                                    </h3>
                                </Link>
                                :
                                null
                        }
                        <br/>
                             <div className={classes.row}>
                                    <div className={classes.nameField}>
                                        Клиент:&nbsp;
                                    </div>
                                    <Link href='/client/[id]' as={`/client/${element.client.user._id}`}>
                                        <div className={classes.value}>
                                            {element.client.name}
                                        </div>
                                    </Link>
                                </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>
                                Цель:&nbsp;
                            </div>
                            <div className={classes.value}>
                                {element.bonus.target}&nbsp;сом
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>
                                Прогресс:&nbsp;
                            </div>
                            <div className={classes.value}>
                                {element.current}&nbsp;сом
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>
                                Бонус:&nbsp;
                            </div>
                            <div className={classes.value}>
                                {element.addedBonus}&nbsp;сом
                            </div>
                        </div>
                    </div>
                </CardContent>
            </CardActionArea>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardBonus)