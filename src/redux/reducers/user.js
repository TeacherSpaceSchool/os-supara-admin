import {
    AUTHENTICATED,
    UNAUTHENTICATED,
    SET_STATUS,
    ERROR_AUTHENTICATED,
    SET_REITING
} from '../constants/user'

const initialState = {
    authenticated: false,
    error: false,
    status: {},
    reiting: {},
}

export default function user(state = initialState, action) {
    switch (action.type) {

        case AUTHENTICATED:
            return { ...state, authenticated: true, error: false };

        case UNAUTHENTICATED:
            return { ...state, authenticated: false, error: false };

        case ERROR_AUTHENTICATED:
            return { ...state, error: action.payload };

        case SET_STATUS:
            return { ...state, status: action.payload };

        case SET_REITING:
            return { ...state, reiting: action.payload };

        default:
            return state

    }
}