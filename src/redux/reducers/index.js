import { combineReducers } from 'redux';
import { addCash } from './CashBookReducers'

const reducers = combineReducers({
    count: addCash,
});

export default reducers