import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as userActions from '../../redux/actions/user'
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

const Sign =  React.memo(
    (props) =>{
        let [loginEnter, setLoginEnter] = useState('');
        let [passEnter, setPassEnter] = useState('');
        let [errorPass, setErrorPass] = useState(false);
        let [errorPassRepeat, setErrorPassRepeat] = useState(false);
        let handlePassEnter =  (event) => {
            setPassEnter(event.target.value)
        };
        let handleLoginEnter =  (event) => {
            setLoginEnter(event.target.value)
        };
        let [loginReg, setLoginReg] = useState('');
        let [passReg, setPassReg] = useState('');
        let [passRepeatReg, setPassRepeatReg] = useState('');
        let handlePassReg =  (event) => {
            setPassReg(event.target.value)
            if(event.target.value!==passRepeatReg){
                setErrorPassRepeat(true)
            }
            else {
                setErrorPassRepeat(false)
            }
            if(event.target.value.length<8){
                setErrorPass(true)
            }
            else {
                setErrorPass(false)
            }
        };
        let handlePassRepeatReg =  (event) => {
            setPassRepeatReg(event.target.value)
            if(event.target.value!==passReg){
                setErrorPassRepeat(true)
            }
            else {
                setErrorPassRepeat(false)
            }
        };
        let handleLoginReg =  (event) => {
            setLoginReg(event.target.value)
        };

        let [type, setType] = useState('enter');
        let [hide, setHide] = useState('password');
        let handleHide =  () => {
            setHide(!hide)
        };
        const { error } = props.user;
        const { isMobileApp } = props.app;
        const { showMiniDialog } = props.mini_dialogActions;
        const { signin, signup } = props.userActions;
        const { classes } = props;
        const width = isMobileApp? (window.innerWidth-112) : 500
        return (
            <div className={classes.main}>
            {type==='enter'?
                <>
                <TextField
                    style={{width: width}}
                    id='standard-search'
                    label='Логин'
                    type='login'
                    className={classes.textField}
                    margin='normal'
                    value={loginEnter}
                    onChange={handleLoginEnter}
                />
                <br/>
                <FormControl style={{width: width}} className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">Пароль</InputLabel>
                    <Input
                        id="adornment-password"
                        type={hide ? 'password' : 'text' }
                        value={passEnter}
                        onChange={handlePassEnter}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle password visibility" onClick={handleHide}>
                                    {hide ? <VisibilityOff />:<Visibility />  }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <br/>
                {error?
                    <div style={{width: width}} className={classes.error_message}>Неверный логин или пароль</div>
                    :
                    null
                }
                <div>
                    {/*<div style={{width: width}} className={classes.message} onClick={()=>{setType('reg')}}>Зарегистрироваться</div>*/}
                    <div style={{width: width}}>Если забыли пароль или хотите зарегестрироваться, то перейдите в разде "Контакты" свяжитесь с нашими специалистами.</div>
                </div>
                <br/>
                <div>
                    <Button variant="contained" color="primary" onClick={()=>{
                        if(loginEnter.length>0&&passEnter.length>0)
                            signin({login: loginEnter, password: passEnter})
                    }} className={classes.button}>
                        Войти
                    </Button>
                    <Button variant="contained" color="secondary" onClick={()=>{showMiniDialog(false);}} className={classes.button}>
                        Закрыть
                    </Button>
                </div>
                </>
            :
                <>
                <TextField
                    id='standard-search'
                    label='Логин'
                    type='login'
                    className={classes.textField}
                    margin='normal'
                    value={loginReg}
                    onChange={handleLoginReg}
                    style={{width: width}}
                />
                <br/>
                <FormControl style={{width: width}} className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">Придумайте пароль</InputLabel>
                    <Input
                        id="adornment-password"
                        type={hide ? 'password' : 'text' }
                        value={passReg}
                        onChange={handlePassReg}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle password visibility" onClick={handleHide}>
                                    {hide ? <VisibilityOff />:<Visibility />  }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <br/>
                <FormControl style={{width: width}} className={classNames(classes.margin, classes.textField)}>
                    <InputLabel htmlFor="adornment-password">Повторите пароль</InputLabel>
                    <Input
                        id="adornment-password"
                        type={hide ? 'password' : 'text' }
                        value={passRepeatReg}
                        onChange={handlePassRepeatReg}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="Toggle password visibility" onClick={handleHide}>
                                    {hide ? <VisibilityOff />:<Visibility />  }
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <br/>
                {error?
                    <div style={{width: width}} className={classes.error_message}>Неверный логин или пароль</div>
                    :
                    null
                }
                {errorPass?
                    <div style={{width: width}} className={classes.error_message}>Недостаточная длина пароля</div>
                    :
                    null
                }
                {errorPassRepeat?
                    <div style={{width: width}} className={classes.error_message}>Пароли не совпадают</div>
                    :
                    null
                }
                <br/>
                <div>
                    <Button variant="contained" color="primary" onClick={()=>{if(!errorPass&&!errorPassRepeat)signup({login: loginReg, password: passReg})}} className={classes.button}>
                        Зарегистрироваться
                    </Button>
                    <Button variant="contained" color="secondary" onClick={()=>{showMiniDialog(false);}} className={classes.button}>
                        Закрыть
                    </Button>
                </div>
                </>
            }
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

Sign.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(Sign));