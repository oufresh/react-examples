import * as React from 'react';
import { Provider } from 'react-redux';
import * as style from './App.css';
import { store } from './store/store';
import { CounterContainerConnected } from './views/counter/CounterContainer';
import { TimerContainerConnected } from './views/timer/TimerContainer';
import { DelayContainerConnected } from './views/delay/DelayContainer';

class App extends React.Component {
  public render() {
    return (
      <div className={style.App}>
        <Provider store={store}>
          <div>
            <CounterContainerConnected name={"prova"}/>
            <hr />
            <TimerContainerConnected />
            <hr />
            <DelayContainerConnected />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
