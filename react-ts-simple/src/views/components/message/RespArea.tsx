import * as React from 'react';
import { Message } from './Message';

import './RespArea.css';

export type RespAreaProps = {
    messages: Array<Message>;
    onRemoveMessage: (id: string) => void
};

class RespArea extends React.Component<RespAreaProps, object> {

    constructor(props: RespAreaProps) {
        super(props);
        this.onClick = this.onClick.bind(this);    }

    /*componentDidUpdate(prevProps, prevState, snapshot)
    {

    }*/

    onClick(id: string): void {
        console.log('click id ' + id);
        this.props.onRemoveMessage(id);
    }

    render() {
        const { messages } = this.props;
        if (messages.length > 0 ) {
            return (
                <div className="resp-area">
                    {
                        messages.map((message) => {
                            return (
                                <div className="resp" key={message.id}>
                                    <button key={message.id} className="resp-close" onClick={() => { this.onClick(message.id); }}/>
                                    <p >{message.title + ' - ' + message.text + ' - ' + message.success}</p>
                                </div>
                            );
                        })
                    }
                </div>
            );
        } else {
            return null;
        }
    }
}

export default RespArea;