import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import waybillStyle from '../../src/styleMUI/list'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { addWaybill, setWaybill, getWaybill, getUnloadingWaybill, deleteWaybill } from '../../src/gql/waybill'
import { getApplicationsForWaybill } from '../../src/gql/application'
import TextField from '@material-ui/core/TextField';
import { urlMain } from '../../redux/constants/other'
import Confirmation from '../../components/dialog/Confirmation'
import { useRouter } from 'next/router'
import * as snackbarActions from '../../redux/actions/snackbar'
import Router from 'next/router'
import { getClientGqlSsr } from '../../src/getClientGQL'
import { pdDDMMYYHHMM, checkInt, currencys } from '../../src/lib'
import initialApp from '../../src/initialApp'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Link from 'next/link';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import * as appActions from '../../redux/actions/app'

const Waybill = React.memo((props) => {
    const { profile } = props.user;
    const classes = waybillStyle();
    const { data } = props;
    const router = useRouter()
    const { showLoad } = props.appActions;
    const { isMobileApp } = props.app;
    const { showSnackBar } = props.snackbarActions;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    let [application, setApplication] = useState(data.waybill?data.waybill.application:undefined);
    let [seller, setSeller] = useState(data.waybill?data.waybill.seller:undefined);
    let [preview, setPreview] = useState(data.waybill?data.waybill.patent:'');
    let [patent, setPatent] = useState(undefined);
    let [items, setItems] = useState(data.waybill?data.waybill.items:[]);
    let handleChangePatent = ((event) => {
        if(event.target.files[0].size/1024/1024<50){
            setPatent(event.target.files[0])
            setPreview(event.target.files[0].name)
        } else {
            showSnackBar('Файл слишком большой')
        }
    })
    useEffect(()=>{
        let amount1 = {}, amount = []
        for(let i = 0; i<items.length; i++){
            if(items[i].status!=='отмена') {
                if (!amount1[items[i].currency])
                    amount1[items[i].currency] = 0
                amount1[items[i].currency]+=items[i].count*items[i].price
            }
        }
        const keys = Object.keys(amount1)
        for(let i = 0; i<keys.length; i++){
            amount.push({name: keys[i], value: amount1[keys[i]]})
        }
        setAmount([...amount])
    },[items])
    let patentRef = useRef(null);
    let [amount, setAmount] = useState(data.waybill?data.waybill.amount:[]);
    let [acceptSpecialist, setAcceptSpecialist] = useState(data.waybill?data.waybill.acceptSpecialist:undefined);
    const statusColor = {
        'обработка': 'orange',
        'принят': 'green'
    }
    let [zoom, setZoom] = useState(1);
    let [showTable, setShowTable] = useState(true);
    return (
        <App pageName={router.query.id==='new'?'Добавить':data.waybill?data.waybill.number:'Ничего не найдено'}>
            <Head>
                <title>{router.query.id==='new'?'Добавить':data.waybill?data.waybill.number:'Ничего не найдено'}</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение'/>
                <meta property='og:title' content={router.query.id==='new'?'Добавить':data.waybill?data.waybill.number:'Ничего не найдено'} />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/waybill/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/waybill/${router.query.id}`}/>
            </Head>
            <Card>
                <CardContent className={classes.page}>
                    {
                        data.waybill.number?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Номер:</div>&nbsp;
                                <div className={classes.value}>{data.waybill.number}</div>
                            </div>
                            :
                            null
                    }
                    {
                        data.waybill.status?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Статус:</div>&nbsp;
                                <div className={classes.value} style={{color: statusColor[data.waybill.status]}}>{data.waybill.status}</div>
                            </div>
                            :
                            null
                    }
                    {
                        data.waybill.createdAt?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Время подачи:&nbsp;</div>
                                <div className={classes.value}>{pdDDMMYYHHMM(data.waybill.createdAt)}</div>
                            </div>
                            :
                            null
                    }
                    {
                        !['admin', 'менеджер', 'снабженец'].includes(profile.role)||(data.waybill.status&&data.waybill.status!=='обработка')?
                            <div className={classes.row}>
                                <div className={classes.nameField}>Продавец:&nbsp;</div>
                                <div className={classes.value}>{seller}</div>
                            </div>
                            :
                            <div className={classes.row}>
                                <div className={classes.nameField}>Продавец:&nbsp;</div>
                                <Input
                                    size='small'
                                    className={classes.inputTable}
                                    value={seller}
                                    style={{width: '100%', marginBottom: 10}}
                                    onChange={(event)=>{
                                        setSeller(event.target.value)
                                    }}
                                />
                            </div>
                    }
                    {
                        router.query.id==='new'?
                            <>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Патент:&nbsp;</div>
                                <div className={classes.nameField} style={{color: patent?'#009ADC':'red', cursor: 'pointer'}} onClick={()=>{patentRef.current.click()}}>
                                    Загрузить
                                </div>
                            </div>
                            <Autocomplete
                                size='small'
                                className={classes.input}
                                options={data.applicationsForWaybill}
                                getOptionLabel={option => option.number}
                                value={application}
                                onChange={(event, newValue) => {
                                    setApplication(newValue)
                                    setItems([...newValue.items])
                                }}
                                noOptionsText='Ничего не найдено'
                                renderInput={params => (
                                    <TextField {...params} label='Заявка' variant='outlined' fullWidth />
                                )}
                            />
                            </>
                            :
                            <>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Патент:&nbsp;</div>
                                <div className={classes.nameField} style={{color: preview?'#009ADC':'red', cursor: 'pointer'}} onClick={()=>{if(preview)window.open(preview, '_blank')}}>
                                    Скачать
                                </div>
                                {
                                    ['admin', 'менеджер', 'снабженец'].includes(profile.role)&&data.waybill.status==='обработка'?
                                        <div className={classes.nameField} style={{color: patent?'#009ADC':'red', cursor: 'pointer'}} onClick={()=>{patentRef.current.click()}}>
                                            Загрузить
                                        </div>
                                        :
                                        null
                                }
                            </div>
                            <Link href='/application/[id]' as={`/application/${data.waybill.application._id}`}>
                                <div className={classes.row}>
                                    <div className={classes.nameField}>Заявка:&nbsp;</div>
                                    <a>
                                        <div className={classes.value}>{data.waybill.application.number}</div>
                                    </a>
                                </div>
                            </Link>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Снабженец:&nbsp;</div>
                                <div className={classes.value}>{data.waybill.supplier.name}</div>
                            </div>
                            </>
                    }
                    {
                        application?
                            <>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Сумма:&nbsp;</div>
                                <div className={classes.column}>
                                    {
                                        amount.map((amount, idx) =>
                                            <div key={idx} className={classes.value}>{`${amount.value} ${amount.name}`}</div>
                                        )
                                    }
                                </div>
                            </div>
                            <div className={classes.tableName}>
                                <div className={classes.nameField}>Товары&nbsp;({items.length}):&nbsp;</div>
                                {
                                    isMobileApp?
                                        <>
                                        <div onClick={()=>{if(zoom>0.1){setZoom(zoom-=0.1)}}} className={classes.zoomBtn}>-</div>
                                        <div onClick={()=>{if(zoom<1){setZoom(zoom+=0.1)}}} className={classes.zoomBtn}>+</div>
                                        </>
                                        :
                                        null
                                }
                                &nbsp;&nbsp;&nbsp;
                                <Button size='small' color='primary' onClick={()=>{
                                    setShowTable(!showTable)
                                }}>
                                    {showTable?'Спрятать':'Показать'}
                                </Button>
                            </div>
                            {
                                showTable?
                                    <div className={classes.table} style={{zoom: zoom}}>
                                        <div className={classes.tableRow} style={{width: isMobileApp?['admin', 'менеджер', 'снабженец'].includes(profile.role)&&(!data.waybill.status||'обработка'===data.waybill.status)?894:810:'100%'}}>
                                            <div className={classes.cell} style={{width: 20}}><div className={classes.nameTable}>№</div></div>
                                            <div className={classes.cell} style={{width: isMobileApp?150:`calc((100vw - ${['admin', 'менеджер', 'снабженец'].includes(profile.role)&&(!data.waybill.status||'обработка'===data.waybill.status)?'948':'864'}px) / 2)`}}><div className={classes.nameTable}>Товар</div></div>
                                            <div className={classes.cell} style={{width: 60}}><div className={classes.nameTable}>Кол-во</div></div>
                                            <div className={classes.cell} style={{width: 60}}><div className={classes.nameTable}>Цена</div></div>
                                            <div className={classes.cell} style={{width: 70}}><div className={classes.nameTable}>Сумма</div></div>
                                            <div className={classes.cell} style={{width: 70}}><div className={classes.nameTable}>Валюта</div></div>
                                            <div className={classes.cell} style={{width: 70}}><div className={classes.nameTable}>Ед. изм.</div></div>
                                            <div className={classes.cell} style={{width: isMobileApp?150:`calc((100vw - ${['admin', 'менеджер', 'снабженец'].includes(profile.role)&&(!data.waybill.status||'обработка'===data.waybill.status)?'948':'864'}px) / 2)`}}><div className={classes.nameTable}>Примечание</div></div>
                                            {
                                                ['admin', 'менеджер', 'снабженец'].includes(profile.role)&&(!data.waybill.status||'обработка'===data.waybill.status)?
                                                    <div className={classes.cell} style={{width: 64}}/>
                                                    :
                                                    null
                                            }
                                        </div>
                                        {items.map((item, idx) =>
                                            <div className={classes.tableRow} key={idx} style={{width: isMobileApp?780:'100%'}}>
                                                <div className={classes.cell} style={{width: 20}}>
                                                    <div className={classes.nameTable}>
                                                        {idx+1}
                                                    </div>
                                                </div>
                                                <div className={classes.cell} style={{width: isMobileApp?150:`calc((100vw - ${['admin', 'менеджер', 'снабженец'].includes(profile.role)&&(!data.waybill.status||'обработка'===data.waybill.status)?'948':'864'}px) / 2)`}}>
                                                {
                                                    item.edit&&(!data.waybill.status||'обработка'===data.waybill.status) ?
                                                            <Autocomplete
                                                                value={item.name}
                                                                freeSolo={true}
                                                                size='small'
                                                                className={classes.inputTable}
                                                                options={application.items.filter(item=>!items.map(item1=>item1.name).includes(item.name))}
                                                                getOptionLabel={option => option.name}
                                                                onChange={(event, newValue) => {
                                                                    if(newValue) {
                                                                        items[idx] = newValue
                                                                    }
                                                                    else {
                                                                        items[idx].name = ''
                                                                        items[idx].currency = ''
                                                                        items[idx].count = 0
                                                                        items[idx].unit = ''
                                                                        items[idx].GUID = ''
                                                                        items[idx].price = 0
                                                                    }
                                                                    setItems([...items])
                                                                }}
                                                                noOptionsText='Ничего не найдено'
                                                                renderInput={params => (
                                                                    <TextField {...params} label='Товар' variant='outlined' fullWidth/>
                                                                )}
                                                            />
                                                            :
                                                            <Input
                                                                className={classes.inputTable}
                                                                value={item.name}
                                                                inputProps={{
                                                                    'aria-label': 'description',
                                                                    readOnly: true,
                                                                }}
                                                            />
                                                    }
                                                </div>
                                                <div className={classes.cell} style={{width: 60}}>
                                                    <Input
                                                        className={classes.inputTable}
                                                        type={isMobileApp?'number':'text'}
                                                        inputProps={{
                                                            readOnly: !['admin', 'менеджер', 'снабженец'].includes(profile.role)||(data.waybill.status&&'обработка'!==data.waybill.status)
                                                        }}
                                                        value={item.count}
                                                        onChange={(event)=>{
                                                            items[idx].count = checkInt(event.target.value)
                                                            setItems([...items])
                                                        }}
                                                    />
                                                </div>
                                                <div className={classes.cell} style={{width: 60}}>
                                                    <Input
                                                        className={classes.inputTable}
                                                        inputProps={{
                                                            readOnly: !['admin', 'менеджер', 'снабженец'].includes(profile.role)||(data.waybill.status&&'обработка'!==data.waybill.status)
                                                        }}
                                                        value={item.price}
                                                        type={isMobileApp?'number':'text'}
                                                        onChange={(event)=>{
                                                            items[idx].price = checkInt(event.target.value)
                                                            setItems([...items])
                                                        }}
                                                    />
                                                </div>
                                                <div className={classes.cell} style={{width: 70}}>
                                                    <Input
                                                        className={classes.inputTable}
                                                        inputProps={{
                                                            readOnly: true
                                                        }}
                                                        value={item.count*item.price}
                                                    />
                                                </div>
                                                <div className={classes.cell} style={{width: 70}}>
                                                    <Select
                                                        className={classes.inputTable}
                                                        value={item.currency}
                                                        onChange={(event)=>{
                                                            items[idx].currency = event.target.value
                                                            setItems([...items])
                                                        }}
                                                        inputProps={{
                                                            'aria-label': 'description',
                                                            readOnly: !['admin', 'менеджер', 'снабженец'].includes(profile.role)||(data.waybill.status&&'обработка'!==data.waybill.status)
                                                        }}
                                                        input={<Input/>}
                                                        MenuProps={{
                                                            PaperProps: {
                                                                style: {
                                                                    maxHeight: 500,
                                                                    width: 250,
                                                                },
                                                            },
                                                        }}
                                                    >
                                                        {currencys.map((currency) => (
                                                            <MenuItem key={currency} value={currency}>
                                                                {currency}
                                                            </MenuItem>
                                                        ))}
                                                    </Select>
                                                </div>
                                                <div className={classes.cell} style={{width: 70}}>
                                                    <Input
                                                        className={classes.inputTable}
                                                        inputProps={{
                                                            readOnly: true
                                                        }}
                                                        value={item.unit}
                                                    />
                                                </div>
                                                <div className={classes.cell} style={{width: isMobileApp?150:`calc((100vw - ${['admin', 'менеджер', 'снабженец'].includes(profile.role)&&(!data.waybill.status||'обработка'===data.waybill.status)?'948':'864'}px) / 2)`}}>
                                                    <Input
                                                        className={classes.inputTable}
                                                        inputProps={{
                                                            readOnly: !['admin', 'менеджер', 'снабженец'].includes(profile.role)||(data.waybill.status&&'обработка'!==data.waybill.status)
                                                        }}
                                                        multiline={true}
                                                        value={item.comment}
                                                        onChange={(event)=>{
                                                            items[idx].comment = event.target.value
                                                            setItems([...items])
                                                        }}
                                                    />
                                                </div>
                                                {
                                                    ['admin', 'менеджер', 'снабженец'].includes(profile.role)&&(!data.waybill.status||'обработка'===data.waybill.status)?
                                                        <div className={classes.cell} style={{width: 64, fontSize: '0.875rem'}}>
                                                            <Button color='secondary' size='small' onClick={()=>{
                                                                items.splice(idx, 1)
                                                                setItems([...items])
                                                            }}>
                                                                Удалить
                                                            </Button>
                                                        </div>
                                                        :
                                                        null
                                                }
                                            </div>
                                        )}

                                    </div>
                                    :
                                    <div className={classes.table}/>
                            }
                            {
                                'снабженец'===profile.role&&(!data.waybill.status||'обработка'===data.waybill.status)?
                                    <>
                                    <Button color='primary' size='small' onClick={()=>{
                                        items = [...items, {
                                            name: '',
                                            unit: 'шт',
                                            currency: 'сом',
                                            price: 0,
                                            count: 0,
                                            comment: '',
                                            status: 'принят',
                                            edit: true,
                                            GUID: ''
                                        }]
                                        setItems(items)
                                    }}>
                                        Добавить товар
                                    </Button>
                                    </>
                                    :
                                    null
                            }
                            </>
                            :
                            null
                    }
                    {
                        router.query.id === 'new' ?
                            null
                            :
                            <>
                            <div className={classes.row}>
                                <div className={classes.nameField}>Подтверждения:&nbsp;</div>
                            </div>
                            <div className={classes.row} style={{alignItems: 'flex-end'}}>
                                <div className={classes.nameField}>{`Специалист${data.waybill.acceptSpecialist?` ${pdDDMMYYHHMM(data.waybill.acceptSpecialist)}`:''}`}:&nbsp;</div>
                                <Checkbox
                                    size='small'
                                    checked={acceptSpecialist}
                                    onChange={() => {
                                        if(['admin', 'менеджер', 'специалист'].includes(profile.role)&&!data.waybill.acceptSpecialist) {
                                            setAcceptSpecialist(!acceptSpecialist)
                                        }
                                    }}
                                    color='primary'
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                />
                            </div>
                            </>
                    }
                    <div className={isMobileApp ? classes.bottomDivM : classes.bottomDivD}>
                        {
                            router.query.id === 'new' || data.waybill.status === 'обработка' ?
                                    <Button color='primary' onClick={() => {
                                        let check = !((items.filter(item => !item.name.length || !item.unit.length || !item.price || !item.count)).length > 0)
                                        if (items.length > 0 && check && application) {
                                            const action = async () => {
                                                if (router.query.id === 'new') {
                                                    items = items.map(item => {
                                                        return {
                                                            name: item.name,
                                                            unit: item.unit,
                                                            price: item.price,
                                                            count: item.count,
                                                            comment: item.comment,
                                                            currency: item.currency,
                                                            status: item.status,
                                                            GUID: item.GUID
                                                        }
                                                    })
                                                    await addWaybill({
                                                        patent: patent,
                                                        items: items,
                                                        application: application._id,
                                                        seller: seller
                                                    })
                                                }
                                                else {
                                                    items = items.map(item => {
                                                        return {
                                                            name: item.name,
                                                            unit: item.unit,
                                                            price: item.price,
                                                            count: item.count,
                                                            comment: item.comment,
                                                            currency: item.currency,
                                                            status: item.status,
                                                            GUID: item.GUID
                                                        }
                                                    })
                                                    let element = {
                                                        _id: router.query.id,
                                                        items: items
                                                    }
                                                    if (seller && seller !== data.waybill.seller) element.seller = seller
                                                    if (patent) element.patent = patent
                                                    if (acceptSpecialist && acceptSpecialist !== data.waybill.acceptSpecialist) element.acceptSpecialist = acceptSpecialist
                                                    await setWaybill(element)
                                                }
                                                Router.push(`/waybills`)
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        } else
                                            showSnackBar('Заполните все поля')
                                    }}>
                                        Сохранить
                                    </Button>
                                :
                                null
                        }
                        {
                            data.waybill.status==='обработка'&&['admin', 'менеджер', 'снабженец'].includes(profile.role)?
                                <Button size='small' color='primary' onClick={()=>{
                                    const action = async() => {
                                        await deleteWaybill([router.query.id])
                                        Router.push(`/waybills`)
                                    }
                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                }}>
                                    Удалить
                                </Button>
                                :
                                null
                        }
                        {
                            router.query.id!=='new'&&'обработка'!==data.waybill.status?
                                <Button size='small' color='primary' onClick={async()=>{
                                    await showLoad(true)
                                    window.open(((await getUnloadingWaybill({
                                        _id: router.query.id,
                                    })).unloadingWaybill).data, '_blank');
                                    await showLoad(false)
                                }}>
                                    Выгрузить
                                </Button>
                                :
                                null
                        }
                    </div>
                    <input
                        ref={patentRef}
                        accept='*/*'
                        style={{ display: 'none' }}
                        id='contained-button-file'
                        type='file'
                        onChange={handleChangePatent}
                    />
                </CardContent>
            </Card>
        </App>
    )
})

Waybill.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'менеджер', 'специалист', 'снабженец'].includes(ctx.store.getState().user.profile.role))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        }
        else {
            Router.push('/')
        }
    return {
        data: {
            ...(ctx.query.id==='new'?
                    {
                        waybill:
                            {
                                application: undefined,
                                seller: '',
                                patent: undefined,
                                items: [],
                                amount: [],
                            }
                    }
                :
                    await getWaybill({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
            ),
            ...await getApplicationsForWaybill(ctx.req?await getClientGqlSsr(ctx.req):undefined)

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
        appActions: bindActionCreators(appActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Waybill);