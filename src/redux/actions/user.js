import {
    AUTHENTICATED,
    UNAUTHENTICATED,
    SET_STATUS,
    ERROR_AUTHENTICATED,
    SET_REITING
} from '../constants/user'
import { SHOW_MINI_DIALOG } from '../constants/mini_dialog'
import axios from 'axios';
import { putStatusByKey, getStatusByKey } from '../../service/idb/status'

export function signin(payload) {
    return async (dispatch) => {
        try {
            const res = await axios.post('/users/signin?email='+payload.email+'&password='+payload.password);
            console.log(res.data)
            if(res.data!==undefined) {
                localStorage.userShoroAdmin = res.data
                await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SHOW_MINI_DIALOG,
                    payload: false
                })
                window.location.reload()
            }
        } catch(error) {
            console.log(error)
            await dispatch({
                type: ERROR_AUTHENTICATED,
                payload: true
            })
        }
    };
}

export function checkAuthenticated() {
    return async (dispatch) => {
        try {
            if (localStorage.userShoroAdmin) {
                dispatch ({type: AUTHENTICATED});
            } else {
                dispatch ({type: UNAUTHENTICATED});
            }
        } catch (error) {
            dispatch ({type: UNAUTHENTICATED});
        }
    };
}

export function setReiting(reiting) {
    return {
        type: SET_REITING,
        payload: reiting
    }
}

export function logout() {
    return async (dispatch) => {
        localStorage.removeItem('userShoroAdmin')
        dispatch({
            type: UNAUTHENTICATED,
        })
        window.location.reload()
    }
}

export function setStatus() {
    return async (dispatch) => {
        try {
            let res = {data: undefined}
            if(navigator.onLine){
                res = await axios.post(
                    '/users/status',
                    {},
                    {headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization':'Bearer '+localStorage.userShoroAdmin,
                    }});
                if((res===undefined||res.data===undefined)&&await getStatusByKey(1)!==undefined) {
                    res = await getStatusByKey(1)
                }
                await putStatusByKey(1, res.data)
            } else {
                res = await getStatusByKey(1)
            }
            if(res.data!==undefined) {
                await dispatch({
                    type: SET_STATUS,
                    payload: res.data
                })
            }
        } catch(error) {
            let res = await getStatusByKey(1)
            if(res!==undefined) {
                res = res.data
                await dispatch({
                    type: SET_STATUS,
                    payload: res
                })
            }
        }
    };
}