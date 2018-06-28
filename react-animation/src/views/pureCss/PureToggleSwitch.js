import React from 'react';
import './PureToggleSwitch.css';

const PureToggleSwtich = (props) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            <span className="slider round"></span>
        </label>
    );
};

export default PureToggleSwtich;