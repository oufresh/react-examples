import * as React from 'react';
import './App.css';
import Counter from './views/containers/Counter';
import RespArea from './views/components/message/RespArea';
import CheckBox from './views/components/checkbox/CheckBox';
import { Message } from './views/components/message/Message';
import CheckGroup, { CheckBoxData } from './views/components/checkgroup/CheckGroup';

class App extends React.Component {

  state: {
    checked: boolean,
    messages: Array<Message>,
    checks: Map<string, boolean>
  };

  constructor(p: any, c: any) {
    super(c, p);

    this.onChange = this.onChange.bind(this);
    this.onNewMessage = this.onNewMessage.bind(this);
    this.onRemoveMessage = this.onRemoveMessage.bind(this);
    this.onCheckGroupChange = this.onCheckGroupChange.bind(this);

    let checks = new Map();
    checks.set('A', true);
    checks.set('B', false);
    checks.set('C', true);

    this.state = {
      checked: false,
      messages: [],
      checks: checks
    };
  }

  onChange() {
    let st = this.state;
    st.checked = !st.checked;
    this.setState(st);
  }

  onCheckGroupChange(id: string) {
    console.log('Changed check with id ' + id);
    let { checks } = this.state;
    let v = !checks.get(id);
    checks.set(id, v);
    let st = this.state;
    st.checks = checks;
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
    let checks = new Array<CheckBoxData>();
    this.state.checks.forEach((v, k) => {
      checks.push({
        checked: v,
        id: k,
        title: 'T - ' + k
      });
    });
    return (
      <div className="App">
        <Counter />
        <RespArea messages={this.state.messages} onRemoveMessage={this.onRemoveMessage}/>
        <hr />
        <CheckBox checked={this.state.checked} title="titolo" onChange={this.onChange}/>
        <hr />
        <button onClick={this.onNewMessage}>New Message</button>
        <hr />
        <h3>List of checkboxes</h3>
        <CheckGroup checkBoxes={checks} onChange={this.onCheckGroupChange}/>
      </div>
    );
  }
}

export default App;
