import { ActionCreator } from 'redux';
import { IDelayActionTypes, IDelayStartAction, IDelayStartPayload, IDelayStopAction } from './types';

export const startDelay: ActionCreator<IDelayStartAction> = (p: IDelayStartPayload) => ({
    type: IDelayActionTypes.START,
    payload: p
});

export const stopDelay: ActionCreator<IDelayStopAction> = () => ({
    type: IDelayActionTypes.STOP
});