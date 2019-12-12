import { NEXT, DISABLE } from '../constants/pagination'

const initialState = {
    count: 0,
    work: false
}

export default function mini_dialog(state = initialState, action) {
    switch (action.type) {
        case NEXT:
            return {...state, count: state.count+=1}
        case DISABLE:
            return {...state, work: false}
        default:
            return state
    }
}