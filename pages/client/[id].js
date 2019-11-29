import Head from 'next/head';
import React, { useState } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getClient } from '../../src/gql/client'
import organizationStyle from '../../src/styleMUI/organization/organization'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as userActions from '../../redux/actions/user'
import dynamic from 'next/dynamic'
import { onoffClient, setClient } from '../../src/gql/client'
import Add from '@material-ui/icons/Done';
import Remove from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Confirmation = dynamic(
    () => import('../../components/dialog/Confirmation')
)

const Client = React.memo((props) => {
    const classes = organizationStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    let [status, setStatus] = useState(data.client!==null?data.client.user.status:'');
    let [name, setName] = useState(data.client!==null?data.client.name:'');
    let [address, setAddress] = useState(data.client!==null?data.client.address:[]);
    let [email, setEmail] = useState(data.client!==null?data.client.email:'');
    let [phone, setPhone] = useState(data.client!==null?data.client.user.phone:'');
    let [newAddress, setNewAddress] = useState('');
    let addAddress = ()=>{
        address = [...address, newAddress]
        setAddress(address)
        setNewAddress('')
    };
    let editAddress = (event, idx)=>{
        address[idx] = event.target.value
        setAddress([...address])
    };
    let deleteAddress = (idx)=>{
        address.splice(idx, 1);
        setAddress([...address])
    };
    let [info, setInfo] = useState(data.client!==null?data.client.info:'');
    let [preview, setPreview] = useState(data.client!==null?data.client.image:'');
    let [image, setImage] = useState(undefined);
    let handleChangeImage = ((event) => {
        setImage(event.target.files[0])
        setPreview(URL.createObjectURL(event.target.files[0]))
    })
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { logout } = props.userActions;
    let [newPass, setNewPass] = useState('');
    let handleNewPass =  (event) => {
        setNewPass(event.target.value)
    };
    let [hide, setHide] = useState('password');
    let handleHide =  () => {
        setHide(!hide)
    };
    return (
        <App filters={data.filterSubCategory} sorts={data.sortSubCategory} pageName={data.client!==null?data.client.name:'Ничего не найдено'}>
            <Head>
                <title>{data.client!==null?data.client.name:'Ничего не найдено'}</title>
            </Head>
            <Card className={classes.page}>
                <CardActions className={isMobileApp?classes.column:classes.row} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    {data.client!==null?
                            profile.role==='admin'||profile._id===data.client.user._id?
                                <>
                                <label htmlFor='contained-button-file'>
                                    <LazyLoadImage
                                        placeholderSrc='/static/add.png'
                                        effect='blur'
                                        className={classes.media}
                                        src={preview}
                                        alt={'Добавить'}
                                    />
                                </label>
                                <div>
                                        <TextField
                                            label='Имя'
                                            value={name}
                                            className={isMobileApp?classes.inputM:classes.inputD}
                                            onChange={(event)=>{setName(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                        />
                                        <Input
                                            placeholder='Новый пароль'
                                            type={hide ? 'password' : 'text' }
                                            value={newPass}
                                            onChange={handleNewPass}
                                            className={isMobileApp?classes.inputM:classes.inputD}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="Toggle password visibility" onClick={handleHide}>
                                                        {hide ? <VisibilityOff />:<Visibility />  }
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                        <InputLabel>Добавить адрес</InputLabel>
                                        <Input
                                            value={newAddress}
                                            onChange={(event)=>{setNewAddress(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={()=>{
                                                            addAddress()
                                                        }}
                                                        aria-label='toggle password visibility'
                                                    >
                                                        <Add/>
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                    />
                                    </FormControl>
                                    {address?address.map((element, idx)=>
                                        <FormControl key={idx} className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Адрес</InputLabel>
                                            <Input
                                                placeholder='Адрес'
                                                value={element}
                                                className={isMobileApp?classes.inputM:classes.inputD}
                                                onChange={(event)=>{editAddress(event, idx)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={()=>{
                                                                deleteAddress(idx)
                                                            }}
                                                            aria-label='toggle password visibility'
                                                        >
                                                            <Remove/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    ):null}
                                    <TextField
                                        label='email'
                                        value={email}
                                        className={isMobileApp?classes.inputM:classes.inputD}
                                        onChange={(event)=>{setEmail(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    <TextField
                                        label='Телефон'
                                        value={phone}
                                        className={isMobileApp?classes.inputM:classes.inputD}
                                        onChange={(event)=>{setPhone(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    <TextField
                                        multiline={true}
                                        label='Информация'
                                        value={info}
                                        className={isMobileApp?classes.inputM:classes.inputD}
                                        onChange={(event)=>{setInfo(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    <div className={classes.row}>
                                        <Button onClick={async()=>{
                                            let editElement = {_id: data.client.user._id}
                                            if(image!==undefined)editElement.image = image
                                            if(name.length>0&&name!==data.client.name)editElement.name = name
                                            if(address.length>0&&address!==data.client.address)editElement.address = address
                                            if(email.length>0&&email!==data.client.email)editElement.email = email
                                            if(phone.length>0&&phone!==data.client.phone)editElement.phone = phone
                                            if(info.length>0&&info!==data.client.info)editElement.info = info
                                            if(newPass.length>0)editElement.newPass = newPass
                                            if(phone.length>0)editElement.phone = phone
                                            const action = async() => {
                                                await setClient(editElement)
                                            }
                                            setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }} size='small' color='primary'>
                                            Сохранить
                                        </Button>
                                        {profile.role==='admin'?
                                            <Button onClick={async()=>{
                                                const action = async() => {
                                                    await onoffClient([data.client._id])
                                                    setStatus(status==='active'?'deactive':'active')
                                                }
                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }} size='small' color='primary'>
                                                {status==='active'?'Отключить':'Включить'}
                                            </Button>
                                            :
                                            <Button onClick={()=>{
                                                const action = async() => {
                                                    logout()
                                                }
                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }} size='small' color='primary'>
                                                Выйти
                                            </Button>
                                        }
                                    </div>
                                </div>
                                </>
                                :
                                <>
                                <LazyLoadImage
                                    placeholderSrc='/static/add.png'
                                    effect='blur'
                                    className={classes.media}
                                    src={preview}
                                    alt={name}
                                />
                                <div>
                                    <div className={classes.name}>
                                        {name}
                                    </div>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>
                                            Адрес:&nbsp;
                                        </div>
                                        <div className={classes.column}>
                                            {address?address.map((element, idx)=>
                                                <div className={classes.value} key={idx}>
                                                    {element}
                                                </div>
                                            ):null}
                                        </div>
                                    </div>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>
                                            E-mail:&nbsp;
                                        </div>
                                        <div className={classes.value}>
                                            {email}
                                        </div>
                                    </div>
                                    <div className={classes.row}>
                                        <div className={classes.nameField}>
                                            Телефон:&nbsp;
                                        </div>
                                        <div className={classes.value}>
                                            {phone}
                                        </div>
                                    </div>
                                    <div className={classes.info}>
                                        {info}
                                    </div>
                                </div>
                                </>
                            :
                            'Ничего не найдено'
                            }
                        </CardActions>
                </Card>
            <input
                accept='image/*'
                style={{ display: 'none' }}
                id='contained-button-file'
                type='file'
                onChange={handleChangeImage}
            />
        </App>
    )
})

Client.getInitialProps = async function(ctx) {
    return {
        data: await getClient({_id: ctx.query.id})
    };
};

function mapStateToProps (state) {
    return {
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

export default connect(mapStateToProps, mapDispatchToProps)(Client);