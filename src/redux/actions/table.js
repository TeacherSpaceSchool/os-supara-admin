import {
    GET_DATA,
    SET_TYPE_STATISTIC,
    GET_IDS,
    SET_SELECTED,
    SET_POINT,
    SET_DELETED_ID,
    SET_OLD_FILE
} from '../constants/table'
import {
    skip
} from '../constants/other'
import axios from 'axios';
import FormData from 'form-data';

export function setData(payload) {
    return async (dispatch) => {
        try {
            const data = new FormData();
            let _headers;
            data.append('id', payload.id);
            data.append('search', payload.search);
            data.append('sort', payload.sort);
            data.append('skip', JSON.stringify(payload.page*skip));
            data.append('name', payload.name);
            data.append('new', JSON.stringify(payload.data));
            if(payload.oldFile != undefined){
                data.append('oldFile', payload.oldFile);
            }
            if(payload.oldFileWhatermark != undefined){
                data.append('oldFileWhatermark', payload.oldFileWhatermark);
            }
            if (payload.file != undefined) {
                data.append('fileLength', payload.file.length);
                for(let i=0; i<payload.file.length; i++){
                    data.append('file'+i, payload.file[i]);
                    data.append('fileName'+i, payload.file[i].name);
                }
                _headers = {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + localStorage.userShoroAdmin,
                }
            } else {
                _headers = {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization':'Bearer '+localStorage.userShoroAdmin,
                }
            }
            const res = await axios.post(
                '/data/add',
                data,
                {headers: _headers});
            let row = [];
            for(let i = 0; i<res.data.row.length; i++){
                row.push({
                    name: res.data.row[i],
                    options: {
                        filter: true,
                        sort: true,
                    }
                })
            }
            let data1 = []
            if(payload.name=='Реализатор'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0], res.data.data[i][1], res.data.data[i][2]]
            }
            else if(payload.name=='Организатор'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0], res.data.data[i][1]]
            }
            else if(payload.name=='Завсклада'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0]]
            }
            else data1 = JSON.parse(JSON.stringify(res.data.data))
            row.unshift('№')
            for(let i=0; i<res.data.data.length; i++){
                data1[i].unshift((payload.page*skip+i+1).toString())
            }
            payload = {
                count: res.data.count,
                page: payload.page,
                data: res.data.data,
                data1: data1,
                row: row,
                search: payload.search,
                name: payload.name,
                sort: payload.sort
            }
            dispatch({
                type: GET_DATA,
                payload: payload
            })
        } catch(error) {
            console.error(error)
        }
    };
}

export function addData(payload) {
    return async (dispatch) => {
        try {
            const data = new FormData();
            let _headers;
            data.append('search', payload.search);
            data.append('sort', payload.sort);
            data.append('skip', JSON.stringify(payload.page*skip));
            data.append('name', payload.name);
            data.append('new', JSON.stringify(payload.data));
            if (payload.file != undefined) {
                data.append('fileLength', payload.file.length);
                for(let i=0; i<payload.file.length; i++){
                    data.append('file'+i, payload.file[i]);
                    data.append('fileName'+i, payload.file[i].name);
                }
                _headers = {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization': 'Bearer ' + localStorage.userShoroAdmin
                }
            } else {
                _headers = {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization':'Bearer '+localStorage.userShoroAdmin,
                }
            }
            const res = await axios.post(
                '/data/add',
                data,
                {headers: _headers});
            let row = [];
            for(let i = 0; i<res.data.row.length; i++){
                row.push({
                    name: res.data.row[i],
                    options: {
                        filter: true,
                        sort: true,
                    }
                })
            }
            let data1 = []
            if(payload.name=='Реализатор'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0], res.data.data[i][1], res.data.data[i][2]]
            }
            else if(payload.name=='Организатор'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0], res.data.data[i][1]]
            }
            else if(payload.name=='Завсклада'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0]]
            }
            else data1 = JSON.parse(JSON.stringify(res.data.data))
            row.unshift('№')
            for(let i=0; i<res.data.data.length; i++){
                data1[i].unshift((payload.page*skip+i+1).toString())
            }
            payload = {
                count: res.data.count,
                page: payload.page,
                data: res.data.data,
                data1: data1,
                row: row,
                search: payload.search,
                name: payload.name,
                sort: payload.sort
            }
            dispatch({
                type: GET_DATA,
                payload: payload
            })
        } catch(error) {
            console.error(error)
        }
    };
}

export function setSelected(payload) {
    return {
        type: SET_SELECTED,
        payload: payload
    }
}

export function setTypeStatistic(payload) {
    return {
        type: SET_TYPE_STATISTIC,
        payload: payload
    }
}

export function setPoint(payload) {
    return {
        type: SET_POINT,
        payload: payload
    }
}

export function setDeletedId(payload) {
    return {
        type: SET_DELETED_ID,
        payload: payload
    }
}

export function setOldFile(payload) {
    return {
        type: SET_OLD_FILE,
        payload: payload
    }
}

