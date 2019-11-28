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
import { setProfile } from '../redux/actions/user'
import moment from 'moment';
moment.locale('ru')
import { checkMobile, checkAuth } from '../src/lib'

export default withRedux(configureStore, { debug: true })(
    class MyApp extends App {
        static componentDidMount() {
            // Remove the server-side injected CSS.
            const jssStyles = document.querySelector('#jss-server-side');
            if (jssStyles) {
                jssStyles.parentNode.removeChild(jssStyles);
            }
        }
        static async getInitialProps({ Component, ctx }) {
            new SingletonApolloClient(ctx.req)
            if(ctx.req){
                ctx.store.getState().app.isMobileApp = checkMobile(ctx.req.headers['user-agent'])
                ctx.store.getState().user.authenticated = checkAuth(ctx.req.headers.cookie)
                ctx.store.dispatch(setProfile())
            }
            ctx.store.getState().app.search = ''
            ctx.store.getState().app.sort = '-updatedAt'
            ctx.store.getState().app.filter = ''
            return {
                pageProps: {
                    ...(Component.getInitialProps
                        ? await Component.getInitialProps(ctx)
                        : {}),
                }
            };
        }

        render() {
            const { Component, pageProps, store } = this.props;
            new SingletonStore(store)
            return (
                <React.Fragment>
                    <ThemeProvider theme={theme}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Provider store={store}>
                                <Component {...pageProps} />
                        </Provider>
                    </ThemeProvider>
                </React.Fragment>
            );
        }
    }

)