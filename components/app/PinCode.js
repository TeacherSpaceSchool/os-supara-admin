import React, { useState, useRef } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userActions from '../../redux/actions/user'
import { sendPinCode } from '../../src/gql/user'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import dialogContentStyle from '../../src/styleMUI/dialogContent'
import DeleteIcon from '@material-ui/icons/Delete';

const PinCode =  React.memo(
    (props) =>{
        const { classes } = props;
        let [pinCode, setPinCode] = useState('');
        let [colorPinCode, setColorPinCode] = useState('#E67124');
        let [error, setError] = useState(false);
        let handlePinCode =  (event) => {
            if(event.target.value.length<5)
                setPinCode(event.target.value)
        };
        const { setedPinCode } = props.userActions;
        const checkPinCode = async()=> {
            if(pinCode.length===4){
                if(await sendPinCode(pinCode)) {
                    setedPinCode()
                }
                else {
                    setError(true)
                    if (navigator.vibrate || navigator.webkitVibrate || navigator.mozVibrate || navigator.msVibrate)
                        navigator.vibrate(200);
                }
            }
            else
                setError(true)
        }
        const buttonPinCode = async(button)=> {
            if(pinCode.length<4){
                pinCode += button
                if(pinCode.length===4){
                    if(await sendPinCode(pinCode)) {
                        setedPinCode()
                    }
                    else
                        setError(true)
                }
                setPinCode(pinCode)
            }
            else {
                setPinCode(button)
                setError(false)
            }
        }
        const { isMobileApp } = props.app;
        return (
            <Dialog
                open={true}
                fullScreen={true}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'>
                <DialogTitle><center>Введите PIN-код</center></DialogTitle>
                    <DialogContent className={classes.main}>
                        {
                            isMobileApp?
                                <>
                                <div className={classes.row}>
                                    <div className={classes.inputPinCode} style={pinCode.length>0?{background: error?'red':'#E67124'}:{}}/>
                                    <div className={classes.inputPinCode} style={pinCode.length>1?{background: error?'red':'#E67124'}:{}}/>
                                    <div className={classes.inputPinCode} style={pinCode.length>2?{background: error?'red':'#E67124'}:{}}/>
                                    <div className={classes.inputPinCode} style={pinCode.length>3?{background: error?'red':'#E67124'}:{}}/>
                                </div>
                                <br/>
                                <div className={classes.row}>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('1')}}>
                                        1
                                    </Button>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('2')}}>
                                        2
                                    </Button>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('3')}}>
                                        3
                                    </Button>
                                </div>
                                <div className={classes.row}>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('4')}}>
                                        4
                                    </Button>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('5')}}>
                                        5
                                    </Button>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('6')}}>
                                        6
                                    </Button>
                                </div>
                                <div className={classes.row}>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('7')}}>
                                        7
                                    </Button>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('8')}}>
                                        8
                                    </Button>
                                    <Button  style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('9')}}>
                                        9
                                    </Button>
                                </div>
                                <div className={classes.row} style={{alignItems: 'center'}}>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}}/>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{buttonPinCode('0')}}>
                                        0
                                    </Button>
                                    <Button style={{margin: 10, fontSize: '1.25rem'}} onClick={()=>{setPinCode('');setError(false)}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>
                                    </Button>
                                </div>
                                </>
                                :
                                <>
                                <TextField
                                    autoFocus={true}
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
                                <Button variant='contained' color='primary' onClick={checkPinCode} className={classes.button}>
                                    Войти
                                </Button>
                                </>
                        }
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
