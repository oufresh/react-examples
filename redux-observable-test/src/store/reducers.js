import { combineReducers } from 'redux';
import { pingReducer } from '../modules/ping/reducer';

export default combineReducers(pingReducer);