//@flow
import React from 'react';
import { connect } from 'react-redux';
import { fetchTile } from '../../modules/fetch/actionCreators';

type FetchProps = {
    fetchTile: (z: number, x: number, y: number)=>void,
    fetching: boolean,
    tiles: Map<string,string>
};

const F = ({ fetchTile, fetching, tiles }:FetchProps) => {
    return (
        <div>
            <h1>Is fetching: {fetching.toString()}</h1>
            <button disabled={fetching} onClick={() => { fetchTile(0,1,2); }}>Start fetch</button>
            <p>{fetching === true ? '' : '' +  (tiles.get('012') ? tiles.get('012') : '')}</p>
        </div>
    );
}

const Fetch = connect(
  ( state ) => { 
      return {fetching: state.fetchReducer.fetching, tiles: state.fetchReducer.tiles};
    },
  { fetchTile }
)(F);

export default Fetch;