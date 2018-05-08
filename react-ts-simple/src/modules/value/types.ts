export const INCREMENT_VALUE = 'INCREMENT@value';
export const DECREMENT_VALUE = 'DECREMENT@value';
export interface ValueAction {
    type: typeof INCREMENT_VALUE | typeof DECREMENT_VALUE;
}
