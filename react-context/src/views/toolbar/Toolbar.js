import React from 'react';
import ThemedButton from './ThemedButton';
import User from './User';
import './Toolbar.css';

const Toolbar = (props) => {
    return (
      <div className="toolbar">
        <ThemedButton {...props}/>
        <User {...props} />
      </div>
    );
};

export default Toolbar;
