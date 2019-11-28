import { SET_MINI_DIALOG, SHOW_MINI_DIALOG } from '../constants/mini_dialog'

export function setMiniDialog(title,child) {
    return {
        type: SET_MINI_DIALOG,
        payload: {title: title, child: child}
    }
}

export function showMiniDialog(show) {
    return {
        type: SHOW_MINI_DIALOG,
        payload: show
    }
}
