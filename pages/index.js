import Head from 'next/head';
import React, {useEffect} from 'react';
import App from '../layouts/App';
import initialApp from '../src/initialApp'
import { urlMain } from '../redux/constants/other'
import pageListStyle from '../src/styleMUI/index'
import { connect } from 'react-redux'

const Index = React.memo((props) => {
    const { isMobileApp } = props.app;
    const classes = pageListStyle();
    useEffect(()=>{
        if(process.browser){
            let appBody = document.getElementsByClassName('App-body')
            appBody[0].style.paddingBottom = '0px'
        }
    },[process.browser])
    return (
        <App pageName='Кант-Сут'>
            <Head>
                <title>Кант-Сут</title>
                <meta name='description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:title' content='Кант-Сут' />
                <meta property='og:description' content='Система предназначена для ведения списка заявок на приобретение' />
                <meta property='og:type' content='website' />
                <meta property='og:image' content={`${urlMain}/static/512x512.png`} />
                <meta property="og:url" content={`${urlMain}/index`} />
                <link rel='canonical' href={`${urlMain}/index`}/>
            </Head>
            <div className={classes.page}>
                <div className={classes.message} style={{width: isMobileApp?300:500}}>
                    <center>
                        <img className={classes.logo} src={`${urlMain}/static/512x512.png`} />
                    </center>
                    <br/>
                    Для начала выберите пункт в боковом меню
                </div>
            </div>
        </App>
    )
})

function mapStateToProps (state) {
    return {
        app: state.app
    }
}

Index.getInitialProps = async function(ctx) {
    console.log(`index.js${1}`)
    await initialApp(ctx)
    console.log(`index.js${2}`)
    return {};
};

export default connect(mapStateToProps)(Index);