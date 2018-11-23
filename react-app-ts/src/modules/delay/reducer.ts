import update from 'immutability-helper';
import { Reducer } from 'redux';
import { IDelayAction, IDelayActionTypes } from './types';
import { IDelay, initialValue } from './types';

export const delayReducer: Reducer<IDelay> = (
    state: IDelay = initialValue,
    action: IDelayAction
): IDelay => {
    switch (action.type)
    {
        case IDelayActionTypes.START:
            if (state.waiting === false) {
                return update(state, {
                    waiting: {
                        $set: true
                    }
                });
            }
            else {
                return state;
            }
        case IDelayActionTypes.STOP:
            if (state.waiting === true) {
                return update(state, {
                    waiting: {
                        $set: false
                    }
                });
            }
            else {
                return state;
            }
        default:
            return state;
    }
}