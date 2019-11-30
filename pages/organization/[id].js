import Head from 'next/head';
import React, { useState } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getOrganization } from '../../src/gql/organization'
import organizationStyle from '../../src/styleMUI/organization/organization'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { useRouter } from 'next/router'
import Router from 'next/router'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { onoffOrganization, addOrganization, setOrganization, deleteOrganization } from '../../src/gql/organization'
import { getEmployment } from '../../src/gql/employment'
import Add from '@material-ui/icons/Done';
import Remove from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import * as snackbarActions from '../../redux/actions/snackbar'
import Confirmation from '../../components/dialog/Confirmation'

const Organization = React.memo((props) => {
    const classes = organizationStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    const router = useRouter()
    const { showSnackBar } = props.snackbarActions;
    let [statusO, setStatusO] = useState(data.organization!==null?data.organization.status:'');
    let [name, setName] = useState(data.organization!==null?data.organization.name:'');
    let [address, setAddress] = useState(data.organization!==null?data.organization.address:[]);
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
    let [email, setEmail] = useState(data.organization!==null?data.organization.email:[]);
    let [newEmail, setNewEmail] = useState('');
    let addEmail = ()=>{
        email = [...email, newEmail]
        setEmail(email)
        setNewEmail('')
    };
    let editEmail = (event, idx)=>{
        email[idx] = event.target.value
        setEmail([...email])
    };
    let deleteEmail = (idx)=>{
        email.splice(idx, 1);
        setEmail([...email])
    };
    let [phone, setPhone] = useState(data.organization!==null?data.organization.phone:[]);
    let [newPhone, setNewPhone] = useState('');
    let addPhone = ()=>{
        phone = [...phone, newPhone]
        setPhone(phone)
        setNewPhone('')
    };
    let editPhone = (event, idx)=>{
        phone[idx] = event.target.value
        setPhone([...phone])
    };
    let deletePhone = (idx)=>{
        phone.splice(idx, 1);
        setPhone([...phone])
    };
    let [info, setInfo] = useState(data.organization!==null?data.organization.info:'');
    let [preview, setPreview] = useState(data.organization!==null?data.organization.image:'');
    let [image, setImage] = useState(undefined);
    let handleChangeImage = ((event) => {
        setImage(event.target.files[0])
        setPreview(URL.createObjectURL(event.target.files[0]))
    })
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    return (
        <App filters={data.filterSubCategory} sorts={data.sortSubCategory} pageName={data.organization!==null?router.query.id==='new'?'Добавить':data.organization.name:'Ничего не найдено'}>
            <Head>
                <title>{data.organization!==null?router.query.id==='new'?'Добавить':data.organization.name:'Ничего не найдено'}</title>
            </Head>
            <Card className={classes.page}>
                <CardActions className={isMobileApp?classes.column:classes.row} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    {
                        data.organization!==null?
                            profile.role==='admin'||(profile.role==='организация'&&data.employment.organization._id===data.organization._id)?
                                <>
                                <label htmlFor='contained-button-file'>
                                    <img
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
                                    <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                        <InputLabel>Добавить адрес</InputLabel>
                                        <Input
                                            placeholder='Добавить адрес'
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
                                    {address.map((element, idx)=>
                                        <FormControl  key={idx} className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Адрес{idx+1}</InputLabel>
                                            <Input
                                                placeholder='Адрес'
                                                value={element}
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
                                    )}
                                    <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                        <InputLabel>Добавить email</InputLabel>
                                        <Input
                                            placeholder='Добавить email'
                                            value={newEmail}
                                            onChange={(event)=>{setNewEmail(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={()=>{
                                                            addEmail()
                                                        }}
                                                        aria-label='toggle password visibility'
                                                    >
                                                        <Add/>
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    {email.map((element, idx)=>
                                        <FormControl  key={idx} className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Email{idx+1}</InputLabel>
                                            <Input
                                                value={element}
                                                onChange={(event)=>{editEmail(event, idx)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={()=>{
                                                                deleteEmail(idx)
                                                            }}
                                                            aria-label='toggle password visibility'
                                                        >
                                                            <Remove/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    )}
                                    <FormControl className={isMobileApp?classes.inputM:classes.inputD}>
                                        <InputLabel>Добавить телефон</InputLabel>
                                        <Input
                                            placeholder='Добавить телефон'
                                            value={newPhone}
                                            onChange={(event)=>{setNewPhone(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={()=>{
                                                            addPhone()
                                                        }}
                                                        aria-label='toggle password visibility'
                                                    >
                                                        <Add/>
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    </FormControl>
                                    {phone.map((element, idx)=>
                                        <FormControl  key={idx} className={isMobileApp?classes.inputM:classes.inputD}>
                                            <InputLabel>Телефон{idx+1}</InputLabel>
                                            <Input
                                                value={element}
                                                onChange={(event)=>{editPhone(event, idx)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            onClick={()=>{
                                                                deletePhone(idx)
                                                            }}
                                                            aria-label='toggle password visibility'
                                                        >
                                                            <Remove/>
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        </FormControl>
                                    )}
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
                                        {
                                            router.query.id==='new'?
                                                <Button onClick={async()=>{
                                                    if (image!==undefined&&name.length>0&&email.length>0&&address.length>0&&phone.length>0&&info.length>0) {
                                                        const action = async() => {
                                                            await addOrganization({image: image, name: name, address: address, email: email, phone: phone, info: info})
                                                            Router.push('/organizations')
                                                        }
                                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    } else {
                                                        showSnackBar('Заполните все поля')
                                                    }
                                                }} size='small' color='primary'>
                                                    Добавить
                                                </Button>
                                                :
                                                <>
                                                <Button onClick={async()=>{
                                                    let editElement = {_id: data.organization._id}
                                                    if(image!==undefined)editElement.image = image
                                                    if(name.length>0&&name!==data.organization.name)editElement.name = name
                                                    if(address.length>0&&address!==data.organization.address)editElement.address = address
                                                    if(email.length>0&&email!==data.organization.email)editElement.email = email
                                                    if(phone.length>0&&phone!==data.organization.phone)editElement.phone = phone
                                                    if(info.length>0&&info!==data.organization.info)editElement.info = info
                                                    const action = async() => {
                                                        await setOrganization(editElement)
                                                    }
                                                    setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                    showMiniDialog(true)
                                                }} size='small' color='primary'>
                                                    Сохранить
                                                </Button>
                                                {profile.role==='admin'?
                                                    <>
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            await onoffOrganization([data.organization._id])
                                                            setStatusO(statusO==='active'?'deactive':'active')
                                                        }
                                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        {statusO==='active'?'Отключить':'Включить'}
                                                    </Button>
                                                    <Button onClick={async()=>{
                                                        const action = async() => {
                                                            await deleteOrganization([data.organization._id])
                                                            Router.push('/organizations')
                                                        }
                                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        Удалить
                                                    </Button>
                                                    </>
                                                    :
                                                    null
                                                }
                                                </>
                                        }
                                    </div>
                                </div>
                                </>
                                :
                                router.query.id==='new'?
                                    'Ничего не найдено'
                                    :
                                    <>
                                    <img
                                        className={classes.media}
                                        src={preview}
                                        alt={name}
                                    />
                                    <div>
                                        <div className={classes.name}>
                                            {name}
                                        </div>
                                        <br/>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>
                                                Адрес:&nbsp;
                                            </div>
                                            <div className={classes.column}>
                                                {address.map((element, idx)=>
                                                    <div key={idx} className={classes.value}>
                                                        {element}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>
                                                Телефон:&nbsp;
                                            </div>
                                            <div className={classes.column}>
                                                {phone.map((element, idx)=>
                                                    <a href={`tel:${element}`} key={idx} className={classes.value}>
                                                        {element}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className={classes.row}>
                                            <div className={classes.nameField}>
                                                E-mail:&nbsp;
                                            </div>
                                            <div className={classes.column}>
                                                {email.map((element, idx)=>
                                                    <a href={`mailto:${element}`} key={idx} className={classes.value}>
                                                        {element}
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <br/>
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

Organization.getInitialProps = async function(ctx) {
    return {
        data: {
            ...ctx.store.getState().user.authenticated&&['организация', 'менеджер'].includes(ctx.store.getState().user.profile.role)?await getEmployment({_id: ctx.store.getState().user.profile._id}):{},
            ...ctx.query.id!=='new'?await getOrganization({_id: ctx.query.id}):{organization:{name: '',image: '/static/add.png',address: [],email: [],phone: [],info: ''}}
        }

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
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Organization);