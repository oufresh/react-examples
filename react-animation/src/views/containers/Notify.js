import React from 'react';
import Notification from '../cssTransition/notification/Notification';

class Notify extends React.Component<NotifyPropsType, NotifyStateType>
{
    constructor(props)
    {
        super(props);
        this.state = {
            messages: []
        };
    }

    onClick = () => {
        let d = new Date().toISOString();
        let message = {
            id: d,
            title: 'Title',
            text: 'text text text ' + d
        };

        this.setState(prevState => {
            let messages = prevState.messages.push(message);
            return {
                messages: messages
            };
        });
    }

    render()
    {
        return (
            <React.Fragment>
                <button onClick={this.onClick}>Add message</button>
                <Notification messages={this.state.messages} />
            </React.Fragment>
        );
    }
}

export default Notify;