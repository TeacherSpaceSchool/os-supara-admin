import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import {getAuto, setAuto, deleteAuto, addAuto} from '../../src/gql/auto'
import organizationStyle from '../../src/styleMUI/auto/auto'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import { useRouter } from 'next/router'
import { getOrganizations } from '../../src/gql/organization'
import { checkFloat } from '../../src/lib'
import { getEcspeditors } from '../../src/gql/employment'
import Router from 'next/router'
import * as userActions from '../../redux/actions/user'
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';
import Confirmation from '../../components/dialog/Confirmation'
import { urlMain } from '../../redux/constants/other'
import { getClientGqlSsr } from '../../src/getClientGQL'
import Autocomplete from '@material-ui/lab/Autocomplete';
import initialApp from '../../src/initialApp'

const Auto = React.memo((props) => {
    const { profile } = props.user;
    const classes = organizationStyle();
    const { data } = props;
    const { isMobileApp } = props.app;
    const { showSnackBar } = props.snackbarActions;
    const organizations = data.organizations;
    let [number, setNumber] = useState(data.auto&&data.auto.number?data.auto.number:'');
    let [size, setSize] = useState(data.auto&&data.auto.size?data.auto.size:0);
    let [tonnage, setTonnage] = useState(data.auto&&data.auto.tonnage?data.auto.tonnage:0);
    let [organization, setOrganization] = useState(data.auto&&data.auto.organization?data.auto.organization:{});
    let [employment, setEmployment] = useState(data.auto&&data.auto.employment?data.auto.employment:{});
    let [employments, setEmployments] = useState([]);
    useEffect(()=>{
        (async()=>{
            setEmployments((await getEcspeditors({_id: organization._id})).ecspeditors)
        })()
    },[organization])
    let handleEmployment =  (employment) => {
        setEmployment(employment)
    };
    let handleOrganization =  (organization) => {
        setOrganization(organization)
    };
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const router = useRouter()
    return (
        <App pageName={data.auto?router.query.id==='new'?'Добавить':data.auto.name:'Ничего не найдено'}>
            <Head>
                <title>{data.auto!==null?router.query.id==='new'?'Добавить':data.auto.name:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={data.auto!==null?router.query.id==='new'?'Добавить':data.auto.name:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/auto/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/auto/${router.query.id}`}/>
            </Head>
            <Card className={classes.page}>
                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                {
                    data.auto!==null?
                        <>
                        <TextField
                            label='Номер'
                            value={number}
                            className={classes.input}
                            onChange={(event)=>{setNumber(event.target.value)}}
                            inputProps={{
                                'aria-label': 'description',
                                readOnly: !['admin', 'организация'].includes(profile.role),
                            }}
                        />
                        <TextField
                            type={isMobileApp?'number':'text'}
                            label='Грузоподъемность в килограммах'
                            value={tonnage}
                            className={classes.input}
                            onChange={(event)=>{
                                while((event.target.value).includes(','))
                                    event.target.value = (event.target.value).replace(',', '.')
                                setTonnage(event.target.value)}
                            }
                            inputProps={{
                                'aria-label': 'description',
                                readOnly: !['admin', 'организация'].includes(profile.role),
                            }}
                        />
                        <TextField
                            type={isMobileApp?'number':'text'}
                            label='Кубатура в см³'
                            value={size}
                            className={classes.input}
                            onChange={(event)=>{
                                while((event.target.value).includes(','))
                                    event.target.value = (event.target.value).replace(',', '.')
                                setSize(event.target.value)}
                            }
                            inputProps={{
                                'aria-label': 'description',
                                readOnly: !['admin', 'организация'].includes(profile.role),
                            }}
                        />
                        {
                            ['admin'].includes(profile.role)?
                                <Autocomplete
                                    className={classes.input}
                                    options={organizations}
                                    getOptionLabel={option => option.name}
                                    value={organization}
                                    onChange={(event, newValue) => {
                                        handleOrganization(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Выберите организацию' fullWidth />
                                    )}
                                />
                                :
                                null
                        }
                        {
                            ['admin', 'организация'].includes(profile.role)?
                                <Autocomplete
                                    className={classes.input}
                                    options={employments}
                                    value={employment}
                                    getOptionLabel={option => option.name}
                                    onChange={(event, newValue) => {
                                        handleEmployment(newValue)
                                    }}
                                    noOptionsText='Ничего не найдено'
                                    renderInput={params => (
                                        <TextField {...params} label='Выберите экспедитора' fullWidth />
                                    )}
                                />
                                :
                                <TextField
                                    label='Экспедитор'
                                    value={employment.name}
                                    className={classes.input}
                                    inputProps={{
                                        'aria-label': 'description',
                                        readOnly: true,
                                    }}
                                />
                        }
                        <div className={classes.row}>
                            {
                                router.query.id==='new'?
                                    <Button onClick={async()=>{
                                        if (size.length>0&&tonnage.length>0&&number.length>0) {
                                            const action = async() => {
                                                let auto = {
                                                    size: checkFloat(size),
                                                    tonnage: checkFloat(tonnage),
                                                    number: number,
                                                }
                                                if(employment&&employment._id)
                                                    auto.employment = employment._id
                                                if(organization&&organization._id)
                                                    auto.organization = organization._id
                                                await addAuto(auto)
                                                Router.push('/autos')
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
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
                                        let editElement = {_id: data.auto._id}
                                        if(size.length>0&&size!=data.auto.size)editElement.size = checkFloat(size)
                                        if(tonnage.length>0&&tonnage!=data.auto.tonnage)editElement.tonnage = checkFloat(tonnage)
                                        if(number.length>0&&number!==data.auto.number)editElement.number = number
                                        if(organization._id&&organization._id!==data.auto.organization._id)editElement.organization = organization._id
                                        if(employment._id&&employment._id!==data.auto.employment._id)editElement.employment = employment._id
                                        const action = async() => {
                                            await setAuto(editElement)
                                        }
                                        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                        showMiniDialog(true)
                                    }} size='small' color='primary'>
                                        Сохранить
                                    </Button>
                                    <Button onClick={
                                        async()=>{
                                            const action = async() => {
                                                await deleteAuto([data.auto._id])
                                                Router.push('/autos')
                                            }
                                            setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                            showMiniDialog(true)
                                        }
                                    } size='small' color='primary'>
                                        Удалить
                                    </Button>
                                    </>
                            }
                        </div>
                        </>
                        :
                        'Ничего не найдено'
                }
                </CardContent>
            </Card>
        </App>
    )
})

Auto.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!(ctx.store.getState().user.r))
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            ...ctx.query.id!=='new'?await getAuto({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined):{auto:{name: '',number: '',client: {_id: '',},organization: {_id: ''},}},
            ...await getOrganizations({search: '', sort: 'name', filter: ''}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
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

export default connect(mapStateToProps, mapDispatchToProps)(Auto);