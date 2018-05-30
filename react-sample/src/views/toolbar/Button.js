import React from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button className={'themed-button ' + (props.theme ? props.theme : '')} onClick={props.onClick}>Themed button</button>
    );
};

export default Button;