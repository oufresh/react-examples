import { FETCH_TILE, FETCH_TILE_DONE, FETCH_TILE_ERROR } from './actionDefinitions';

export const fetchReducer = (state = { tiles: new Map(), fetching: false, error: false }, action) => {
    switch (action.type) {
        case FETCH_TILE:
            return { tiles: state.tiles, fetching: true, error: false };
        case FETCH_TILE_DONE: {
            const tiles = state.tiles;
            state.tiles.set(''+action.payload.z+action.payload.x+action.payload.y, action.payload.tile);
            return { tiles: tiles, fetching: false, error: false };  
        }
        case FETCH_TILE_ERROR: {
            return { tiles: state.tiles, fetching: false, error: true };
        }
        default:
            return state;
    }
};