export function getIds(payload) {
    return async (dispatch) => {
        try {
            const data = new FormData();
            data.append('name', payload);
            const res = await axios.post(
                '/data/getIds',
                data,
                {headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization':'Bearer '+localStorage.userShoroAdmin,
                }});
            dispatch({
                type: GET_IDS,
                payload: res.data
            })
        } catch(error) {
            console.error(error)
        }
    };
}

export function getData(payload) {
    return async (dispatch) => {
        try {
            if(payload.name===''){
                payload = {
                    count: 0,
                    page: 0,
                    data: [],
                    data1: [],
                    row: [],
                    search: payload.search,
                    name: payload.name,
                    sort: payload.sort
                }
                dispatch({
                    type: GET_DATA,
                    payload: payload
                })
            } else {
                const data = new FormData();
                data.append('search', payload.search);
                data.append('sort', payload.sort);
                data.append('skip', JSON.stringify(payload.page*skip));
                data.append('name', payload.name);
                const res = await axios.post(
                    '/data/get',
                    data,
                    {headers: {
                        'accept': 'application/json',
                        'Accept-Language': 'en-US,en;q=0.8',
                        'X-Requested-With': 'XMLHttpRequest',
                        'Authorization':'Bearer '+localStorage.userShoroAdmin,
                    }});
                let row = [];
                for(let i = 0; i<res.data.row.length; i++){
                    row.push({
                        name: res.data.row[i],
                        options: {
                            filter: true,
                            sort: true,
                        }
                    })
                }
                let data1 = []
                if(payload.name=='Реализатор'){
                    for(let i=0; i<res.data.data.length; i++)
                        data1[i] = [res.data.data[i][0], res.data.data[i][1], res.data.data[i][2]]
                }
                else if(payload.name=='Организатор'){
                    for(let i=0; i<res.data.data.length; i++)
                        data1[i] = [res.data.data[i][0], res.data.data[i][1]]
                }
                else if(payload.name=='Завсклада'){
                    for(let i=0; i<res.data.data.length; i++)
                        data1[i] = [res.data.data[i][0]]
                }
                else data1 = JSON.parse(JSON.stringify(res.data.data))
                row.unshift('№')
                for(let i=0; i<res.data.data.length; i++){
                    data1[i].unshift((payload.page*skip+i+1).toString())
                }
                payload = {
                    count: res.data.count,
                    page: payload.page,
                    data: res.data.data,
                    data1: data1,
                    row: row,
                    search: payload.search,
                    name: payload.name,
                    sort: payload.sort
                }
                dispatch({
                    type: GET_DATA,
                    payload: payload
                })
            }
        } catch(error) {
            console.error(error)
        }
    };
}

export const getDataSimple = async (payload) => {
        try {
            const data = new FormData();
            data.append('name', payload.name);
            if(payload.data!==undefined)
                data.append('data', JSON.stringify(payload.data));
            const res = await axios.post(
                '/data/get',
                data,
                {headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization':'Bearer '+localStorage.userShoroAdmin,
                }});
            return res.data
        } catch(error) {
            console.error(error)
        }
}

export function deleteData(payload) {
    return async (dispatch) => {
        try {
            const data = new FormData();
            data.append('search', payload.search);
            data.append('sort', payload.sort);
            data.append('skip', JSON.stringify(payload.page*skip));
            data.append('name', payload.name);
            data.append('deleted', payload.deleted);
            if(payload.oldFile != undefined && payload.oldFile.length > 0){
                data.append('oldFile', payload.oldFile);
            }
            const res = await axios.post(
                '/data/delete',
                data,
                {headers: {
                    'accept': 'application/json',
                    'Accept-Language': 'en-US,en;q=0.8',
                    'X-Requested-With': 'XMLHttpRequest',
                    'Authorization':'Bearer '+localStorage.userShoroAdmin,
                }});
            let row = [];
            for(let i = 0; i<res.data.row.length; i++){
                row.push({
                    name: res.data.row[i],
                    options: {
                        filter: true,
                        sort: true,
                    }
                })
            }
            let data1 = []
            if(payload.name=='Реализатор'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0], res.data.data[i][1], res.data.data[i][2]]
            }
            else if(payload.name=='Организатор'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0], res.data.data[i][1]]
            }
            else if(payload.name=='Завсклада'){
                for(let i=0; i<res.data.data.length; i++)
                    data1[i] = [res.data.data[i][0]]
            }
            else data1 = JSON.parse(JSON.stringify(res.data.data))
            row.unshift('№')
            for(let i=0; i<res.data.data.length; i++){
                data1[i].unshift((payload.page*skip+i+1).toString())
            }
            payload = {
                count: res.data.count,
                page: payload.page,
                data: res.data.data,
                data1: data1,
                row: row,
                search: payload.search,
                name: payload.name,
                sort: payload.sort
            }
            dispatch({
                type: GET_DATA,
                payload: payload
            })
        } catch(error) {
            console.error(error)
        }
    };
}