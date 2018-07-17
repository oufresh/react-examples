//@flow
import React from 'react';
import { connect } from 'react-redux';
import { ping } from '../../modules/ping/actionCreators';

type PingProps = {
    ping: ()=>void,
    isPinging: boolean
};

const P = ({ isPinging, ping }:PingProps) => {
    return (
        <div>
            <h1>is pinging: {isPinging.toString()}</h1>
            <button onClick={ping}>Start PING</button>
        </div>
    );
}

const Ping = connect(
  ({ isPinging }) => ({ isPinging }),
  { ping }
)(P);

export default Ping;