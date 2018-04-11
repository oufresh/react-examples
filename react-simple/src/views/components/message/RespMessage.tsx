import * as React from 'react';
import { Message } from './Message';

export interface RespMessageProps {
    message: Message;
}

class RespMessage extends React.Component {
    render() {
        return (
            <div>
                {
                    this.props.messages.map((message) => {
                        return <span key={message.id}>{message.title + ' - ' + message.text + ' - ' + message.success}</span>;
                    })
                }
            </div>
        );
    }
}

export default RespMessage;