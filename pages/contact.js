import Head from 'next/head';
import React, { useState } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getContact, setContact } from '../src/gql/contact'
import contactStyle from '../src/styleMUI/contact'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useRouter } from 'next/router'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import dynamic from 'next/dynamic'
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Confirmation = dynamic(
    () => import('../components/dialog/Confirmation')
)
const AddSocial = dynamic(
    () => import('../components/dialog/AddSocial')
)

const Contact = React.memo((props) => {
    const classes = contactStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    let [name, setName] = useState(data.contact.name);
    let [address, setAddress] = useState(data.contact.address);
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
    let [email, setEmail] = useState(data.contact.email);
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
    let [phone, setPhone] = useState(data.contact.phone);
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
    let [social, setSocial] = useState(data.contact.social);
    let addSocial = (value, idx)=>{
        social[idx] = value
        setSocial([...social])
    };
    let [info, setInfo] = useState(data.contact.info);
    let [preview, setPreview] = useState(data.contact.image===''?'/static/add.png':data.contact.image);
    let [image, setImage] = useState(undefined);
    let handleChangeImage = ((event) => {
        setImage(event.target.files[0])
        setPreview(URL.createObjectURL(event.target.files[0]))
    })
    const { profile } = props.user;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    return (
        <App filters={data.filterSubCategory} sorts={data.sortSubCategory} pageName='Контакты'>
            <Head>
                <title>{name}</title>
            </Head>
            <Card className={classes.page}>
                <CardActions>
                    <CardContent className={isMobileApp?classes.column:classes.row}>
                        {
                            profile.role==='admin'?
                                <>
                                    <div className={classes.column}>
                                        <label htmlFor='contained-button-file'>
                                            <LazyLoadImage
                                                effect='blur'
                                                className={classes.media}
                                                src={preview}
                                                alt={'Добавить'}
                                            />
                                        </label>
                                        Наши страницы
                                        <div className={classes.row}>
                                            <LazyLoadImage
                                                effect='blur' src='/static/instagram.svg' onClick={()=>{
                                                setMiniDialog('Instagram', <AddSocial action={addSocial} idx={0}/>)
                                                showMiniDialog(true)
                                            }} className={classes.mediaSocial}/>
                                            <LazyLoadImage
                                                effect='blur' src='/static/facebook.svg' onClick={()=>{
                                                setMiniDialog('Facebook', <AddSocial action={addSocial} idx={0}/>)
                                                showMiniDialog(true)
                                            }} className={classes.mediaSocial}/>
                                            <LazyLoadImage
                                                effect='blur' src='/static/twitter.svg' onClick={()=>{
                                                setMiniDialog('Twitter', <AddSocial action={addSocial} idx={0}/>)
                                                showMiniDialog(true)
                                            }} className={classes.mediaSocial}/>
                                            <LazyLoadImage
                                                effect='blur' src='/static/telegram.svg' onClick={()=>{
                                                setMiniDialog('Telegram', <AddSocial action={addSocial} idx={0}/>)
                                                showMiniDialog(true)
                                            }} className={classes.mediaSocial}/>
                                        </div>
                                    </div>
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
                                                <InputLabel>Адрес</InputLabel>
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
                                                <InputLabel>Организация</InputLabel>
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
                                            <FormControl key={idx} className={isMobileApp?classes.inputM:classes.inputD}>
                                                <InputLabel>Организация</InputLabel>
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
                                            <Button onClick={async()=>{
                                                let editElement = {
                                                    name: name,
                                                    address: address,
                                                    email: email,
                                                    phone: phone,
                                                    social: social,
                                                    info: info
                                                }
                                                if(image!==undefined)editElement.image = image
                                                const action = async() => {
                                                    await setContact(editElement)
                                                }
                                                setMiniDialog('Вы уверенны?', <Confirmation action={action}/>)
                                                showMiniDialog(true)
                                            }} size='small' color='primary'>
                                                Сохранить
                                            </Button>
                                        </div>
                                    </div>
                                    </>
                                :
                                <>
                                <div className={classes.column}>
                                    <LazyLoadImage
                                        effect='blur'
                                        className={classes.media}
                                        src={preview}
                                        alt={name}
                                    />
                                    {
                                        social[0].length>0||social[1].length>0||social[2].length>0||social[3].length>0?
                                            <>
                                        Наши страницы
                                        <div className={classes.row}>
                                            {
                                                social[0].length>0?
                                                    <a href={social[0]}>
                                                        <LazyLoadImage
                                                            effect='blur' src='/static/instagram.svg' className={classes.mediaSocial}/>
                                                    </a>
                                                    :
                                                    null
                                            }
                                            {
                                                social[1].length>0?
                                                    <a href={social[1]}>
                                                        <LazyLoadImage
                                                            effect='blur' src='/static/facebook.svg' className={classes.mediaSocial}/>
                                                    </a>
                                                    :
                                                    null
                                            }
                                            {
                                                social[2].length>0?
                                                    <a href={social[2]}>
                                                        <LazyLoadImage
                                                            effect='blur' src='/static/twitter.svg' className={classes.mediaSocial}/>
                                                    </a>
                                                    :
                                                    null
                                            }
                                            {
                                                social[3].length>0?
                                                    <a href={social[3]}>
                                                        <LazyLoadImage
                                                            effect='blur' src='/static/telegram.svg' className={classes.mediaSocial}/>
                                                    </a>
                                                    :
                                                    null

                                            }
                                        </div>
                                        </>
                                            :
                                            null
                                    }
                                </div>
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
                        }
                        </CardContent>
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

Contact.getInitialProps = async function() {
    return {
        data: {
            ...await getContact()
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);