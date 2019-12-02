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
import {
    SET_COUNT_BASKET
} from '../constants/app'
import Cookies from 'js-cookie';
import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../../src/singleton/client';
import Router from 'next/router'
import { SingletonStore } from '../../src/singleton/store';

export function signup(payload) {
    return async (dispatch) => {
        try {
            const client = new SingletonApolloClient().getClient()
            let result = await client.mutate({
                variables: payload,
                mutation : gql`
                    mutation ($phone: String!, $password: String!) {
                        signupuser(phone: $phone, password: $password) {
                           role
                           status
                           phone
                           organization
                           _id
                        }
                    }`})
            if(result.data.signupuser.role==='Проверьте данные')
                await dispatch({
                    type: ERROR_AUTHENTICATED,
                    payload: true
                })
            else {
                await dispatch({
                    type: SHOW_MINI_DIALOG,
                    payload: false
                })
                await Router.push('/')
                /*
                await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SET_PROFILE,
                    payload: result.data.signupuser
                })*/
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
                           role
                           status
                           phone
                           organization
                           _id
                        }
                    }`})
            if(result.data.signinuser.role==='Проверьте данные')
                await dispatch({
                    type: ERROR_AUTHENTICATED,
                    payload: true
                })
            else {
                await dispatch({
                    type: SHOW_MINI_DIALOG,
                    payload: false
                })
                await Router.push('/')
                window.location.reload()
                /*
                await dispatch({type: AUTHENTICATED});
                await dispatch({
                    type: SET_PROFILE,
                    payload: result.data.signinuser
                })*/
            }
        } catch(error) {
            console.error(error)
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

export function logout(reload) {
    return async (dispatch) => {
        await dispatch({
            type: UNAUTHENTICATED,
        })
        if(reload)
            await Router.push('/')
        await Cookies.remove('jwt');
        await dispatch({
            type: SET_COUNT_BASKET,
            payload: 0
        })
        await dispatch({
            type: SET_PROFILE,
            payload: {}
        })
        //setTimeout(()=>window.location.reload(),100)


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

export async function getProfile() {
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
        return result.data.getStatus
    } catch(error) {
        console.error(error)
    }
}