import { createStore, applyMiddleware } from 'redux';
import { StoreState } from '.';
import { value } from '../modules/value/reducer';
import { logger } from '../middlewares/logger/logger';
import { composeWithDevTools } from 'redux-devtools-extension';

/**
 * Using redux-dev-tools for chrome nneds to enable the store enhancer
 */

 /*
interface StWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

const composeEnhancers = (
 (window as StWindow).__REDUX_DEVTOOLS_EXTENSION__ && 
  (window as StWindow).__REDUX_DEVTOOLS_EXTENSION__() || compose);*/

const middlewares = [logger];

const initialStore = {
  value: 0
};

export const store = createStore<StoreState>(value, initialStore, composeWithDevTools(applyMiddleware(...middlewares)));