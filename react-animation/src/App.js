import React from 'react';
import './App.css';
//import ExampleComponent from './views/basic/Example';
//import CustomComponent from './views/custom/CustomExample';
//import { TodoList } from './views/cssTransition/CssTransitionExample';
import { TextCarousel } from './views/cssTransition/CarouselAnimation';

class App extends React.Component {

  onRemoveItem = (item) => {
    console.log('Removed item ' + item);
  }

  render() {
    //const items = ['pippo', 'pluto', 'paperino'];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React animation examples</h1>
        </header>
        <main className="App-main">
          <TextCarousel items={['pippo', 'pluto', 'paperino']}/>
        </main>
      </div>
    );
  }
}

export default App;
