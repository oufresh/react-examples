import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Ping from './view/ping/Ping';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Ping />
        </div>
      </Provider>
    );
  }
}

export default App;
