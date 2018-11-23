import { Epic, ofType } from 'redux-observable'
import { Observable, timer } from 'rxjs';
import { mapTo, switchMap, takeUntil } from 'rxjs/operators';
import { IDelayActionTypes, IDelayStartAction } from "./types";
import { AnyAction } from 'redux';

export const delayEpic: Epic<AnyAction> = (action: Observable<AnyAction>) => {
    return action.pipe(
        ofType(IDelayActionTypes.START),
        switchMap((act: IDelayStartAction) => {
            return timer(act.payload.duration).pipe(takeUntil(action.pipe(ofType(IDelayActionTypes.STOP))));
        }),
        mapTo({ type: IDelayActionTypes.STOP })
    );
}