import { Action, INCREMENT_VALUE, DECREMENT_VALUE } from './types';
import { StoreState } from '../../store';

export const value = (state: StoreState, action: Action): StoreState => {
    switch (action.type) {
        case INCREMENT_VALUE:
            return { ...state, value: state.value + 1 };
        case DECREMENT_VALUE:
            return { ...state, value: state.value - 1 };
        default:
            return state;
    }
};