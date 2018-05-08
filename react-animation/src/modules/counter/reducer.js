import * as Actions from './actionDefinitions';
import { StateRecord, initialCounterState } from './types';

export const counter = (state = initialCounterState, action) =>
{
    const { value } = state;

    switch (action.type) {
        case Actions.INCREASE:        
            return new StateRecord({
                value: value + 1 
            });
        case Actions.DECREASE:
            return new StateRecord({
                value: value - 1 
            });
        default:
            return state;
    }
}