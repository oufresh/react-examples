import { Middleware, MiddlewareAPI, Action, AnyAction } from 'redux';

/**
 * Promise middleware adds support for dispatching promises.
 */

type PromiseDispatch = <T extends Action>(promise: Promise<T>) => Promise<T>;

function promise() {
  const promiseMiddleware: Middleware<PromiseDispatch> = ({
    dispatch
  }: MiddlewareAPI) => next => <T extends Action>(
    action: AnyAction | Promise<T>
  ) => {
    if (action instanceof Promise) {
      action.then(dispatch);
      return action;
    }

    return next(action);
  };

  return promiseMiddleware;
}

export default promise;