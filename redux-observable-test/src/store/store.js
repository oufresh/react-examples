import { applyMiddleware } from 'redux';
import { createStore} from 'redux';
import { combineEpics } from 'redux-observable';
import epicMiddleware from './epicMiddleware';
import pingEpic from '../epics/ping/pingEpic';
import fetchEpic from '../epics/fetch/fetchEpic';
import reducers from './reducers';

const store = createStore(reducers,
    applyMiddleware(epicMiddleware)
);

const rootEpic = combineEpics(pingEpic, fetchEpic);

epicMiddleware.run(rootEpic);

export default store;