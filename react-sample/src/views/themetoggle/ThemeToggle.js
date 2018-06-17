import React from 'react';
import ThemeContext from '../theme/ThemeContext';
import ToggleSwitch from '../toggle/ToggleSwitch';

const ThemeToggle = (props) => {
  return (
    <ThemeContext.Consumer>
            {({theme, toggleTheme}) => (
                <div>
                    <ToggleSwitch onChange={toggleTheme} />
                    <label>{'Theme: ' + theme}</label>
                </div>
            )}
    </ThemeContext.Consumer>
  );
};

export default ThemeToggle;