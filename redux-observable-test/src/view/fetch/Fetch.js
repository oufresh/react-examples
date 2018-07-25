//@flow
import React from 'react';
import { connect } from 'react-redux';
import { fetchTile } from '../../modules/fetch/actionCreators';

type FetchProps = {
    fetchTile: (z: number, x: number, y: number)=>void,
    fetching: boolean,
    error: boolean,
    tiles: Map<string,string>
};

const F = ({ fetchTile, fetching, tiles, error }:FetchProps) => {
    const t = tiles.get('012') ? tiles.get('012') : '';
    const resp = error === true ? 'Error request tile' : (fetching === true ? 'Fetching ' : t);
    return (
        <div>
            <h1>Is fetching: {fetching.toString()}</h1>
            <button disabled={fetching} onClick={() => { fetchTile(0,1,2); }}>Start fetch</button>
            <p>{resp}</p>
        </div>
    );
}

const Fetch = connect(
  ( state ) => { 
      return {fetching: state.fetchReducer.fetching, tiles: state.fetchReducer.tiles, error: state.fetchReducer.error };
    },
  { fetchTile }
)(F);

export default Fetch;