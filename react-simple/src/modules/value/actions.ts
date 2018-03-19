import { ValueAction, INCREMENT_VALUE, DECREMENT_VALUE } from './types';

/**
 * TODO guardare redux-action per gli actions creators
 */

export const increment = (): ValueAction => {
    return {
        type: INCREMENT_VALUE
    };
};

export const decrement = (): ValueAction => {
    return {
        type: DECREMENT_VALUE
    };
};