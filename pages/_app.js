import React from 'react';
import App  from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import withRedux from 'next-redux-wrapper';
import configureStore from '../redux/configureStore'
import { Provider } from 'react-redux';
import { SingletonApolloClient } from '../src/singleton/client'
import { SingletonStore } from '../src/singleton/store'
import { register, checkDisableSubscribe } from '../src/subscribe'
import { getProfile } from '../redux/actions/user'
import { setClient } from '../src/gql/client'
import { checkAuth } from '../src/lib'
import { getClientGqlSsr } from '../src/getClientGQL'
import { ApolloProvider } from '@apollo/react-hooks';
import uaParserJs from 'ua-parser-js';

export default withRedux(configureStore, { debug: false })(
    class MyApp extends App {
        static componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }
        static async getInitialProps({ Component, ctx }) {
            if(!process.browser) {
                if (ctx.req) {
                    //new SingletonApolloClient(ctx.req)

                    let ua = uaParserJs(ctx.req.headers['user-agent'])

                    ctx.store.getState().app.isMobileApp = ua.device.type === 'mobile'
                    ctx.store.getState().user.authenticated = checkAuth(ctx.req.headers.cookie)
                    if (ctx.store.getState().user.authenticated) {
                        ctx.store.getState().user.profile = await getProfile(await getClientGqlSsr(ctx.req))
                        if (ctx.store.getState().user.profile.client) {
                            setClient({
                                _id: ctx.store.getState().user.profile.client,
                                device: `${ua.device.vendor ? ua.device.vendor : ''}-${ua.browser.model ? ua.browser.model : ''} | ${ua.os.name ? ua.os.name : ''}-${ua.os.version ? ua.os.version : ''} | ${ua.browser.name ? ua.browser.name : ''}-${ua.browser.version ? ua.browser.name : ''}`
                            }, await getClientGqlSsr(ctx.req))
                        }
                    } else {
                        ctx.store.getState().user.profile = {}
                    }
                }
                ctx.store.getState().app.search = ''
                ctx.store.getState().app.sort = '-createdAt'
                ctx.store.getState().app.filter = ''
                ctx.store.getState().app.date = ''
                ctx.store.getState().app.load = false
                ctx.store.getState().mini_dialog.show = false
                ctx.store.getState().pagination.work = false
                return {
                    pageProps: {
                        ...(Component.getInitialProps
                            ? await Component.getInitialProps(ctx)
                            : {}),
                    }
                };
            }
        }

        render() {
            const { Component, pageProps, store } = this.props;
            new SingletonStore(store)
            if(process.browser){
                checkDisableSubscribe()
                register()
            }
            let client = process.browser?new SingletonApolloClient().getClient():getClientGqlSsr()

            return (
                <React.Fragment>
                    <ApolloProvider client={client}>
                        <ThemeProvider theme={theme}>
                            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                            <CssBaseline />
                            <Provider store={store}>
                                    <Component {...pageProps} />
                            </Provider>
                        </ThemeProvider>
                    </ApolloProvider>
                </React.Fragment>
            );
        }
    }

)
