import { Action } from 'redux';

export interface IDelay {
    waiting: boolean
};

export const initialValue: IDelay = {
    waiting: false
};

export enum IDelayActionTypes {
    START = "start@delay",
    STOP = "stop@delay"
};

export interface IDelayStartPayload {
    duration: number
}

export interface IDelayStartAction extends Action<IDelayActionTypes> {
    type: IDelayActionTypes.START;
    payload: IDelayStartPayload
};

export interface IDelayStopAction extends Action<IDelayActionTypes> {
    type: IDelayActionTypes.STOP;
};

export type IDelayAction = IDelayStartAction | IDelayStopAction;