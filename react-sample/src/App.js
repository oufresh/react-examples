import React, { Component } from 'react';
import './App.css';
import ThemeContext from './views/theme/ThemeContext';
import Toolbar from './views/toolbar/Toolbar';
import ThemeToggle from './views/themetoggle/ThemeToggle';

class App extends Component {
  constructor(props, context)
  {
    super(props, context);
    this.state = {
      theme: 'light',
      checked: false,
      toggleTheme: this.toggleTheme
    };

    //this.toggleTheme = this.toggleTheme.bind(this);
    //this.onToggleSwitch = this.onToggleSwitch.bind(this);
  }

  toggleTheme = () =>
  {
    this.setState(state => {
        let st = state;
        st.theme = state.theme === 'light' ? 'dark' : 'light';
        return st;
      }
    );
  }

  /*onToggleSwitch()
  {
    this.setState(state => {
      let st = state;
      st.checked = !state.checked;
      return st;
    });
  }*/

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        <div className="app">
          <Toolbar />
          <br />
          <ThemeToggle />
        </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
