import { createStore, applyMiddleware } from 'redux';
import todoApp from '../reducers/reducers';
import logger from '../middlewares/logger';
import dispinterceptor from '../middlewares/dispinterceptor';
import interceptor from '../middlewares/interceptor';

const store = createStore(todoApp,
    applyMiddleware(logger, interceptor, dispinterceptor)
);

export default store;