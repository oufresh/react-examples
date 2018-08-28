import React, { Component } from 'react';
import './App.css';
import ThemeContext from './views/theme/ThemeContext';
import UserContext from './user/UserContext';
import Toolbar from './views/toolbar/Toolbar';
import ThemeToggle from './views/themetoggle/ThemeToggle';
import ThemedList from './views/themedlist/ThemedList';

const names = ['Pippo', 'Pluto', 'Paperino'];

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
        <UserContext.Provider value={'Ciccio'}>
          <div className="app">
            <Toolbar />
            <br />
            <ThemeToggle />
            <br />
            <ThemedList elements={names} />
          </div>
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

export default App;
