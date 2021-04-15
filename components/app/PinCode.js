import React, { useState, useEffect, useRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../redux/actions/user'
import { sendPinCode } from '../../src/gql/user'
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import dialogContentStyle from '../../src/styleMUI/dialogContent'

const PinCode =  React.memo(
    (props) =>{
        const { classes } = props;
        let [pinCode, setPinCode] = useState('');
        let [error, setError] = useState(false);
        let handlePinCode =  (event) => {
            if(event.target.value.length<5)
                setPinCode(event.target.value)
        };
        const pinCodeInputRef = useRef(null);
        const { setedPinCode } = props.userActions;
        const checkPinCode = async()=> {
            if(pinCode.length===4){
                if(await sendPinCode(pinCode)) {
                    setedPinCode()
                }
                else
                    setError(true)
            }
            else
                setError(true)
        }
        useEffect(()=>{
            if(process.browser){
                setTimeout(()=>{
                    pinCodeInputRef.current.focus()
                    pinCodeInputRef.current.click()
                }, 100)
            }
        },[process.browser])
        return (
            <Dialog
                open={true}
                fullScreen={true}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'>
                <DialogTitle><center>Введите PIN-код</center></DialogTitle>
                    <DialogContent className={classes.main}>
                        <TextField
                            inputRef={pinCodeInputRef}
                            label='PIN-код'
                            type='number'
                            className={classes.textField}
                            margin='normal'
                            style={{width: 300}}
                            value={pinCode}
                            error={error}
                            helperText={error?'Неверный PIN-код':''}
                            onChange={handlePinCode}
                            onKeyPress={event => {
                                if (event.key === 'Enter') checkPinCode()
                            }}
                        />
                        {error?null:<br/>}
                            <br/>
                            <Button variant="contained" color="primary" onClick={checkPinCode} className={classes.button}>
                                Войти
                            </Button>
                    </DialogContent>
                </Dialog>
        );
    }
)

function mapStateToProps (state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(dialogContentStyle)(PinCode));
