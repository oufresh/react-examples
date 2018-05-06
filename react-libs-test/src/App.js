import React, { Component } from 'react';
import { FlexTest } from './views/FlexTest';
import { MClassElem } from './views/Multiple';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title">Welcome to React tests</h1>
        <FlexTest />
        <MClassElem className={"text-color"} />
      </div>
    );
  }
}

export default App;
