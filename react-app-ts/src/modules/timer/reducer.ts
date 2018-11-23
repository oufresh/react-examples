import update from 'immutability-helper';
import { Reducer } from 'redux';
import { IAction } from '../../helper/actions';
import { TimerActions } from './actionDefinitions';
import { initialValue, ITimer } from './types';

export function inc(timer: ITimer): ITimer {
    if (timer.running === true) {
        const newTimer = update(timer, {
            value: { $set: timer.value+1}
        });
        return newTimer;
    } else {
        return timer;
    }
}

export function start(timer: ITimer): ITimer {
    if (timer.running === false) {
        const newTimer = update(timer, {
            running: { $set: true },
            value: { $set: 0}
        });
        return newTimer;
    } else {
        return timer;
    }
}

export function stop(timer: ITimer): ITimer {
    if (timer.running === true) {
        const newTimer = update(timer, {
            running: { $set: false }
        });
        return newTimer;
    } else {
        return timer;
    }
}

export const timerReducer: Reducer<ITimer> = (
    state: ITimer = initialValue,
    action: IAction<TimerActions>
): ITimer => {
    switch (action.type)
    {
        case TimerActions.INC:
            return inc(state);
        case TimerActions.START:
            return start(state);
        case TimerActions.STOP:
            return stop(state);
        default:
            return state;
    }
}