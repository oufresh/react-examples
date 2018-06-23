import { Middleware, MiddlewareAPI, Dispatch, Action } from 'redux';

/**
 * function loggerMiddleware<S>(api: MiddlewareAPI<S>) ...
 * 
 * export interface Middleware {
 *  <S>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
 * }
 *
 * export function applyMiddleware(...middlewares: Middleware[]): GenericStoreEnhancer;
 */
function logger() {
    const loggerMiddleware: Middleware = ({ getState }: MiddlewareAPI) => 
        (next: Dispatch) => <A extends Action>(action: A) => {
            console.log('LOGGER: dispatching -> ', action);
            let result = next(action);
            console.log('LOGGER: next state -> ', getState());
            return result;
        };

    return loggerMiddleware;
}

export default logger;

    /***
     * Using a string type of project store
     * 
     * import { Middleware, MiddlewareAPI, Dispatch, Action } from "redux";
     * export interface ExtendedMiddleware<StateType> extends Middleware {
     *<S extends StateType>(api: MiddlewareAPI<S>): (next: Dispatch<S>) => Dispatch<S>;
     *}
     *
     * export const loggerMiddleware: ExtendedMiddleware<YourApplicationReduxStateTypeHere> = 
     * <S extends YourApplicationReduxStateTypeHere>(api: MiddlewareAPI<S>) =>
     * (next: Dispatch<S>) =>
     *   <A extends Action>(action: A): A => {
     *       console.log("Before");
     *       const result = next(action);
     *       console.log("After"); // Can use: api.getState()
     *       return result;
     *   };
     * 
     * 
     */