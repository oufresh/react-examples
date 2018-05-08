import { Record } from 'immutable';

export const TextRecord = Record({
    text: ''
});

export const initialTextState = new TextRecord();