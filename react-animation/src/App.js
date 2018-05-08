import * as React from 'react';
import { logo } from './logo.svg';
import './App.css';
import Counter from './views/counter/Counter';
import Text from './views/text/Text';
import RichText from './views/rte/RichText';
import { Table } from './views/table/Table';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export class App extends React.Component {
  render() {

    const userAgent = navigator.userAgent;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p>{userAgent}</p>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <hr />
        <Router>
          <div>
            <ul style={{textAlign:'left'}}>
              <li>
                <Link to="/text">Text</Link>
              </li>
              <li>
                <Link to="/counter">Counter</Link>
              </li>
              <li>
                <Link to="/rte">Rich text editor</Link>
              </li>
              <li>
                <Link to="/table">Table</Link>
              </li>
            </ul>
            <Route path="/text" component={Text} />
            <Route path="/counter" component={Counter} />
            <Route path="/rte" component={() => <RichText text={'<h1>Ciao titolo</h1><p>Paragrafo di prova!</p>'}/>} />
            <Route path="/table" component={Table} />
          </div>
        </Router>
      </div>
    );
  }
}

