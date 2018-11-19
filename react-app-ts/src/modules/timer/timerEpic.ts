import { Epic, ofType } from 'redux-observable'
import { Observable /*, interval*/ } from 'rxjs';
import { delay, mapTo /*, takeUntil*/ } from 'rxjs/operators';
import { IAction } from "src/helper/actions";
import { TimerActions } from './actionDefinitions';

// const source = interval(1000);
// const example = source.pipe(takeUntil(stop));

export const timerEpic: Epic<IAction<TimerActions>> = (action: Observable<IAction<TimerActions>>) => action.pipe(
    ofType(TimerActions.START),
    delay(1000),
    mapTo({ type: TimerActions.STOP })
);