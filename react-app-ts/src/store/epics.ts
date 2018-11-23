import { combineEpics } from 'redux-observable';
import { timerEpic } from '../modules/timer/timerEpic';
import { delayEpic } from '../modules/delay/dealyEpic';
/**
 * redux-observable epics: take an observalbe of action and the store and return an observable of an action.
 * The actions you emit will be immediately dispatched through the normal store.dispatch(), 
 * so under the hood redux-observable effectively does epic(action$, state$).subscribe(store.dispatch).
 * The corrispetive reducer will be called.
 */

export const rootEpic = combineEpics(
    [timerEpic, delayEpic]
);