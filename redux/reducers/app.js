import { SHOW_DRAWER, SET_FILTER, SET_SORT, SET_SEARCH, SET_IS_MOBILE_APP, SHOW_LOAD, SET_COUNT_BASKET } from '../constants/app'

const initialState = {
    drawer: false,
    search: '',
    filter: '',
    sort: '-updatedAt',
    isMobileApp: undefined,
    load: false,
    countBasket: 0
}

export default function mini_dialog(state = initialState, action) {
    switch (action.type) {
        case SHOW_DRAWER:
            return {...state, drawer: action.payload}
        case SET_SORT:
            return {...state, sort: action.payload}
        case SET_FILTER:
            return {...state, filter: action.payload}
        case SET_SEARCH:
            return {...state, search: action.payload}
        case SET_IS_MOBILE_APP:
            return {...state, isMobileApp: action.payload}
        case SHOW_LOAD:
            return {...state, load: action.payload}
        case SET_COUNT_BASKET:
            return {...state, countBasket: action.payload}
        default:
            return state
    }
}