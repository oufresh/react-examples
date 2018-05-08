import { createSelector } from 'reselect';

export const getCounter = (store) => 
{
    return store.get('counter').value;
}

export const getCounterRoot = (store) => {
    return store.get('counter');
}

export const getCounterState = createSelector([getCounterRoot], (state) => state.value);
