import {
    AUTHENTICATED,
    UNAUTHENTICATED,
    SET_PROFILE,
    SET_AUTH,
    ERROR_AUTHENTICATED
} from '../constants/user'
import {
    SHOW_MINI_DIALOG
} from '../constants/mini_dialog'
import Cookies from 'js-cookie';
import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../../src/singleton/client';
import Router from 'next/router'

export function signup(payload) {
    return async (dispatch) => {
        try {
            const client = new SingletonApolloClient().getClient()
            let result = await client.mutate({
                variables: payload,
                mutation : gql`
                    mutation ($phone: String!, $password: String!) {
                        signupuser(phone: $phone, password: $password) {
                            data,
                        }
                    }`})
            if(result.data.signupuser.data==='Проверьте данные')
                await dispatch({
                    type: ERROR_AUTHENTICATED,
                    payload: true
                })
            else {
                await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SHOW_MINI_DIALOG,
                    payload: false
                })
                window.location.reload()
            }
        } catch(error) {
            dispatch({
                type: ERROR_AUTHENTICATED,
                payload: true
            });
        }
    };
}

export function signin(payload) {
    return async (dispatch) => {
        try {
            const client = new SingletonApolloClient().getClient();
            let result = await client.mutate({
                variables: payload,
                mutation : gql`
                    mutation ($phone: String!, $password: String!) {
                        signinuser(phone: $phone, password: $password) {
                            data,
                        }
                    }`})
            if(result.data.signinuser.data==='Проверьте данные')
                await dispatch({
                    type: ERROR_AUTHENTICATED,
                    payload: true
                })
            else {
                await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SHOW_MINI_DIALOG,
                    payload: false
                })
                //window.location.reload()
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
            if (Cookies.get('jwt')) {
                dispatch ({type: AUTHENTICATED});
            } else {
                dispatch ({type: UNAUTHENTICATED});
            }
        } catch (error) {
            dispatch ({type: UNAUTHENTICATED});
        }
    };
}

export function setAuthenticated(auth) {
    return {
        type: SET_AUTH,
        payload: auth
    }
}

export function logout() {
    return async (dispatch) => {
        Cookies.remove('jwt');
        dispatch({
            type: UNAUTHENTICATED,
        })
        Router.push('/')
        //setTimeout(()=>{window.location.reload()},1000)


    }
}

export function setProfile() {
    return async (dispatch) => {
        try {
            const client = new SingletonApolloClient().getClient()
            let result = await client
                .query({
                    query: gql`
                    query {
                        getStatus {
                           role
                           status
                           phone
                           organization
                           _id
                          }
                    }`
                })
            await dispatch({
                type: SET_PROFILE,
                payload: result.data.getStatus
            })
        } catch(error) {
            console.error(error)
        }
    };
}