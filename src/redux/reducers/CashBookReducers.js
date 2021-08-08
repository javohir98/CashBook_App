import { ActionTypes } from "../constants/action-types";

const initialState = {
    totalBalance: 1500000,
    totalIn: 450000,
    totalOut: 128000
}

export const addCash = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.CASH_IN:
            return { ...state, totalBalance: state.totalBalance + payload, totalIn: state.totalIn + payload}
        case ActionTypes.CASH_OUT:
            return { ...state, totalBalance: state.totalBalance - payload, totalOut: state.totalOut + payload}
        default:
            return state
    }
}