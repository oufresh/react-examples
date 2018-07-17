import { applyMiddleware } from 'redux';
import { createStore} from 'redux';
import epicMiddleware from './epicMiddleware';
//import reducers from './reducers';
import pingEpic from '../epics/pingEpic';
import { pingReducer } from '../modules/ping/reducer';

const store = createStore(pingReducer,
    applyMiddleware(epicMiddleware)
);

epicMiddleware.run(pingEpic);

export default store;