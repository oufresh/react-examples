import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import Message from './Message';
import './NotificationList.css';

type NotificationPropsType = {
    messages: Array,
    onClose: (id:string)=>void
};

const NotificationList = (props:NotificationPropsType) => {
    const items = props.messages.map((item) => (
        <Message className="spaced-message" key={item.id} id={item.id} title={item.title} text={item.text} show={true} onClose={props.onClose} />
    ));

    return (
        <TransitionGroup
            className="notification-list"
            appear={true}
            timeout={500}>
            {items}
        </TransitionGroup>
    );
};

export default NotificationList;