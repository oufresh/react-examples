import { IAction } from '../../helper/actions';

export enum TimerActions {
    START = 'start@timer',
    STOP = 'stop@timer',
    INC = 'inc@timer'
};

export interface IStartAction extends IAction<TimerActions.START> {};
export interface IStopAction extends IAction<TimerActions.STOP> {};
export interface IIncAction extends IAction<TimerActions.INC> {};