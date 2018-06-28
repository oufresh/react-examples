import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './TodoList.css';

/*
In this component, when a new item is added to ReactCSSTransitionGroup it will get the example-enter CSS class and the example-enter-active CSS class added in the next tick. This is a convention based on the transitionName prop.
*/

export class TodoList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {items: ['hello', 'world', 'click', 'me']};
      this.handleAdd = this.handleAdd.bind(this);
    }
  
    handleAdd() {
      const newItems = this.state.items.concat([
        prompt('Enter some text')
      ]);
      this.setState({items: newItems});
    }
  
    handleRemove(i) {
      let newItems = this.state.items.slice();
      newItems.splice(i, 1);
      this.setState({items: newItems});
    }
  
    render() {
      const items = this.state.items.map((item, i) => (
        <CSSTransition
          key={item}
          timeout={500}
          classNames="fade"
        >
        <div key={item} onClick={() => this.handleRemove(i)}>
          {item}
        </div>
        </CSSTransition>
      ));
  
      return (
        <div>
          <button onClick={this.handleAdd}>Add Item</button>
          <TransitionGroup
            className="example"
            appear={true}
            timeout={500}>
            {items}
          </TransitionGroup>
        </div>
      );
    }
  }
/**
 * At the initial mount, all children of the ReactCSSTransitionGroup will appear but not enter. However, all children later added to an existing ReactCSSTransitionGroup will enter but not appear.
 * 
 */