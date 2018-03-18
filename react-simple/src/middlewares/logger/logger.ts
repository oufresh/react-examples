import { MiddlewareAPI, Middleware, Dispatch, Store } from 'redux';
import { StoreState } from '../../store';
import { Action } from '../../modules/value/types';

export function logger() {
    const _logM: Middleware = ({ getState }: MiddlewareAPI) => 
    (next: Dispatch) => (action: Action) => {
        console.log('dispatching', action);
        let result = next(action);
        console.log('next state', getState());
        return result;
    };

    return _logM;
} 