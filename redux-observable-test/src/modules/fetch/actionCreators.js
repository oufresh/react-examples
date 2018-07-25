import { FETCH_TILE, FETCH_TILE_DONE, FETCH_TILE_ERROR } from './actionDefinitions';

export const fetchTile = (z, x, y) => ({ type: FETCH_TILE, payload: { z, x, y } });

export const fetchTileDone = (z, x, y, tile) => ({ type: FETCH_TILE_DONE, payload: { z, x, y, tile}});

export const fetchTileError = () => ({ type: FETCH_TILE_ERROR, payload: { }});