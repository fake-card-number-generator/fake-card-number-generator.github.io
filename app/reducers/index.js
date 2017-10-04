import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';
import { generateCardNumber } from '../utils';

const number = (state = generateCardNumber(), action) => {
    switch (action.type) {
        case types.GENERATE:
            return generateCardNumber();
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    number,
    routing
});

export default rootReducer;
