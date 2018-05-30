import React from 'react';
import ThemedButton from './ThemedButton';

const Toolbar = (props) => {
    return (
      <div>
        <ThemedButton {...props}/>
      </div>
    );
};

export default Toolbar;
