import { ActionTypes } from "../constants/action-types";

const initialState = 0

export const addCash = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.CASH_IN:
            return state + payload
        case ActionTypes.CASH_OUT:
            return state - payload
        default:
            return state
    }
}