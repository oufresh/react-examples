import { combineReducers } from 'redux';
import { pingReducer } from '../modules/ping/reducer';
import { fetchReducer } from '../modules/fetch/reducer';

export default combineReducers({pingReducer, fetchReducer});