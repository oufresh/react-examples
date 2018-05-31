import React, { Component } from 'react';
import { FlexTest } from './views/FlexTest';
import { MClassElem } from './views/Multiple';
import ListTest from './views/ListTest';
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
		<br />
        <MClassElem className={"text-color"} />
		<br />
		<ListTest />
      </div>
    );
  }
}

export default App;
