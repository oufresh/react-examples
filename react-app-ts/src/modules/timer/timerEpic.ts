import { Epic, ofType } from 'redux-observable'
import { Observable, interval } from 'rxjs';
import { mapTo, /*map,*/ switchMap, takeUntil } from 'rxjs/operators';
import { IAction } from "src/helper/actions";
import { TimerActions } from './actionDefinitions';

export const timerEpic: Epic<IAction<TimerActions>> = (action: Observable<IAction<TimerActions>>) => {
    return action.pipe(
        ofType(TimerActions.START),
        switchMap(() => {
            return interval(5000).pipe(takeUntil(action.pipe(ofType(TimerActions.STOP))));
        }),
        /*map((o: any) => {
            console.log(o);
            return o;
        }),*/
        mapTo({ type: TimerActions.INC })
    );
}
/*
export const timerEpic: Epic<IAction<TimerActions>> = (action: Observable<IAction<TimerActions>>) => action.pipe(
    ofType(TimerActions.START),
    delay(1000),
    mapTo({ type: TimerActions.STOP })
);
*/

/*
const startTicking = (actions, store) => 
  Observable.interval(1000)
    .map((i) => ({ type: 'TICK', i }))
    .takeUntil(actions.ofType('STOP_TICK'));
    */
   