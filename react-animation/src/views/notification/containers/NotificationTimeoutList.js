import React from 'react';
import { TransitionGroup } from 'react-transition-group';
import TimeoutMessage from '../components/TimeoutMessage';
import './NotificationTimeoutList.css';

type NotificationPropsType = {
    messages: Array,
    onClose: (id:string)=>void
};

const NotificationTimeoutList = (props:NotificationPropsType) => {
    const items = props.messages.map((item) => (
        <TimeoutMessage className="spaced-message" key={item.id} id={item.id} title={item.title} text={item.text} show={true} onClose={props.onClose} />
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

export default NotificationTimeoutList;