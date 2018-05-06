import React from 'react';
import './Multiple.css';

function classNames(classes) {
    return Object.entries(classes)
        .filter(([key, value]) => value)
        .map(([key, value]) => key)
        .join(' ');
}

const classes = {
    'first': true,
    'second': true,
  };

export const MClassElem = (props) => {
    if (props.className !== undefined)
        classes[props.className] = true;
    return (
        <div className={classNames(classes)}>
            <span>Sono una scritta di prova</span>
        </div>
    );
}