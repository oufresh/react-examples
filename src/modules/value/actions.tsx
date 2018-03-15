import { Action, INCREMENT_VALUE, DECREMENT_VALUE } from './types';

/**
 * TODO guardare redux-action per gli actions creators
 */

export const increment = (): Action => {
    return {
        type: INCREMENT_VALUE
    };
};

export const decrement = (): Action => {
    return {
        type: DECREMENT_VALUE
    };
};