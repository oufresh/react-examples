import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import Message from './Message';
import './Notification.css';

type NotificationPropsType = {
    messages: Array
};

type NotificationStateType = {
    messages: Map
};

class Notification extends React.Component<NotificationPropsType, NotificationStateType>
{
    constructor(props: NotificationPropsType)
    {
        super(props);

        const ms = new Map();
        this.props.messages.map( m => {
            return ms.set(m.id, m);
        });

        this.state = {
            messages: ms
        }
    }

    onCloseElement = (key) => {
        this.setState(prevState => {
            return {
                messages: prevState.messages.delete(key)
            };
        });
    }

    render()
    {
        const items = this.state.messages.forEach((v,k) => (
            <Message key={v.id} text={v.text} title={v.title} onClose={this.onCloseElement} />
        ));

        return (
            <TransitionGroup
                className="notification-area"
                appear={true} >
                    {items}
            </TransitionGroup>
        );
    }
}

export default Notification;