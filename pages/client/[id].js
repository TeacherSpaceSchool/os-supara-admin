import Head from 'next/head';
import React, { useState, useRef } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getClient } from '../../src/gql/client'
import clientStyle from '../../src/styleMUI/client/client'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as userActions from '../../redux/actions/user'
import { onoffClient, setClient } from '../../src/gql/client'
import Remove from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { urlMain } from '../../redux/constants/other'
import Confirmation from '../../components/dialog/Confirmation'
import Geo from '../../components/dialog/Geo'
import { useRouter } from 'next/router'
import { pdDatePicker } from '../../src/lib'
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';


const Client = React.memo((props) => {
    const { profile } = props.user;
    const classes = clientStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    let [status, setStatus] = useState(data.client?data.client.user.status:'');
    let [name, setName] = useState(data.client?data.client.name:'');
    let [email, setEmail] = useState(data.client?data.client.email:'');
    let [phone, setPhone] = useState(data.client?data.client.phone:[]);
    let addPhone = ()=>{
        phone = [...phone, '']
        setPhone(phone)
    };
    let editPhone = (event, idx)=>{
        phone[idx] = event.target.value
        setPhone([...phone])
    };
    let deletePhone = (idx)=>{
        phone.splice(idx, 1);
        setPhone([...phone])
    };
    let [login, setLogin] = useState(data.client?data.client.user.login:'');

    //привести к геолокации
    if(!Array.isArray(data.client.address[0])) data.client.address.map((addres)=>[addres])

    let [address, setAddress] = useState(data.client?data.client.address:[]);
    let [birthday, setBirthday] = useState(data.client?pdDatePicker(new Date(data.client.birthday)):null);
    let [city, setCity] = useState(data.client?data.client.city:'');
    let [type, setType] = useState(data.client?data.client.type:'');
    let handleType =  (event) => {
        setType(event.target.value)
    };
    const types = ['частное лицо', 'торговая точка']

    let [newAddress, setNewAddress] = useState('');
    let addAddress = ()=>{
        address = [...address, [newAddress]]
        setAddress(address)
        setNewAddress('')
    };
    let editAddress = (event, idx)=>{
        address[idx][0] = event.target.value
        setAddress([...address])
    };
    let editAddressName = (event, idx)=>{
        address[idx][2] = event.target.value
        setAddress([...address])
    };
    let deleteAddress = (idx)=>{
        address.splice(idx, 1);
        setAddress([...address])
    };
    let setAddressGeo = (geo, idx)=>{
        address[idx][1] = geo
        setAddress([...address])
    };

    let [info, setInfo] = useState(data.client?data.client.info:'');
    let [preview, setPreview] = useState(data.client?data.client.image:'');
    let [image, setImage] = useState(undefined);
    let handleChangeImage = ((event) => {
        setImage(event.target.files[0])
        setPreview(URL.createObjectURL(event.target.files[0]))
    })
    let [patent , setPatent] = useState(undefined);
    let handleChangePatent = ((event) => {
        setPatent(event.target.files[0])
    })
    let patentUrl =data.client?data.client.patent:'';
    let patentRef = useRef(null);
    let [passport, setPassport] = useState(undefined);
    let handleChangePassport = ((event) => {
        setPassport(event.target.files[0])
    })
    let passportUrl = data.client?data.client.passport:'';
    let passportRef = useRef(null);
    let [certificate, setCertificate] = useState(undefined);
    let handleChangeCertificate = ((event) => {
        setCertificate(event.target.files[0])
    })
    let certificateUrl = data.client?data.client.certificate:'';
    let certificateRef = useRef(null);
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
    const router = useRouter()
    return (
        <App filters={data.filterSubCategory} sorts={data.sortSubCategory} pageName={data.client?data.client.name:'Ничего не найдено'}>
            <Head>
                <title>{data.client?data.client.name:'Ничего не найдено'}</title>
                <meta name='description' content={info}/>
                <meta property='og:title' content={data.client?data.client.name:'Ничего не найдено'} />
                <meta property='og:description' content={info} />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={preview} />
                <meta property="og:url" content={`${urlMain}/client/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/client/${router.query.id}`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={isMobileApp?classes.column:classes.row} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                    {data.client?
                            profile.role==='admin'||profile._id===data.client.user._id?
                                <>
                                <div className={classes.column}>
                                    <label htmlFor='contained-button-file'>
                                        <img
                                            className={classes.media}
                                            src={preview}
                                            alt={'Добавить'}
                                        />
                                    </label>
                                    {
                                        type==='торговая точка'?
                                            <>
                                            <div className={classes.line}>
                                                <div className={classes.doc}>
                                                    Cвидетельство:&nbsp;
                                                </div>
                                                {
                                                    certificateUrl&&certificateUrl.length>0?
                                                        <a href={certificateUrl} download target='_blank'>
                                                            <div className={classes.docUrl} style={{color: 'indigo'}}>
                                                                Скачать
                                                            </div>
                                                        </a>
                                                        :null
                                                }
                                                &nbsp;
                                                <div className={classes.docUrl} style={{color: certificate||(certificateUrl&&certificateUrl.length>0)?'#ffb300':'red'}} onClick={()=>{certificateRef.current.click()}}>
                                                    {certificate||(certificateUrl&&certificateUrl.length>0)?'Изменить':'Добавить'}
                                                </div>

                                            </div>
                                            <div  className={classes.row}>
                                                <div className={classes.doc}>
                                                    Паспорт:&nbsp;
                                                </div>
                                                {
                                                    passportUrl&&passportUrl.length>0?
                                                        <a href={passportUrl} download target='_blank'>
                                                            <div className={classes.docUrl} style={{color: 'indigo'}}>
                                                                Скачать
                                                            </div>
                                                        </a>
                                                        :null
                                                }
                                                &nbsp;
                                                <div className={classes.docUrl} style={{color: passport||(passportUrl&&passportUrl.length>0)?'#ffb300':'red'}} onClick={()=>{passportRef.current.click()}}>
                                                    {passport||(passportUrl&&passportUrl.length>0)?'Изменить':'Добавить'}
                                                </div>
                                            </div>
                                            <div  className={classes.row}>
                                                <div className={classes.doc}>
                                                    Патент:&nbsp;
                                                </div>
                                                {
                                                    patentUrl&&patentUrl.length>0?
                                                        <a href={patentUrl} download target='_blank'>
                                                            <div className={classes.docUrl} style={{color: 'indigo'}}>
                                                                Скачать
                                                            </div>
                                                        </a>
                                                        :null
                                                }
                                                &nbsp;
                                                <div className={classes.docUrl} style={{color: patent||(patentUrl&&patentUrl.length>0)?'#ffb300':'red'}} onClick={()=>{patentRef.current.click()}}>
                                                    {patent||(patentUrl&&patentUrl.length>0)?'Изменить':'Добавить'}
                                                </div>
                                            </div>
                                            </>
                                            :
                                            null
                                    }
                                </div>
                                <div>
                                        <TextField
                                            label='Имя'
                                            value={name}
                                            className={classes.input}
                                            onChange={(event)=>{setName(event.target.value)}}
                                            inputProps={{
                                                'aria-label': 'description',
                                            }}
                                        />
                                    <TextField
                                        label='Логин'
                                        value={login}
                                        className={classes.input}
                                        onChange={(event)=>{setLogin(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                        <Input
                                            placeholder='Новый пароль'
                                            type={hide ? 'password' : 'text' }
                                            value={newPass}
                                            onChange={handleNewPass}
                                            className={classes.input}
                                            endAdornment={
                                                <InputAdornment position="end">
                                                    <IconButton aria-label="Toggle password visibility" onClick={handleHide}>
                                                        {hide ? <VisibilityOff />:<Visibility />  }
                                                    </IconButton>
                                                </InputAdornment>
                                            }
                                        />
                                    <FormControl className={classes.input}>
                                        <InputLabel>Тип клиента</InputLabel>
                                        <Select value={type} onChange={handleType}>
                                            {types.map((element)=>
                                                <MenuItem key={element} value={element}>{element}</MenuItem>
                                            )}
                                        </Select>
                                    </FormControl>
                                    <TextField
                                        className={classes.input}
                                        label='День рождение'
                                        type='date'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={birthday}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                        onChange={ event => setBirthday(event.target.value) }
                                    />
                                    <TextField
                                        className={classes.input}
                                        label='Город'
                                        type='text'
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        value={city}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                        onChange={ event => setCity(event.target.value) }
                                    />
                                    <br/>
                                    <br/>
                                    {phone?phone.map((element, idx)=>
                                        <div key={idx}>
                                            <FormControl className={classes.input}>
                                                <InputLabel>Телефон. Формат: +996555780861</InputLabel>
                                                <Input
                                                    placeholder='Телефон. Формат: +996555780861'
                                                    value={element}
                                                    className={classes.input}
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
                                        </div>
                                    ): null}
                                    <Button onClick={async()=>{
                                        addPhone()
                                    }} size='small' color='primary'>
                                        Добавить телефон
                                    </Button>
                                    <br/>
                                    <br/>
                                    {address?address.map((element, idx)=>
                                        <div key={idx}>
                                            <FormControl className={classes.input}>
                                                <InputLabel>Название магазина</InputLabel>
                                                <Input
                                                    placeholder='Название магазина'
                                                    value={element[2]}
                                                    className={classes.input}
                                                    onChange={(event)=>{editAddressName(event, idx)}}
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
                                            <FormControl className={classes.input}>
                                                <InputLabel>Адрес магазина</InputLabel>
                                                <Input
                                                    placeholder='Адрес'
                                                    value={element[0]}
                                                    className={classes.input}
                                                    onChange={(event)=>{editAddress(event, idx)}}
                                                    inputProps={{
                                                        'aria-label': 'description',
                                                    }}
                                                />
                                            </FormControl>
                                            <div className={classes.geo} style={{color: element[1]?'#ffb300':'red'}} onClick={()=>{
                                                setMiniDialog('Геолокация', <Geo change={true} geo={element[1]} setAddressGeo={setAddressGeo} idx={idx}/>, true)
                                                showMiniDialog(true)
                                            }}>
                                                {
                                                    element[1]?
                                                        'Изменить геолокацию'
                                                        :
                                                        'Задайте геолокацию'
                                                }
                                            </div>
                                        </div>
                                    ):
                                        <br/>}
                                    <Button onClick={async()=>{
                                        addAddress()
                                    }} size='small' color='primary'>
                                        Добавить адрес
                                    </Button>
                                    <br/>
                                    <br/>

                                    <TextField
                                        label='email'
                                        value={email}
                                        className={classes.input}
                                        onChange={(event)=>{setEmail(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    <TextField
                                        multiline={true}
                                        label='Информация'
                                        value={info}
                                        className={classes.input}
                                        onChange={(event)=>{setInfo(event.target.value)}}
                                        inputProps={{
                                            'aria-label': 'description',
                                        }}
                                    />
                                    <div className={classes.row}>
                                        <Button onClick={async()=>{
                                            let editElement = {_id: data.client.user._id}
                                            if(image!==undefined)editElement.image = image
                                            if(passport!==undefined)editElement.passport = passport
                                            if(patent!==undefined)editElement.patent = patent
                                            if(certificate!==undefined)editElement.certificate = certificate
                                            if(name.length>0&&name!==data.client.name)editElement.name = name
                                            editElement.address = address
                                            if(email.length>0&&email!==data.client.email)editElement.email = email
                                            if(login.length>0&&data.client.user.login!==login)editElement.login = login
                                            editElement.phone = phone
                                            if(info.length>0&&info!==data.client.info)editElement.info = info
                                            if(city.length>0&&city!==data.client.city)editElement.city = city
                                            if(type&&type.length>0&&type!==data.client.type)editElement.type = type
                                            if(birthday&&birthday!==data.client.birthday)editElement.birthday = birthday
                                            if(newPass.length>0)editElement.newPass = newPass
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
                                                    logout(true)
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

                                <div className={classes.column}>
                                    <img
                                        className={classes.media}
                                        src={preview}
                                        alt={name}
                                    />
                                    {
                                        ['admin', 'организация', 'менеджер'].includes(profile.role)&&certificateUrl&&certificateUrl.length>0?
                                            <a href={certificateUrl} download target='_blank'>
                                                <div className={classes.docUrl} style={{color: 'indigo'}}>
                                                    Скачать сертификат
                                                </div>
                                            </a>
                                            :null
                                    }
                                    {
                                        ['admin', 'организация', 'менеджер'].includes(profile.role)&&passportUrl&&passportUrl.length>0?
                                            <a href={passportUrl} download target='_blank'>
                                                <div className={classes.docUrl} style={{color: 'indigo'}}>
                                                    Скачать паспорт
                                                </div>
                                            </a>
                                            :null
                                    }
                                    {
                                        ['admin', 'организация', 'менеджер'].includes(profile.role)&&patentUrl&&patentUrl.length>0?
                                            <a href={patentUrl} download target='_blank'>
                                                <div className={classes.docUrl} style={{color: 'indigo'}}>
                                                    Скачать патент
                                                </div>
                                            </a>
                                            :null
                                    }
                                </div>
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
                                                <>
                                                <div className={classes.value} key={idx}>
                                                    {element[1]}
                                                </div>
                                                <div className={classes.value} key={idx}>
                                                    {element[0]}
                                                </div>
                                                <div className={classes.geo} style={{color: element[1]?'#ffb300':'red'}} onClick={()=>{
                                                    setMiniDialog('Геолокация', <Geo geo={element[1]}/>, true)
                                                    showMiniDialog(true)
                                                }}>
                                                    {
                                                        element[1]?
                                                            'Посмотреть геолокацию'
                                                            :
                                                            'Геолокация не задана'
                                                    }
                                                </div>
                                                </>
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
                                            <div className={classes.column}>
                                                {phone?phone.map((element, idx)=>
                                                    <>
                                                    <div className={classes.value} key={idx}>
                                                        {element}
                                                    </div>
                                                    </>
                                                ):null}
                                            </div>
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
                        </CardContent>
                </Card>
            <input
                accept='image/*'
                style={{ display: 'none' }}
                id='contained-button-file'
                type='file'
                onChange={handleChangeImage}
            />
            <input
                ref={passportRef}
                style={{ display: 'none' }}
                id='input-passport'
                type='file'
                onChange={handleChangePassport}
            />
            <input
                ref={certificateRef}
                style={{ display: 'none' }}
                id='input-certificate'
                type='file'
                onChange={handleChangeCertificate}
            />
            <input
                ref={patentRef}
                style={{ display: 'none' }}
                id='input-patent'
                type='file'
                onChange={handleChangePatent}
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