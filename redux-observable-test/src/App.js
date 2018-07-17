import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './store/store';
import Ping from './view/ping/Ping';
import { Switch, Route, Link } from 'react-router-dom';

const Home = () => <div />;

const Header = () => (
  <header>
    <nav>
      <ul style={{listStyle: 'none'}}>
        <li><Link to='/' replace>Home</Link></li>
        <li><Link to='/ping' replace>Ping</Link></li>
      </ul>
    </nav>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/ping' component={Ping}/>
    </Switch>
  </main>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header />
          <hr />
          <Main />
        </div>
      </Provider>
    );
  }
}

export default App;
