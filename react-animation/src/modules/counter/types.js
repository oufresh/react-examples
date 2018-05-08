import { Record } from 'immutable';

export const StateRecord = Record({
    value: 0
});

export const initialCounterState = new StateRecord();