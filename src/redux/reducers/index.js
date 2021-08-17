import { combineReducers } from 'redux';
import { addCash, addType } from './CashBookReducers'

const reducers = combineReducers({
    count: addCash,
    type: addType
});

export default reducers