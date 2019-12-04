import React, { Component } from 'react';
import './App.css';

window.onbeforeunload = function (event: any) {
  var message = 'Important: Please click on \'Save\' button to leave this page.';
  if (typeof event == 'undefined') {
      event = window.event;
  }
  if (event) {
      event.returnValue = message;
  }
  return message;
};

class App extends Component {
  render() {
    return (
      <div className="App">
      </div>
    );
  }
}

export default App;
