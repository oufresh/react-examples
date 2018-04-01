import * as React from 'react';
import './App.css';
import { ThemeProvider } from './view/theme/styled-components';
import { theme } from './view/theme';

import Hello from './view/components/Hello';
import Hello2 from './view/components/Hello2';

const logo = require('./logo.svg');

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <article>
            <Hello name="TypeScript con style file css" enthusiasmLevel={10} />
          </article>
        </div>
        <ThemeProvider theme={theme}>
          <Hello2 name="TypeScript con styled-component e theme" enthusiasmLevel={10} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
