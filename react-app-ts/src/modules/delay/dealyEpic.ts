import { Epic, ofType } from 'redux-observable'
import { Observable, timer } from 'rxjs';
import { mapTo, switchMap, takeUntil } from 'rxjs/operators';
import { IDelayActionTypes, IDelayAction, IDelayStartAction } from "./types";
import { AnyAction } from 'redux';

export const delayEpic: Epic<IDelayAction> = (action: Observable<IDelayAction>) => {
    return action.pipe(
        ofType(IDelayActionTypes.START),
        switchMap((act: IDelayAction) => {
            const is = act as IDelayStartAction;
            return timer(is.payload.duration).pipe(takeUntil(action.pipe(ofType(IDelayActionTypes.STOP))));
        }),
        mapTo({ type: IDelayActionTypes.STOP })
    );
}