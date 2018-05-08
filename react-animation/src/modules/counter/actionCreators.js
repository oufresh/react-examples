import * as Actions from './actionDefinitions';

export const increase = () => {
    return { type: Actions.INCREASE };
}

export const decrease = () => {
    return { type: Actions.DECREASE };
}