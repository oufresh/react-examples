import * as React from 'react';
import { Message } from './Message';

export interface RespMessageProps {
    messages: Array<Message>;
}

class RespMessage extends React.Component<RespMessageProps> {
    render() {
        const { messages } = this.props;
        return (
            <div>
                {
                    messages.map((message) => {
                        return <span key={message.id}>{message.title + ' - ' + message.text + ' - ' + message.success}</span>;
                    })
                }
            </div>
        );
    }
}

export default RespMessage;