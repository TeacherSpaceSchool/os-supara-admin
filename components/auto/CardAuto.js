import React  from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import cardAutoStyle from '../../src/styleMUI/auto/cardAuto'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import Confirmation from '../../components/dialog/Confirmation'
import {deleteAuto} from '../../src/gql/auto';
import Link from 'next/link';

const CardAuto = React.memo((props) => {
    const classes = cardAutoStyle();
    const { element, setList } = props;
    const { isMobileApp } = props.app;
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    return (
           <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <Link href='/auto/[id]' as={`/auto/${element._id}`}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.row}>
                            <div className={classes.nameField}>
                                Номер:&nbsp;
                            </div>
                            <div className={classes.value}>
                                {element.number}
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>
                                Грузоподъемность:&nbsp;
                            </div>
                            <div className={classes.value}>
                                {element.tonnage}&nbsp;кг
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>
                                Кубатура:&nbsp;
                            </div>
                            <div className={classes.value}>
                                {element.size}&nbsp;см³
                            </div>
                        </div>
                        <div className={classes.row}>
                            <div className={classes.nameField}>
                                Организация:&nbsp;
                            </div>
                            <div className={classes.value}>
                                {element.organization.name}
                            </div>
                        </div>
                        {
                            element.employment?
                                <div className={classes.row}>
                                    <div className={classes.nameField}>
                                        Экспедитор:&nbsp;
                                    </div>
                                    <div className={classes.value}>
                                        {element.employment.name}
                                    </div>
                                </div>
                                :null
                        }

                    </CardContent>
                </CardActionArea>
                </Link>
                    {
                        ['организация', 'admin'].includes(profile.role) ?
                            <CardActions>
                                <Button onClick={async()=>{
                                    const action = async() => {
                                        const list = (await deleteAuto([element._id])).autos
                                        setList(list)
                                    }
                                    setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                }} size='small' color='primary'>
                                    Удалить
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

export default connect(mapStateToProps, mapDispatchToProps)(CardAuto)