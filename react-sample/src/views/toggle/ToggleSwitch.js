import React from 'react';
import './ToggleSwitch.css';

const ToggleSwtich = (props) => {
    return (
        <label className="switch">
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            <span className="slider round"></span>
        </label>
    );
};

export default ToggleSwtich;