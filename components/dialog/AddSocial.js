import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as userActions from '../../redux/actions/user'
import { validPhone } from '../../redux/constants/other'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import classNames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import dialogContentStyle from '../../src/styleMUI/dialogContent'

const AddSocial =  React.memo(
    (props) =>{
        let [url, setUrl] = useState('');
        const { isMobileApp } = props.app;
        const { showMiniDialog } = props.mini_dialogActions;
        const { classes, action, idx } = props;
        const width = isMobileApp? (window.innerWidth-126) : 500
        return (
            <div className={classes.main}>
            <TextField
                style={{width: width}}
                id='standard-search'
                label='URL'
                type='login'
                className={classes.textField}
                margin='normal'
                value={url}
                onChange={(event)=>{setUrl(event.target.value)}}
            />
                <br/>
                <div>
                    <Button variant="contained" color="primary" onClick={async()=>{
                       await action(url, idx);
                       showMiniDialog(false);
                    }} className={classes.button}>
                        Сохранить
                    </Button>
                    <Button variant="contained" color="secondary" onClick={()=>{showMiniDialog(false);}} className={classes.button}>
                        Закрыть
                    </Button>
                </div>
            </div>
        );
    }
)

function mapStateToProps (state) {
    return {
        mini_dialog: state.mini_dialog,
        user: state.user,
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        userActions: bindActionCreators(userActions, dispatch),
    }
}

AddSocial.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(AddSocial));