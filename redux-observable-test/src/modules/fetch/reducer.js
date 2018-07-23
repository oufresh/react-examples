import { FETCH_TILE, FETCH_TILE_DONE } from './actionDefinitions';

export const fetchReducer = (state = { tiles: new Map(), fetching: false }, action) => {
    switch (action.type) {
        case FETCH_TILE:
            return { tiles: state.tiles, fetching: true };
        case FETCH_TILE_DONE: {
            const tiles = state.tiles;
            state.tiles.set(''+action.payload.z+action.payload.x+action.payload.y, action.payload.tile);
            return { tiles: tiles, fetching: false };  
        }
        default:
            return state;
    }
};