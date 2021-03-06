import { ActionTypes } from '../constants/action-types'

export const setCashIn = (event) => {
    return {
        type: ActionTypes.CASH_IN,
        payload: event
    }
}

export const setCashOut = (event) => {
    return {
        type: ActionTypes.CASH_OUT,
        payload: event
    }
}

export const setType = (event) => {
    return {
        type: ActionTypes.ADD_TYPE,
        payload: event
    }
}