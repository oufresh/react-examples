import { Action } from 'redux';
import { createAction, IAction } from '../../helper/actions';
import { CounterActions } from './actionDefinitions';

export const incAction = createAction<IAction<CounterActions>>(CounterActions.INC);
export const decAction = createAction<IAction<CounterActions>>(CounterActions.DEC);

export function increment(): Action<CounterActions> {
    return incAction();
}

export function decrement(): Action<CounterActions> {
    return decAction();
}