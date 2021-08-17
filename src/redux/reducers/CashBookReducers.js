import { ActionTypes } from "../constants/action-types";

const initialState = {
    totalBalance: 0,
    totalIn: 0,
    totalOut: 0,
    addItem: []
}

export const addCash = (state = initialState, {type, payload}) => {
    const current = new Date();
    switch (type) {
        case ActionTypes.CASH_IN:
            return { 
                ...state, 
                totalBalance: state.totalBalance + parseInt(payload.number), totalIn: state.totalIn + parseInt(payload.number),
                addItem: [...state.addItem,
                    {
                        id: Date.now(), 
                        amount: parseInt(payload.number), 
                        remark: payload.remark, 
                        addHour: `${current.getHours()}:${current.getMinutes()}`, 
                        balance: state.totalBalance + parseInt(payload.number),
                        type: 'in'
                    }]
            }
        case ActionTypes.CASH_OUT:
            return { 
                ...state, totalBalance: state.totalBalance - parseInt(payload.number), 
                totalOut: state.totalOut + parseInt(payload.number),
                addItem: [...state.addItem,
                    {
                        id: Date.now(), 
                        amount: parseInt(payload.number), 
                        remark: payload.remark, 
                        addHour: `${current.getHours()}:${current.getMinutes()}`, 
                        balance: state.totalBalance - parseInt(payload.number), 
                        type: 'out'
                    }]
            }
        default:
            return state
    }
}

export const addType = (state = '', {type, payload}) => {
    switch (type) {
        case ActionTypes.ADD_TYPE:
            return state = payload
        default:
            return state
    }
}