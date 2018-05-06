import React, { Component } from 'react';
import { FlexTest } from './views/FlexTest';
import { MClassElem } from './views/Multiple';
import { Animated } from './views/Animated';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.visible = false;
  }
  onClick = () => {
    this.visible = true;
  }
  render() {
    return (
      <div className="app">
        <h1 className="app-title">Welcome to React tests</h1>
        <FlexTest />
        <MClassElem className={"text-color"} />
        <button onClick={this.onClick}>show</button>
        <Animated visible={this.visible} />
      </div>
    );
  }
}

export default App;
