import Head from 'next/head';
import React  from 'react';
import App from '../layouts/App';
import { connect } from 'react-redux'
import { getSetting } from '../src/gql/setting'
import pageListStyle from '../src/styleMUI/list'
import CardSetting from '../components/CardSetting'
import { urlMain } from '../redux/constants/other'
import Router from 'next/router'
import { getClientGqlSsr } from '../src/getClientGQL'
import initialApp from '../src/initialApp'

const Setting = React.memo((props) => {
    const classes = pageListStyle();
    const { data } = props;
    return (
        <App pageName='Настройки'>
            <Head>
                <title>Настройки</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Настройки' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/setting`} />
                <link rel='canonical' href={`${urlMain}/setting`}/>
            </Head>
            <div className={classes.page}>
                <CardSetting element={data.setting}/>
            </div>
        </App>
    )
})

Setting.getInitialProps = async function(ctx) {
    await initialApp(ctx)
    if(!['admin', 'менеджер'].includes(ctx.store.getState().user.profile.role))
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
            ...await getSetting(ctx.req?await getClientGqlSsr(ctx.req):undefined),
        }
    };
};

function mapStateToProps (state) {
    return {
        app: state.app,
    }
}

export default connect(mapStateToProps)(Setting);