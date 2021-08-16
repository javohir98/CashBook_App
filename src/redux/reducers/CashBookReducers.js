import { ActionTypes } from "../constants/action-types";

const initialState = {
    totalBalance: 1500000,
    totalIn: 450000,
    totalOut: 128000,
    addItem: []
}

export const addCash = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.CASH_IN:
            return { 
                ...state, 
                totalBalance: state.totalBalance + payload, totalIn: state.totalIn + payload,
                addItem: [...state.addItem,{id: Date.now(), amount: payload, remark: 'Test', type: 'in'}]
            }
        case ActionTypes.CASH_OUT:
            return { 
                ...state, totalBalance: state.totalBalance - payload, 
                totalOut: state.totalOut + payload,
                addItem: [...state.addItem,{id: Date.now(), amount: payload, remark: 'Test', type: 'out'}]
            }
        default:
            return state
    }
}