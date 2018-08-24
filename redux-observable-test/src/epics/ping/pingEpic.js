import { PING/*, PONG*/ } from '../../modules/ping/actionDefinitions';
import { pong } from '../../modules/ping/actionCreators';
import { ofType } from 'redux-observable';
import { mapTo, delay } from 'rxjs/operators';

/**
 * stream of action => stream of action ... in automatico è fatto
 * l'aciotn prodotta viene dispatchata perchè lla fine c'è .subscribe(disaptch)
 */

const pingEpic = action$ => action$.pipe(
  ofType(PING),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo(pong())
);

export default pingEpic;