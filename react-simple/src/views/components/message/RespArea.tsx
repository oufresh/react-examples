import * as React from 'react';
import { Message } from './Message';

export interface RespAreaProps {
    messages: Array<Message>;
}

class RespArea extends React.Component<RespAreaProps, object> {
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

export default RespArea;