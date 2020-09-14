import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import cardBalanceStyle from '../src/styleMUI/card'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'

const CardBalance = React.memo((props) => {
    const classes = cardBalanceStyle();
    const { element } = props;
    const { isMobileApp } = props.app;
    return (
            <Card className={isMobileApp?classes.cardM:classes.cardD}>
                <CardActionArea>
                    <CardContent>
                        <div className={classes.column}>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Снабженец:&nbsp;</div>
                                <div className={classes.value}>{element.supplier.name}</div>
                            </div>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Сумма:&nbsp;</div>
                                <div className={classes.column}>
                                    {
                                        element.amount.map((amount, idx) =>
                                            <div key={idx} className={classes.value}>{`${amount.value} ${amount.name}`}</div>
                                        )
                                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(CardBalance)