import * as React from 'react';
import './App.css';
import Counter from './views/containers/Counter';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Counter initValue={0} text={'Counter value'} />
      </div>
    );
  }
}

export default App;
