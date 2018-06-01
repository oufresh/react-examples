//@flow

import React from 'react';
import './Button.css';

type Props = {
    theme?: string,
    onClick: Function
};

const Button = (props: Props) => {
    return (
        <button className={'themed-button ' + (props.theme ? props.theme : '')} onClick={props.onClick}>Themed button</button>
    );
};

export default Button;