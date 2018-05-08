import * as Actions from './actionDefinitions';
import { TextRecord, initialTextState } from './types';

export const text = (state = initialTextState, action) =>
{
    switch (action.type) {
        case Actions.TEXT_CHANGE:        
            return new TextRecord({
                text: action.payload.text
            });
        default:
            return state;
    }
}