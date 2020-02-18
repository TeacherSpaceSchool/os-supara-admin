import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import pageListStyle from '../src/styleMUI/basket/basket'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import CancelIcon from '@material-ui/icons/Cancel';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {checkInt} from '../src/lib';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import * as snackbarActions from '../redux/actions/snackbar'
import { getBasket, setBasket, deleteBasket, getCountBasket } from '../src/gql/basket';
import { getClient } from '../src/gql/client';
import Router from 'next/router'
import BuyBasket from '../components/dialog/BuyBasket'
import Sign from '../components/dialog/Sign'
import Confirmation from '../components/dialog/Confirmation'
import { urlMain } from '../redux/constants/other'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { getBonusesClient } from '../src/gql/bonusclient'
import TextField from '@material-ui/core/TextField';
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'
import {getAdss} from '../src/gql/ads'

const Basket = React.memo((props) => {
    const { authenticated } = props.user;
    const classes = pageListStyle();
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showSnackBar } = props.snackbarActions;
    const { data } = props;
    let [list, setList] = useState(data.baskets);
    let [bonus, setBonus] = useState({});
    let [ads, setAds] = useState([]);
    let [organization, setOrganization] = useState({_id: '', name: ''});
    let handleOrganization =  (event) => {
        setOrganization(organizations[organizations.findIndex(element => element._id===event.target.value)])
    };
    let [organizations, setOrganizations] = useState([]);
    let [allPrice, setAllPrice] = useState(0);
    const { isMobileApp } = props.app;
    let increment = (idx)=>{
        if(list[idx].item.apiece)
            list[idx].count+=1
        else
            list[idx].count+=list[idx].item.packaging
        setBasketChange(idx, list[idx].count)
        setList([...list])
    }
    let decrement = (idx)=>{
        if(list[idx].item.apiece&&list[idx].count>1) {
            list[idx].count -= 1
            setBasketChange(idx, list[idx].count)
            setList([...list])
        }
        else if(!list[idx].item.apiece&&list[idx].count>list[idx].item.packaging) {
            list[idx].count -= list[idx].item.packaging
            setBasketChange(idx, list[idx].count)
            setList([...list])

        }
    }
    let incrementConsignment = (idx)=>{
        if(list[idx].consignment<list[idx].count) {
            list[idx].consignment += 1
            setBasketChange(idx, list[idx].count, list[idx].consignment)
            setList([...list])
        }
    }
    let decrementConsignment = (idx)=>{
        if(list[idx].consignment>0) {
            list[idx].consignment -= 1
            setBasketChange(idx, list[idx].count, list[idx].consignment)
            setList([...list])
        }
    }
    let setBasketChange= (idx, count, consignment)=>{
        count = checkInt(count)
        if(count<1)
            count = 1
        if(authenticated)
            setBasket({_id: list[idx]._id, count: count, consignment})
        else {
            let list = JSON.parse(localStorage.basket);
            list[idx].count = count;
            localStorage.basket = JSON.stringify(list);
        }
    }
    let removeBasketChange= async (idx)=>{
        const action = async() => {
            if(authenticated) {
                setList((await deleteBasket([list[idx]._id])).baskets)
            } else {
                let list = JSON.parse(localStorage.basket)
                list.splice(idx, 1)
                localStorage.basket = JSON.stringify(list)
                await getCountBasket()
                setList(list)
            }
        }
        setMiniDialog('Вы уверены?', <Confirmation action={action}/>)
        showMiniDialog(true)
    }
    useEffect(()=>{
        (async()=>{
            if(!authenticated){
                if(localStorage.basket==undefined) {
                    localStorage.basket = JSON.stringify([])
                }
                setList(JSON.parse(localStorage.basket))
            }
        })()
    },[])
    useEffect(()=>{
        (async()=>{
            organizations = []
            for(let i=0; i<list.length; i++){
                if(organizations.findIndex(element => element._id===list[i].item.organization._id)===-1){
                    organizations.push(list[i].item.organization)
                }
            }
            setOrganizations([...organizations])
            let organizationsIdx = organizations.map(organization=>organization._id)
            if(organizations.length>0&&!organizationsIdx.includes(organization._id))
                setOrganization({...organizations[0]})
        })()
    },[list])
    useEffect(()=>{
        (async()=>{
            calculateAllPrice()
            bonus = {}
            for(let i=0; i<data.bonusesClient.length; i++){
                if(organization._id===data.bonusesClient[i].bonus.organization._id){
                    bonus = data.bonusesClient[i]
                }
            }
            setBonus(bonus)
            if(organization._id)
                setAds((await getAdss({search: '', organization: organization._id})).adss)
        })()
    },[list, organization])
    let getList = async()=>{
        setList((await getBasket()).baskets)
    };
    let calculateAllPrice = async()=>{
        let allPrice = 0
        for(let i=0;i < list.length; i++){
            if(list[i].item.organization._id===organization._id)
                allPrice+=((list[i].item.stock===0||list[i].item.stock===undefined?list[i].item.price:list[i].item.stock)*list[i].count)
        }
        setAllPrice(Math.round(allPrice))
    };

    //привести к геолокации
    if(data.client&&!Array.isArray(data.client.address[0])) data.client.address.map((addres)=>[addres])

    return (
        <App getList={getList} pageName='Корзина'>
            <Head>
                <title>Корзина</title>
                <meta name='description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:title' content='Корзина' />
                <meta property='og:description' content='Азык – это онлайн платформа для заказа товаров оптом, разработанная специально для малого и среднего бизнеса.  Она объединяет производителей и торговые точки напрямую, сокращая расходы и повышая продажи. Азык предоставляет своим пользователям мощные технологии для масштабирования и развития своего бизнеса.' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/basket`} />
                <link rel='canonical' href={`${urlMain}/basket`}/>
            </Head>
                {
                        isMobileApp?
                            <div className={classes.column} style={{width: 'calc(100% - 16px)', margin: 8}}>
                                <Card className={classes.page}>
                                      <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                                         <TextField
                                                      select
                                                      label='Организация'
                                                      value={organization._id}
                                                      onChange={handleOrganization}
                                                      helperText='Организация'
                                                      className={classes.input}
                                                  >
                                                      {organizations.map((element)=>
                                                          <MenuItem key={element._id} value={element._id}>{element.name}</MenuItem>
                                                      )}
                                                  </TextField>
                                      </CardContent>
                                </Card>
                                {
                                    list.map((row, idx) => {
                                        if(row.item.organization._id===organization._id)
                                            return (
                                                <>
                                                <Card className={classes.page} key={idx} style={{position: 'relative'}}>
                                                    <IconButton onClick={() => {
                                                        removeBasketChange(idx)
                                                    }} color="primary" className={classes.cancelM}>
                                                        <CancelIcon style={{height: 25, width: 25}}/>
                                                    </IconButton>
                                                    <CardContent className={classes.column} style={isMobileApp ? {} : {
                                                        justifyContent: 'start',
                                                        alignItems: 'flex-start'
                                                    }}>
                                                        <div className={classes.itemM}>
                                                            <div className={classes.row}>
                                                                <img className={classes.mediaM} src={row.item.image}/>
                                                                <div className={classes.column}>
                                                                    <div className={classes.nameM}>
                                                                        {row.item.name}
                                                                    </div>
                                                                    <br/>
                                                                    <div className={classes.row}>
                                                                        <div className={classes.counterM}>
                                                                            <div className={classes.counterbtnM} onClick={() => {
                                                                                decrement(idx)
                                                                            }}>–
                                                                            </div>
                                                                            <input readOnly={!row.item.apiece} type={isMobileApp?'number':'text'} className={classes.counternmbrM}
                                                                                   value={row.count} onChange={(event) => {
                                                                                list[idx].count = event.target.value
                                                                                setBasketChange(idx, list[idx].count)
                                                                                setList([...list])
                                                                            }}/>
                                                                            <div className={classes.counterbtnM} onClick={() => {
                                                                                increment(idx)
                                                                            }}>+
                                                                            </div>
                                                                        </div>
                                                                        &nbsp;&nbsp;&nbsp;
                                                                        {
                                                                            row.item.organization.consignation&&authenticated?
                                                                            <div className={classes.showConsM} style={{color: list[idx]&&list[idx].showConsignment?'#ffb300':'#000'}} onClick={()=>{
                                                                                list[idx].showConsignment = !list[idx].showConsignment
                                                                                setList([...list])
                                                                            }}>
                                                                                КОНС
                                                                            </div>
                                                                                :
                                                                                null
                                                                        }
                                                                    </div>
                                                                    {
                                                                        row.item.apiece?
                                                                            <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                                                list[idx].count = (parseInt(list[idx].count/row.item.packaging)+1)*row.item.packaging
                                                                                setBasketChange(idx, list[idx].count)
                                                                                setList([...list])
                                                                            }}>
                                                                                Добавить упаковку
                                                                            </div>
                                                                            :
                                                                            <div className={classes.addPackaging} style={{color: '#ffb300'}}>
                                                                                Упаковок: {(list[idx].count/list[idx].item.packaging)}
                                                                            </div>
                                                                    }
                                                                </div>
                                                            </div>
                                                            {
                                                                authenticated&&list[idx].showConsignment?
                                                                    <>
                                                                    <div className={classes.row}>
                                                                        <div className={classes.valuecons}>Консигнация</div>
                                                                        <div className={classes.counterbtncons} onClick={()=>{decrementConsignment(idx)}}>-</div>
                                                                        <div className={classes.valuecons}>{row.consignment}&nbsp;шт</div>
                                                                        <div className={classes.counterbtncons} onClick={()=>{incrementConsignment(idx)}}>+</div>
                                                                    </div>
                                                                    <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                                        let consignment = (parseInt(list[idx].consignment / row.item.packaging) + 1) * row.item.packaging
                                                                        if(consignment<=list[idx].count) {
                                                                            list[idx].consignment = consignment
                                                                            setBasketChange(idx, list[idx].count, list[idx].consignment)
                                                                            setList([...list])
                                                                        }
                                                                    }}>
                                                                        Добавить упаковку
                                                                    </div>
                                                                    <br/>
                                                                    </>
                                                                    :
                                                                    null
                                                            }
                                                            <div>
                                                                <div className={classes.row}>
                                                                    <div className={classes.nameField}>
                                                                        Цена:
                                                                    </div>
                                                                    <div className={classes.value}>
                                                                        {`${row.item.stock === 0 || row.item.stock === undefined ? row.item.price : row.item.stock} сом`}
                                                                    </div>
                                                                </div>
                                                                <div className={classes.row}>
                                                                    <div className={classes.nameField}>
                                                                        Итого:
                                                                    </div>
                                                                    <div className={classes.value}>
                                                                        {`${Math.round((row.item.stock === 0 || row.item.stock === undefined ? row.item.price : row.item.stock) * row.count)} сом`}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </CardContent>
                                                </Card>
                                                </>
                                            )
                                        }
                                    )
                                }
                                <div style={{height: 70}}/>
                            </div>
                            :
                            <>
                            <Card className={classes.page}>
                                <CardContent className={classes.column} style={isMobileApp?{}:{justifyContent: 'start', alignItems: 'flex-start'}}>
                                <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>
                                            <FormControl className={classes.input}>
                                                <InputLabel>Организация</InputLabel>
                                                <Select value={organization._id} onChange={handleOrganization}>
                                                    {organizations.map((element)=>
                                                            <MenuItem key={element._id} value={element._id} ola={element.name}>{element.name}</MenuItem>
                                                    )}
                                                </Select>
                                            </FormControl>
                                        </TableCell>
                                        <TableCell align="left">Количество</TableCell>
                                        <TableCell align="left">Цена</TableCell>
                                        <TableCell align="left">Итого</TableCell>
                                        <TableCell align="center">Отменить</TableCell>
                                    </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {list.map((row, idx) => {
                                            if(row.item.organization._id===organization._id)
                                            return (
                                                <TableRow key={idx}>
                                                <TableCell component="th" scope="row" >
                                                    <div className={classes.row}>
                                                        <img className={classes.mediaD} src={row.item.image}/>
                                                        <div className={classes.nameD}>
                                                            {row.item.name}
                                                        </div>
                                                    </div>
                                                </TableCell>
                                                <TableCell align="left">
                                                    <div className={classes.row}>
                                                        <div className={classes.counterD} style={isMobileApp?{marginBottom: 20}:{marginRight: 20}}>
                                                            <div className={classes.counterbtnD} onClick={()=>{decrement(idx)}}>–</div>
                                                            <input readOnly={!row.item.apiece} type={isMobileApp?'number':'text'} className={classes.counternmbrD} value={row.count} onChange={(event)=>{
                                                                list[idx].count = event.target.value
                                                                setBasketChange(idx, checkInt(list[idx].count))
                                                                setList([...list])
                                                            }}/>
                                                            <div className={classes.counterbtnD} onClick={()=>{increment(idx)}}>+</div>
                                                        </div>
                                                        {
                                                            row.item.organization.consignation&&authenticated?
                                                                <div className={classes.showConsD} style={{color: list[idx]&&list[idx].showConsignment?'#ffb300':'#000'}} onClick={()=>{
                                                                    list[idx].showConsignment = !list[idx].showConsignment
                                                                    setList([...list])
                                                                }}>
                                                                    КОНС
                                                                </div>
                                                                :
                                                                null
                                                        }
                                                    </div>
                                                    {row.item.apiece?
                                                        <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                            list[idx].count = (parseInt(list[idx].count/row.item.packaging)+1)*row.item.packaging
                                                            setBasketChange(idx, list[idx].count)
                                                            setList([...list])
                                                        }}>
                                                            Добавить упаковку
                                                        </div>
                                                        :
                                                        <div className={classes.addPackaging} style={{color: '#ffb300'}}>
                                                            Упаковок: {(list[idx].count/list[idx].item.packaging)}
                                                        </div>
                                                    }
                                                    {
                                                        authenticated&&list[idx].showConsignment?
                                                        <>
                                                        <div className={classes.row}>
                                                            <div className={classes.valuecons}>Консигнация</div>
                                                            <div className={classes.counterbtncons} onClick={()=>{decrementConsignment(idx)}}>-</div>
                                                            <div className={classes.valuecons}>{row.consignment}&nbsp;шт</div>
                                                            <div className={classes.counterbtncons} onClick={()=>{incrementConsignment(idx)}}>+</div>
                                                        </div>
                                                        <div className={classes.addPackaging} style={{color: '#ffb300'}} onClick={()=>{
                                                            let consignment = (parseInt(list[idx].consignment / row.item.packaging) + 1) * row.item.packaging
                                                            if(consignment<=list[idx].count) {
                                                                list[idx].consignment = consignment
                                                                setBasketChange(idx, list[idx].count, list[idx].consignment)
                                                                setList([...list])
                                                            }
                                                        }}>
                                                            Добавить упаковку
                                                        </div>
                                                        </>
                                                        :
                                                        null
                                                    }
                                                </TableCell>
                                                <TableCell align="left"
                                                >{`${row.item.stock===0||row.item.stock===undefined?row.item.price:row.item.stock} сом`}</TableCell>
                                                <TableCell align="left">
                                                    {`${Math.round((row.item.stock===0||row.item.stock===undefined?row.item.price:row.item.stock)*row.count)} сом`}</TableCell>
                                                <TableCell align="center">
                                                    <IconButton onClick={()=>{removeBasketChange(idx)}} color="primary" className={classes.button} aria-label="add to shopping cart">
                                                        <CancelIcon />
                                                    </IconButton>
                                                </TableCell>
                                            </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </CardContent>
                            </Card>
                            <div style={{height: 70}}/>
                            </>
                    }
            <div className={isMobileApp?classes.bottomBasketM:classes.bottomBasketD}>
                <div className={isMobileApp?classes.allPriceM:classes.allPriceD}>
                    <div className={isMobileApp?classes.value:classes.priceAllText}>Общая стоимость</div>
                    <div className={isMobileApp?classes.priceAllM:classes.priceAll}>{`${allPrice} сом`}</div>
                </div>
                <div className={isMobileApp?classes.buyM:classes.buyD} onClick={()=>{
                    if(allPrice>0)
                        if (authenticated) {
                            let address = data.client.address
                            let proofeAddress = address.length > 0
                            if (proofeAddress) {
                                for (let i = 0; i < address.length; i++) {
                                    proofeAddress = address[i][0].length > 0
                                }
                            }
                            if (proofeAddress && data.client.name.length > 0 && data.client.phone.length > 0
                            ) {
                                setMiniDialog('Купить', <BuyBasket
                                    adss={ads}
                                    bonus={bonus}
                                    client={data.client}
                                    allPrice={allPrice} organization={organization}/>)
                                showMiniDialog(true)
                            }
                            else {
                                if (data.client && data.client._id)
                                    Router.push(`/client/${data.client._id}`)
                            }
                        }
                        else {
                            setMiniDialog('Купить', <Sign/>)
                            showMiniDialog(true)
                        }
                    else
                        showSnackBar('Добавьте товар в корзину')
                }}>
                    КУПИТЬ
                </div>
            </div>
        </App>
    )
})

Basket.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['client'].includes(ctx.store.getState().user.profile.role)&&ctx.store.getState().user.authenticated)
        if(ctx.res) {
            ctx.res.writeHead(302, {
                Location: '/'
            })
            ctx.res.end()
        } else
            Router.push('/')
    return {
        data: {
            ...await getBasket(ctx.req?await getClientGqlSsr(ctx.req):undefined),
            ...(ctx.store.getState().user.profile._id?await getClient({_id: ctx.store.getState().user.profile._id}, ctx.req?await getClientGqlSsr(ctx.req):undefined):{}),
            ...await getBonusesClient({search: '', sort: '-createdAt'}, ctx.req?await getClientGqlSsr(ctx.req):undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(Basket);