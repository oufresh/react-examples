import { ofType } from 'redux-observable';
import { mergeMap, map, filter, catchError } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs'
//import { of } from 'rxjs/Observable/of';

import { fetchTileDone, fetchTileError } from '../../modules/fetch/actionCreators';
import { FETCH_TILE } from '../../modules/fetch/actionDefinitions';

const fetchEpic = (action$, state$) => action$.pipe(
    filter(a => {
        console.log(a);
        return true;
    }),
    ofType(FETCH_TILE),
    mergeMap(({ payload }) => {
        return ajax.get(`localhost:5000/tiles/${payload.z}/${payload.x}/${payload.y}`).pipe(
            map(response => {
                    return fetchTileDone(payload.z, payload.x, payload.y, response);
                }
            ),
            catchError(error => {
                console.error("Error calling rest");
                return of(fetchTileError());
            })
        );
    }
))

export default fetchEpic;
