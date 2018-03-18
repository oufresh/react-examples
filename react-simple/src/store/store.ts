import { createStore, applyMiddleware, compose } from 'redux';
import { StoreState } from '.';
import { value } from '../modules/value/reducer';
import { logger } from '../middlewares/logger/logger';

/**
 * Using redux-dev-tools for chrome nneds to enable the store enhancer
 */

interface StWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: Function;
}

const enhancers = compose(
  (window as StWindow).__REDUX_DEVTOOLS_EXTENSION__ && (window as StWindow).__REDUX_DEVTOOLS_EXTENSION__()
);

const initialStore = {
  value: 0
};

const middlewares = [logger];

export const store = createStore<StoreState>(value, initialStore, applyMiddleware(middlewares));