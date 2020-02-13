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
    const { element, setList } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    let [target, setTarget] = useState(element?element.target:0);
    let [bonus1, setBonus1] = useState(element?element.bonus:0);
    return (
        <Card className={isMobileApp?classes.cardM:classes.cardD}>
            <CardActionArea>
                <CardContent className={classes.line}>
                    <Link href='/organization/[id]' as={`/organization/${element.organization._id}`}>
                        <img
                            className={classes.media}
                            src={element.organization.image}
                            alt={element.organization.name}
                        />
                    </Link>
                    <div>
                        <Link href='/organization/[id]' as={`/organization/${element.organization._id}`}>
                            <h3 className={classes.input}>
                                {element.organization.name}
                            </h3>
                        </Link>
                        {
                            ['организация', 'менеджер', 'admin'].includes(profile.role)?
                                <>
                                <TextField
                                    type={isMobileApp?'number':'text'}
                                    style={{width: '100%'}}
                                    label='Цель'
                                    value={target}
                                    className={classes.input}
                                    onChange={(event)=>{setTarget((event.target.value))}}
                                    inputProps={{
                                        'aria-label': 'description',
                                    }}
                                />
                                <br/>
                                <TextField
                                    type={isMobileApp?'number':'text'}
                                    style={{width: '100%'}}
                                    label='Бонус'
                                    value={bonus1}
                                    className={classes.input}
                                    onChange={(event)=>{setBonus1((event.target.value))}}
                                    inputProps={{
                                        'aria-label': 'description',
                                    }}
                                />
                                <br/>
                                </>
                                :
                                <>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>
                                        Цель:&nbsp;
                                    </div>
                                    <div className={classes.value}>
                                        {element.target}&nbsp;сом
                                    </div>
                                </div>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>
                                        Бонус:&nbsp;
                                    </div>
                                    <div className={classes.value}>
                                        {element.bonus}&nbsp;сом
                                    </div>
                                </div>
                                </>
                        }
                    </div>
                </CardContent>
            </CardActionArea>
                {
                    ['организация', 'менеджер', 'admin'].includes(profile.role) ?
                        <CardActions>
                            <Button onClick={async()=>{
                                const action = async() => {
                                    const list = (await setBonus({_id: element._id, target: checkInt(target), bonus: checkInt(bonus1)})).bonuses
                                    setList(list)
                                }
                                setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                showMiniDialog(true)
                            }} size='small' color='primary'>
                                Сохранить
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

export default connect(mapStateToProps, mapDispatchToProps)(CardBonus)