import { IAction } from '../../helper/actions';

export enum CounterActions {
    INC = "inc@counter",
    DEC = "dec@counter"
}

export interface IIncAction extends IAction<CounterActions.INC> {};
export interface IDecAction extends IAction<CounterActions.DEC> {};