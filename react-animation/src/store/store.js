import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { counter } from '../modules/counter/reducer';
import { text } from '../modules/text/reducer';
import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';

export const StateRecord = Record({
    value: 0
});

const rootReducer = combineReducers({
    counter,
    text
});

export const store = createStore(rootReducer, applyMiddleware(logger));
