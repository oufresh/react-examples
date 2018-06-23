import * as React from 'react';
import './App.css';
import Counter from './views/containers/Counter';
import RespArea from './views/components/message/RespArea';
import CheckBox from './views/components/checkbox/CheckBox';
import { Message } from './views/components/message/Message';

class App extends React.Component {

  state: {
    checked: boolean,
    messages: Array<Message>
  };

  constructor(p: any, c: any) {
    super(c, p);
    this.onChange = this.onChange.bind(this);
    this.onNewMessage = this.onNewMessage.bind(this);
    this.onRemoveMessage = this.onRemoveMessage.bind(this);

    this.state = {
      checked: false,
      messages: []
    };
  }

  onChange() {
    let st = this.state;
    st.checked = !st.checked;
    this.setState(st);
  }

  onNewMessage() {
    let msg: Message = {
      id: 'Message ' + this.state.messages.length,
      success: true,
      text: 'Text Message ' + this.state.messages.length,
      title: 'Title ' + this.state.messages.length
    };

    let st = this.state;
    st.messages.push(msg);
    this.setState(st);
  }

  onRemoveMessage(id: string) {
    let st = this.state;
    st.messages = st.messages.filter(msg => msg.id !== id);
    this.setState(st);
  }

  render() {
    return (
      <div className="App">
        <Counter />
        <RespArea messages={this.state.messages} onRemoveMessage={this.onRemoveMessage}/>
        <hr />
        <CheckBox checked={this.state.checked} title="titolo" onChange={this.onChange}/>
        <hr />
        <button onClick={this.onNewMessage}>New Message</button>
      </div>
    );
  }
}

export default App;
