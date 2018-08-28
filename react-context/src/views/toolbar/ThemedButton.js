//import React from 'react';
//import ThemeContext from '../theme/ThemeContext';
import Button from './Button';
import withTheme from '../theme/withTheme';

/**
 * destructured theme context object for pass theme value
 */
/*
const ThemedButton = (props) => {
    return (
      <ThemeContext.Consumer>
        {({theme}) => <Button {...props} theme={theme} />}
      </ThemeContext.Consumer>
    );
};*/

const ThemedButton = withTheme(Button);

export default ThemedButton;