# ReactJs Context basic example

Example of the context extracted from the react manual.

## Caveat

**Context uses reference identity to determine when to re-render**. The code below will re-render all consumers every time the Provider re-renders because a new object is always created for value:

```javascript
class App extends React.Component {
  render() {
    return (
      <Provider value={{something: 'something'}}>
        <Toolbar />
      </Provider>
    );
  }
}
```

To get around this, lift the value into the parent’s state:

```javascript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: {something: 'something'},
    };
  }

  render() {
    return (
      <Provider value={this.state.value}>
        <Toolbar />
      </Provider>
    );
  }
}
```