import Head from 'next/head';
import React, { useState, useEffect, useRef } from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import applicationStyle from '../src/styleMUI/list'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { bindActionCreators } from 'redux'
import * as mini_dialogActions from '../redux/actions/mini_dialog'
import { getItemsFromApplications } from '../src/gql/application'
import { getCategorys } from '../src/gql/category'
import { getItems } from '../src/gql/item'
import { getUnits } from '../src/gql/unit'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Input from '@material-ui/core/Input';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { urlMain } from '../redux/constants/other'
import Confirmation from '../components/dialog/Confirmation'
import SetSuplier from '../components/dialog/SetSuplier'
import { useRouter } from 'next/router'
import * as snackbarActions from '../redux/actions/snackbar'
import Router from 'next/router'
import { getClientGqlSsr } from '../src/getClientGQL'
import {  pdDDMMYYHHMM, checkInt, differenceDates, currencys } from '../src/lib'
import initialApp from '../src/initialApp'
import { getSuppliers } from '../src/gql/user'
import * as appActions from '../redux/actions/app'
import Link from 'next/link';

const ItemsFromApplications = React.memo((props) => {
    const { profile } = props.user;
    const classes = applicationStyle();
    const { data } = props;
    const router = useRouter()
    const { isMobileApp } = props.app;
    const { showSnackBar } = props.snackbarActions;
    const { setMiniDialog, showMiniDialog } = props.mini_dialogActions;
    const { showLoad } = props.appActions;
    let [zoom1, setZoom1] = useState(1);
    return (
        <App pageName='Лист закупки'>
            <Head>
                <title>Лист закупки</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение'/>
                <meta property='og:title' content='Лист закупки' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property='og:url' content={`${urlMain}/itemsfromapplications`} />
                <link rel='canonical' href={`${urlMain}/itemsfromapplications`}/>
            </Head>
            <Card>
                <CardContent className={classes.page}>
                    <div className={classes.tableName}>
                        <div className={classes.nameField}>
                            Товары&nbsp;({data.itemsFromApplications.length}):&nbsp;
                        </div>
                        {
                            isMobileApp?
                                <>
                                <div onClick={()=>{if(zoom1>0.1){setZoom1(zoom1-=0.1)}}} className={classes.zoomBtn}>-</div>
                                <div onClick={()=>{if(zoom1<1){setZoom1(zoom1+=0.1)}}} className={classes.zoomBtn}>+</div>
                                </>
                                :
                                null
                        }
                    </div>
                    <div className={classes.table} style={{zoom: zoom1}}>
                        <div className={classes.tableRow} style={{width: '100%'}}>
                            <div className={classes.cell} style={{width: 20}}>
                                <div className={classes.nameTable}>№</div>
                            </div>
                            <div className={classes.cell} style={{width: 80}}>
                                <div className={classes.nameTable}>Накладная</div>
                            </div>
                            <div className={classes.cell} style={{width: `calc((100vw - 212px${isMobileApp?'':' - 300'}) / 2)`}}>
                                <div className={classes.nameTable}>Товар</div>
                            </div>
                            <div className={classes.cell} style={{width: `calc((100vw - 212px${isMobileApp?'':' - 300'}) / 2)`}}>
                                <div className={classes.nameTable}>Количество</div>
                            </div>
                        </div>
                        {data.itemsFromApplications.map((row, idx) =>
                            <div className={classes.tableRow} key={idx}
                                 style={{width: '100%'}}>
                                <div className={classes.cell} style={{width: 20}}>
                                    <div className={classes.nameTable}>
                                        {idx + 1}
                                    </div>
                                </div>
                                <div className={classes.cell} style={{width: 80}}>
                                    <Link key={data.itemsFromApplications[0]} href='/application/[id]' as={`/application/${row[0]}`}>
                                        <a>
                                            <b>
                                                {row[1]}
                                            </b>
                                        </a>
                                    </Link>
                                </div>
                                <div className={classes.cell} style={{width: `calc((100vw - 212px${isMobileApp?'':' - 300'}) / 2)`}}>
                                    {row[2]}
                                </div>
                                <div className={classes.cell} style={{width: `calc((100vw - 212px${isMobileApp?'':' - 300'}) / 2)`}}>
                                    {row[3]}
                                </div>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </App>
    )
})

ItemsFromApplications.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if('снабженец'!==ctx.store.getState().user.profile.role)
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
            ...await getItemsFromApplications(ctx.req?await getClientGqlSsr(ctx.req):undefined)
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

export default connect(mapStateToProps, mapDispatchToProps)(ItemsFromApplications);