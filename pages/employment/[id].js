import Head from 'next/head';
import React, { useState } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import {getEmployment, setEmployments, onoffEmployment, addEmployment, deleteEmployment} from '../../src/gql/employment'
import organizationStyle from '../../src/styleMUI/employment/employment'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import dynamic from 'next/dynamic'
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { useRouter } from 'next/router'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getOrganizations } from '../../src/gql/organization'
import Router from 'next/router'
import * as userActions from '../../redux/actions/user'
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';

const Confirmation = dynamic(
    () => import('../../components/dialog/Confirmation')
)

const Client = React.memo((props) => {
    const classes = organizationStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    const { showSnackBar } = props.snackbarActions;
    let [status, setStatus] = useState(data.employment!==null?data.employment.user.status:'');
    let [name, setName] = useState(data.employment!==null?data.employment.name:'');
    let [email, setEmail] = useState(data.employment!==null?data.employment.email:'');
    let [phone, setPhone] = useState(data.employment!==null?data.employment.user.phone:'');
    let [organization, setOrganization] = useState(data.employment!==null?data.employment.organization:{});
    let handleOrganization =  (event) => {
        setOrganization({_id: event.target.value, name: event.target.name})
    };
    let [role, setRole] = useState(data.employment!==null?data.employment.user.role:'');
    let handleRole =  (event) => {
        setRole(event.target.value)
    };
    let [password, setPassword] = useState('');
    let handlePassword =  (event) => {
        setPassword(event.target.value)
    };
    let [hide, setHide] = useState('password');
    let handleHide =  () => {
        setHide(!hide)
    };
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const router = useRouter()
    const { logout } = props.userActions;
    let roles = ['организация', 'менеджер', 'экспедитор']
    return (
        <App filters={data.filterSubCategory} sorts={data.sortSubCategory} pageName={data.employment!==null?router.query.id==='new'?'Добавить':data.employment.name:'Ничего не найдено'}>
            <Head>
                <title>{data.employment!==null?router.query.id==='new'?'Добавить':data.employment.name:'Ничего не найдено'}</title>
            </Head>
            <Card className={classes.page}>
                <CardActions className={isMobileApp?classes.column:classes.row} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                {
                            data.employment!==null?
                                profile.role==='admin'||profile.role==='организация'||profile._id===data.employment.user._id?
                                    <>
                                    <div>
                                            <TextField
                                                label='Имя'
                                                value={name}
                                                className={isMobileApp?classes.inputM:classes.inputDF}
                                                onChange={(event)=>{setName(event.target.value)}}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                }}
                                            />
                                            <Input
                                                placeholder={router.query.id==='new'?'Пароль':'Новый пароль'}
                                                type={hide ? 'password' : 'text' }
                                                value={password}
                                                onChange={handlePassword}
                                                className={isMobileApp?classes.inputM:classes.inputDF}
                                                endAdornment={
                                                    <InputAdornment position='end'>
                                                        <IconButton aria-label='Toggle password visibility' onClick={handleHide}>
                                                            {hide ? <VisibilityOff />:<Visibility />  }
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                            />
                                        <TextField
                                            label='email'
                                            value={email}
                                            className={isMobileApp?classes.inputM:classes.inputDF}
                                            onChange={(event)=>{setEmail(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                        />
                                        <TextField
                                            label='Телефон'
                                            value={phone}
                                            className={isMobileApp?classes.inputM:classes.inputDF}
                                            onChange={(event)=>{setPhone(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                        />
                                        {router.query.id==='new'&&profile.role==='admin'?
                                            <FormControl className={isMobileApp?classes.inputM:classes.inputDF}>
                                                <InputLabel>Организация</InputLabel>
                                                <Select value={organization._id}onChange={handleOrganization}>
                                                    {data.organizations.map((element)=>
                                                        <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                            :
                                            router.query.id!=='new'?
                                                <TextField
                                                    label='Организация'
                                                    value={organization.name}
                                                    className={isMobileApp?classes.inputM:classes.inputDF}
                                                    inputProps={{
                                                        'aria-label': 'description',
                                                        readOnly: true,
                                                    }}
                                                />
                                                :null
                                        }
                                        <FormControl className={isMobileApp?classes.inputM:classes.inputDF}>
                                            <InputLabel>Роль</InputLabel>
                                            <Select
                                                value={role}
                                                onChange={handleRole}
                                                inputProps={{
                                                    'aria-label': 'description',
                                                    readOnly: profile._id===data.employment.user._id||!['admin', 'организация'].includes(profile.role),
                                                }}
                                            >
                                                {roles.map((element)=>{
                                                    //if(element!=='организация'||profile.role=='admin')
                                                        return <MenuItem key={element} value={element}>{element}</MenuItem>
                                                })
                                                }
                                            </Select>
                                        </FormControl>
                                        <div className={classes.row}>
                                            {
                                                router.query.id==='new'?
                                                    <Button onClick={async()=>{
                                                        if (name.length>0&&email.length>0&&password.length>0&&phone.length>0&&role.length>0&&organization._id!==undefined) {
                                                            const action = async() => {
                                                                await addEmployment({
                                                                    name: name,
                                                                    email: email,
                                                                    phone: phone,
                                                                    password: password,
                                                                    role: role,
                                                                    organization: organization._id,
                                                                })
                                                                Router.push('/employments')
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
                                                        let editElement = {_id: data.employment._id}
                                                        if(name.length>0&&name!==data.employment.name)editElement.name = name
                                                        if(phone.length>0&&phone!==data.employment.phone)editElement.phone = phone
                                                        if(email.length>0&&email!==data.employment.email)editElement.email = email
                                                        if(password.length>0)editElement.newPass = password
                                                        if(role.length>0&&role!==data.employment.role)editElement.role = role
                                                        const action = async() => {
                                                            await setEmployments(editElement)
                                                        }
                                                        setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                        showMiniDialog(true)
                                                    }} size='small' color='primary'>
                                                        Сохранить
                                                    </Button>

                                                    {
                                                        profile._id!==data.employment.user._id&&['admin', 'организация'].includes(profile.role)?
                                                            <>
                                                            <Button onClick={async()=>{
                                                                const action = async() => {
                                                                    await onoffEmployment([data.employment._id])
                                                                    setStatus(status==='active'?'deactive':'active')
                                                                }
                                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                                showMiniDialog(true)
                                                            }} size='small' color='primary'>
                                                                {status==='active'?'Отключить':'Включить'}
                                                            </Button>
                                                            <Button onClick={async()=>{
                                                                const action = async() => {
                                                                    await deleteEmployment([data.employment._id])
                                                                    Router.push('/employments')
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
                                                    {
                                                        profile._id===data.employment.user._id?
                                                            <Button onClick={async()=>{
                                                                const action = async() => {
                                                                    logout()
                                                                }
                                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                                showMiniDialog(true)
                                                            }} size='small' color='primary'>
                                                                Выйти
                                                            </Button>
                                                            :
                                                            null
                                                    }
                                                    </>
                                            }
                                        </div>
                                    </div>
                                    </>
                                    :
                                    'Ничего не найдено'
                                :
                                'Ничего не найдено'
                        }
                </CardActions>
                </Card>
        </App>
    )
})

Client.getInitialProps = async function(ctx) {
    return {
        data: {
            ...ctx.query.id!=='new'?await getEmployment({_id: ctx.query.id}):{employment:{name: '',email: '',user: {phone: '',status: '',role: '',},organization: {_id: ''},}},
            ...await getOrganizations({search: '', sort: 'name', filter: ''})
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
        userActions: bindActionCreators(userActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Client);