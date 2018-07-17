# Redux Observalbe with React

Some test with redux-observable and react :)

## Notes

1. An Epic is the core primitive of redux-observable.
   It is a function which takes a stream of actions and returns a stream of actions. Actions in, actions out.
   It has roughly this type signature:

   ```javascript
   function (action$: Observable<Action>, state$: StateObservable<State>): Observable<Action>;
   ```

   While you'll most commonly produce actions out in response to some action you received in, that's not actually a requirement! Once you're inside your Epic, use any Observable patterns you desire as long as anything output from the final, returned stream, is an action.

2. The actions you emit will be immediately dispatched through the normal store.dispatch(), so under the hood redux-observable effectively does epic(action$, state$).subscribe(store.dispatch)