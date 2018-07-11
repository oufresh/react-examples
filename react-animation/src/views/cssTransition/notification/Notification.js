import React from 'react';
import { Fragment } from 'react';
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
        const items = [];
        this.props.messages.forEach((v,k) => {
            items.push("t");
        });

        return (
            <Fragment>
                {
                    items.length > 0 ? <Message id={"1"} text={"text"} title={"title"} onClose={this.onCloseElement} /> : null
                }
            </Fragment>
        );
    }
}

export default Notification;