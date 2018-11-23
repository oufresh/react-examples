import { applyMiddleware, combineReducers } from 'redux';
import { createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware } from 'redux-observable';
import { counterReducer } from '../modules/counter/reducer';
import { timerReducer } from '../modules/timer/reducer';
import { rootEpic } from './epics';
import { IAppState } from './types';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  counter: counterReducer,
  timer: timerReducer
});

const epicMiddleware = createEpicMiddleware();

function configureStore(
    initialState?: IAppState
  ): Store {
    // create the composing function for our middlewares
    const composeEnhancers = composeWithDevTools({})
  
    // We'll create our store with the combined reducers/sagas, and the initial Redux state that
    // we'll be passing from our entry point.
    const ret = createStore(
        rootReducer,
      initialState,
      composeEnhancers(applyMiddleware(epicMiddleware, logger))
    )

    epicMiddleware.run(rootEpic);
  
    return ret;
  }

const store = configureStore();

// export store singleton instance
export { store };