import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import configureStore from './redux/configureStore'
import { HashRouter } from 'react-router-dom';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core'
import DateFnsUtils from '@date-io/date-fns';
import ruLocale from 'date-fns/locale/ru';



const materialTheme = createMuiTheme({
    overrides: {
        MuiPickersToolbar: {
            toolbar: {
                backgroundColor: '#202124',
            },
        },
        MuiPickersCalendarHeader: {
            switchHeader: {
                // backgroundColor: lightBlue.A200,
                // color: "white",
            },
        },
        MuiPickersDay: {
            day: {
                color: '#202124',
            },
            isSelected: {
                backgroundColor: '#202124',
            },
            current: {
                color: '#202124',
            },
        },
        MuiPickersModal: {
            dialogAction: {
                color: '#202124',
            },
        },
    },
});
export const store = configureStore()

ReactDOM.hydrate(
    <MuiThemeProvider theme={materialTheme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
            <HashRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </HashRouter>
        </MuiPickersUtilsProvider>
    </MuiThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
