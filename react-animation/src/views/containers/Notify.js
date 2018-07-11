import React from 'react';
import Notification from '../cssTransition/notification/Notification';
import Message from '../cssTransition/notification/Message';

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
            let messages = prevState.messages;
            messages.push(message);
            return {
                messages: messages
            };
        });
    }

    render()
    {
        return (
            <Message id={"1"} title={"1 title"} text={"1 text"} onClose={()=>{}} />
        );
    }
}

export default Notify;