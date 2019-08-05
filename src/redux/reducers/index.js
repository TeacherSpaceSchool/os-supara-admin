import { combineReducers } from 'redux'
import user from './user'
import mini_dialog from './mini_dialog'
import app from './app'
import table from './table'
import snackbar from './snackbar'

export default combineReducers({
    mini_dialog,
    user,
    table,
    snackbar,
    app
})