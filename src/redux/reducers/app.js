import { SHOW_DRAWER, SET_PROFILE } from '../constants/app'

const initialState = {
    drawer: false,
    profile: {},
}

export default function mini_dialog(state = initialState, action) {
    switch (action.type) {
        case SHOW_DRAWER:
            return {...state, drawer: action.payload}
        case SET_PROFILE:
            return {...state, profile: action.payload}
        default:
            return state
    }
}