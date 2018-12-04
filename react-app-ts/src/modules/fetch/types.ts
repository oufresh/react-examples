import { Action } from 'redux';

export enum FetchActions {
    REQUEST = "request@fetch",
    ABORT = "abort@fetch",
    SUCCESS = "success@fetch",
    FAILURE = "failure@fetch"
}

export enum RequestTypes {
    GET = "GET",
    PUT = "PUT",
    POST = "POST",
    DELETE = "DELETE"
};

export interface IFetchRequestPayload {
    request: RequestTypes;
    url: string;
    body: any;
}

export interface IFetchRequestAction extends Action<FetchActions> {
    type: FetchActions.REQUEST;
    payload: IFetchRequestPayload;
};

export interface IFetchSuccessPayload {
    body: any;
    contentType: string;
}

export interface IFetchSuccesAction extends Action<FetchActions> {
    type: FetchActions.SUCCESS;
    payload: IFetchSuccessPayload;
}

export interface IFetchFailuePayload {
    statusCode: any;
    error: string;
}

export interface IFetchFailureAction extends Action<FetchActions> {
    type: FetchActions.FAILURE;
    payload: IFetchFailuePayload
}

export interface IFetchAbortPayload {
    text: string;
}

export interface IFetchAbortACtion extends Action<FetchActions> {
    type: FetchActions.ABORT;
}