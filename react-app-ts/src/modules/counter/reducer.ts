import update from 'immutability-helper';
import { Reducer } from 'redux'
import { IAction } from '../../helper/actions';
import { CounterActions } from './actionDefinitions';
import { ICounter, initialValue } from './types';

export function inc(counter: ICounter): ICounter {
    const newCounter = update(counter, {
        value: { $set: counter.value+1}
    })
    return newCounter;
}

export function dec(counter: ICounter): ICounter {
    const newCounter = update(counter, {
        value: { $set: counter.value-1}
    })
    return newCounter;
}

export const counterReducer: Reducer<ICounter> = (
    state: ICounter = initialValue,
    action: IAction<CounterActions>
): ICounter => {
    switch (action.type)
    {
        case CounterActions.INC:
            return inc(state);
        case CounterActions.DEC:
            return dec(state);
        default:
            return state;
    }
}