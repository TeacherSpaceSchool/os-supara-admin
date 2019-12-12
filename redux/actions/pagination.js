import { NEXT, DISABLE } from '../constants/pagination'

export function next(data) {
    return {
        type: NEXT
    }
}
export function disable(data) {
    return {
        type: DISABLE
    }
}