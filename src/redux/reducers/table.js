import {
    GET_DATA,
    GET_IDS,
    SET_SELECTED,
    SET_POINT,
    SET_OLD_FILE,
    SET_DELETED_ID,
    SET_TYPE_STATISTIC
} from '../constants/table'

const initialState = {
    count: 0,
    page: 0,
    data: [],
    data1: [],
    row: [],
    search: '',
    name: '',
    sort: '',
    selected: -1,
    ids: {},
    point1: {},
    deletedId: '',
    oldFile: '',
    typeStatistic: {what: 'Выбрать'}
}

export default function user(state = initialState, action) {
    switch (action.type) {

        case GET_IDS:
            return {
                ...state,
                ids: action.payload
            };

        case SET_SELECTED:
            return {
                ...state,
                selected: action.payload
            };

        case GET_DATA:
            return {
                ...state,
                count: action.payload.count,
                page: action.payload.page,
                data: action.payload.data,
                data1: action.payload.data1,
                row: action.payload.row,
                search: action.payload.search,
                name: action.payload.name,
                sort: action.payload.sort
            };

        case SET_POINT:
            return {
                ...state,
                point1: action.payload,
            };

        case SET_OLD_FILE:
            return {
                ...state,
                oldFile: action.payload,
            };

        case SET_DELETED_ID:
            return {
                ...state,
                deletedId: action.payload,
            };

        case SET_TYPE_STATISTIC:
            return {
                ...state,
                typeStatistic: action.payload,
            };

        default:
            return state

    }
}