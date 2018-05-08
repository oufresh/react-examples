import * as React from 'react';
import './App.css';
import Counter from './views/containers/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter />
      </div>
    );
  }
}

export default App;
