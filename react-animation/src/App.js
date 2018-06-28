import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';
import ExampleComponent from './views/basic/Example';
import CustomComponent from './views/custom/CustomExample';
import Toggle from './views/containers/Toggle';
/*import { TodoList } from './views/cssTransition/CssTransitionExample';
import { TextAnimationEnterElem } from './views/cssTransition/EnterAnimation';
import { AnimatedMountComponent } from './views/cssTransition/AnimatedMount';
import ExpandBox from './views/cssTransition/ExpandBox';
import { AnimatedMountComponent } from './views/cssTransition/AnimatedMount';*/

const Home = () => <div />;

const Header = () => (
  <header>
    <nav>
      <ul style={{listStyle: 'none'}}>
        <li><Link to='/' replace>Home</Link></li>
        <li><Link to='/example' replace>ExampleComponent</Link></li>
        <li><Link to='/basic' replace>CustomComponent</Link></li>
        <li><Link to='/toggle' replace>Toggle switch</Link></li>
        <li><Link to='/todolist' replace>TodoList</Link></li>
        <li><Link to='/textenter' replace>TextAnimationEnterElem</Link></li>
        <li><Link to='/animatedmount' replace>AnimatedMountComponent</Link></li>
        <li><Link to='/expandbox' replace>ExpandBox</Link></li>
      </ul>
    </nav>
  </header>
);

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/example' component={ExampleComponent}/>
      <Route path='/basic' component={CustomComponent}/>
      <Route path='/toggle' component={Toggle} />
      {/*<Route path='/todolist' component={TodoList}/>
      <Route path='/textenter' render={props => <TextAnimationEnterElem text="prova text" {...props} />}/>
      <Route path='/animatedmount' component={AnimatedMountComponent}/>
<Route path='/expandbox' component={ExpandBox}/>*/}
    </Switch>
  </main>
);

class App extends React.Component {

  onRemoveItem = (item) => {
    console.log('Removed item ' + item);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React animation examples</h1>
        </header>
        <main className="App-main">
          <Header />
          <hr />
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
