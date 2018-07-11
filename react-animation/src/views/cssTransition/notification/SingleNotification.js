import React from 'react';
import Message from './Message';

import './SingleNotification.css';

type SingleNotificationPropsType = {
    id: string,
    title: string,
    text: string,
    show: boolean,
    onClose: Function
}

//Facciamolo con un HOC
/*
const SingleNotification = (props:SingleNotificationPropsType) => {
    return(
        <Message className="single-notification" id={props.id} title={props.title} text={props.text} show={props.show} onClose={props.onClose} />
    );
}

export default SingleNotification;*/

function ToSingleNotification(Msg) {
    return function Single(props:SingleNotificationPropsType) {
        return <Msg className="single-notification" {...props} />
    }
}

export default ToSingleNotification(Message);