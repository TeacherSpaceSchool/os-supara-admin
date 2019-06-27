import { SHOW_DRAWER, SET_PROFILE } from '../constants/app'
import axios from 'axios';
import FormData from 'form-data';

export function setProfile(profile) {
    return {
        type: SET_PROFILE,
        payload: profile
    }
}

export function showDrawer(show) {
    return {
        type: SHOW_DRAWER,
        payload: show
    }
}


export let getElsom= async (payload) => {
    try {
        const data = new FormData();
        data.append('wallet', payload.wallet);
        const res = await axios.post(
            'http://88.212.253.143:1000/payment/elsom/check',
            data);
        return res.data
    } catch(error) {
        console.error(error)
    }
}