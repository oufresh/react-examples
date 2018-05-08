import * as Actions from './actionDefinitions';

export const textChange = (text) => {
    return { type: Actions.TEXT_CHANGE, payload: {
        text: text
    } };
}
