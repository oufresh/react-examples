import { Action } from 'redux';

export interface IPayloadedAction<TType, TPayload> {
    type: TType;
    payload: TPayload;
}
  
export interface IAction<TType> {
    type: TType;
}

export function createAction<TAction extends IAction<TAction["type"]>>(
    type: TAction["type"]
  ): () => Action<TAction["type"]> {
    return () => ({ type });
}

export function createPayloadedAction<
  TAction extends IPayloadedAction<TAction["type"], TAction["payload"]>
>(
  type: TAction["type"]
): (
  payload: TAction["payload"]
) => IPayloadedAction<TAction["type"], TAction["payload"]> {
  return (payload: TAction["payload"]) => ({
    type,
    payload
  });
}
