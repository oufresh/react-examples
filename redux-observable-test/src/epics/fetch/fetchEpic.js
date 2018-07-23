import { ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax';

import { fetchTileDone } from '../../modules/fetch/actionCreators';

const fetchEpic = (action$, state$) => action$.pipe(
    ofType('FETCH_TILE'),
    mergeMap(({ payload }) => {
        return ajax.get(`localhost:5000/tiles/${payload.z}/${payload.x}/${payload.y}`).pipe(
            map(response => fetchTileDone(payload.z, payload.x, payload.y, response))
        );
    }
))

export default fetchEpic;
