import { ActionCreator } from 'redux';
import { FetchActions, IFetchRequestAction, IFetchRequestPayload, IFetchSuccesAction, IFetchSuccessPayload, IFetchFailureAction, IFetchFailuePayload } from './types';

export const request: ActionCreator<IFetchRequestAction> = (p: IFetchRequestPayload) => ({
    type: FetchActions.REQUEST,
    payload: p
});

export const succes: ActionCreator<IFetchSuccesAction> = (p: IFetchSuccessPayload) => ({
    type: FetchActions.SUCCESS,
    payload: p
});

export const failed: ActionCreator<IFetchFailureAction> = (p: IFetchFailuePayload) => ({
    type: FetchActions.FAILURE,
    payload: p
});