import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../../layouts/App';
import { connect } from 'react-redux'
import { getOrganization } from '../../src/gql/organization'
import { getDistributer, setDistributer, deleteDistributer, addDistributer, getOrganizationsWithoutDistributer } from '../../src/gql/distributer'
import distributerStyle from '../../src/styleMUI/distributer/distributer'
import { useRouter } from 'next/router'
import Card from '@material-ui/core/Card';
import CardOrganization from '../../components/organization/CardOrganization';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../../redux/actions/mini_dialog'
import * as snackbarActions from '../../redux/actions/snackbar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Router from 'next/router'
import dynamic from 'next/dynamic'
import { urlMain } from '../../redux/constants/other'
import { getClientGqlSsr } from '../../src/getClientGQL'
import initialApp from '../../src/initialApp'
import CardOrganizationPlaceholder from '../../components/organization/CardOrganizationPlaceholder'
import LazyLoad from 'react-lazyload';
const height = 140

const Confirmation = dynamic(() => import('../../components/dialog/Confirmation'))

const Distributer = React.memo((props) => {
    const { profile } = props.user;
    const classes = distributerStyle();
    const { data } = props;
    const router = useRouter()
    const {search, isMobileApp } = props.app;
    let [pagination, setPagination] = useState(100);
    const checkPagination = ()=>{
        if(pagination<allOrganizations.length){
            setPagination(pagination+100)
        }
    }
    let [organizations, setOrganizations] = useState(data.distributer?data.distributer.organizations:[]);
    let [allOrganizations, setAllOrganizations] = useState([]);
    let [filtredOrganizations, setFiltredOrganizations] = useState([]);
    let unselectedOrganizations = data.organizationsWithoutDistributer;
    let [selectType, setSelectType] = useState('Все');
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    const _new = !data.distributer
    useEffect(()=>{
        (async()=>{
            if(data.organization) {
                setPagination(100)
                let allOrganizations= []
                if (selectType == 'Все')
                    allOrganizations=[...organizations, ...unselectedOrganizations]
                else if (selectType == 'Свободные')
                    allOrganizations=[...unselectedOrganizations]
                else if (selectType == 'Выбраные')
                    allOrganizations=[...organizations]
                setAllOrganizations(allOrganizations)
                let filtredOrganizations = [...allOrganizations]
                filtredOrganizations = filtredOrganizations.filter(element=>
                    (element.name.toLowerCase()).includes(search.toLowerCase())
                )
                setFiltredOrganizations([...filtredOrganizations])
            }
        })()
    },[selectType, organizations, ])
    useEffect(()=>{
        (async()=>{
            if(data.organization&&allOrganizations.length>0) {
                let filtredOrganizations = [...allOrganizations]
                filtredOrganizations = filtredOrganizations.filter(element=>
                    (element.name.toLowerCase()).includes(search.toLowerCase())
                )
                setFiltredOrganizations([...filtredOrganizations])
            }
        })()
    },[search])
    console.log(allOrganizations)
    return (
        <App searchShow={true} checkPagination={checkPagination} pageName={data.district?router.query.id==='new'?'Добавить':data.district.name:'Ничего не найдено'}>
            <Head>
                <title>{data.organization?data.organization.name:'Ничего не найдено'}</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content={data.organization?data.organization.name:'Ничего не найдено'} />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/distributer/${router.query.id}`} />
                <link rel='canonical' href={`${urlMain}/distributer/${router.query.id}`}/>
            </Head>
            <Card className={isMobileApp?classes.pageM:classes.pageD}>
                {data.organization?
                    <>
                    <CardContent className={classes.column}>
                            <TextField
                                label='Название'
                                value={data.organization.name}
                                className={isMobileApp?classes.inputM:classes.inputDF}
                                inputProps={{
                                    'aria-label': 'description',
                                    readOnly: true,
                                }}
                            />
                            <br/>
                            <div style={{ justifyContent: 'center' }} className={classes.row}>
                                <div style={{background: selectType==='Все'?'#ffb300':'#ffffff'}} onClick={()=>{setSelectType('Все')}} className={classes.selectType}>
                                    Все
                                </div>
                                <div style={{background: selectType==='Свободные'?'#ffb300':'#ffffff'}} onClick={()=>{setSelectType('Свободные')}} className={classes.selectType}>
                                    {`Своб. ${unselectedOrganizations.length}`}
                                </div>
                                <div style={{background: selectType==='Выбраные'?'#ffb300':'#ffffff'}} onClick={()=>{setSelectType('Выбраные')}} className={classes.selectType}>
                                    {`Выбр. ${organizations.length}`}
                                </div>
                            </div>
                            <br/>
                            <div className={classes.listInvoices}>
                                {filtredOrganizations?filtredOrganizations.map((element, idx)=> {
                                    if (idx <= pagination)
                                        return (
                                            <div key={idx} style={isMobileApp ? {alignItems: 'baseline'} : {}}
                                                     className={isMobileApp ? classes.column : classes.row}>
                                                    <LazyLoad scrollContainer={'.App-body'} key={element._id}
                                                              height={height} offset={[height, 0]} debounce={0}
                                                              once={true}
                                                              placeholder={<CardOrganizationPlaceholder height={height}/>}>
                                                        <div>
                                                            <Checkbox checked={organizations.includes(element)}
                                                                      onChange={() => {
                                                                          if (!organizations.includes(element)) {
                                                                              organizations.push(element)
                                                                              unselectedOrganizations.splice(unselectedOrganizations.indexOf(element), 1)
                                                                          } else {
                                                                              organizations.splice(organizations.indexOf(element), 1)
                                                                              unselectedOrganizations.push(element)
                                                                          }
                                                                          setOrganizations([...organizations])
                                                                      }}
                                                            />
                                                            <CardOrganization element={element}/>
                                                        </div>
                                                    </LazyLoad>
                                                </div>
                                        )
                                    else return null
                                }):null}
                            </div>
                            <div className={isMobileApp?classes.bottomRouteM:classes.bottomRouteD}>
                                <Button onClick={async()=>{
                                    const action = async() => {
                                        if(_new){
                                            organizations = organizations.map(element=>element._id)
                                            await addDistributer({
                                                distributer: data.organization._id,
                                                organizations: organizations
                                            })
                                        }
                                        else {
                                            let editElement = {
                                                _id: data.distributer._id,
                                                organizations: organizations.map(element => element._id)
                                            }
                                            await setDistributer(editElement)
                                        }
                                    }
                                    setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
                                    showMiniDialog(true)
                                }} size='small' color='primary'>
                                    Сохранить
                                </Button>
                            </div>
                    </CardContent>
                    </>
                    :
                    <CardContent className={classes.column}>
                        Ничего не найдено
                    </CardContent>
                }
            </Card>
        </App>
    )
})

Distributer.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if('admin'!==ctx.store.getState().user.profile.role)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
                Router.push('/')
    return {
        data: {
            ...await getDistributer({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getOrganizationsWithoutDistributer(ctx.query.id, ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...await getOrganization({_id: ctx.query.id}, ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        mini_dialogActions: bindActionCreators(mini_dialogActions, dispatch),
        snackbarActions: bindActionCreators(snackbarActions, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Distributer);