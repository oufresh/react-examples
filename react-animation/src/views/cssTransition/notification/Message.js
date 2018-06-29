//@flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Message.css';

type MessagePropsType = {
    key: string,
    title: string,
    text: string,
    onClose: Function
};

const Message = (props: MessagePropsType) => {
    return (
        <CSSTransition
            key={props.key}
            timeout={100}
            classNames={"fading-message"}
        >
        <div key={props.key} className={"fading-message"}>
            <button className={"close"} onClick={()=>{props.onClose(props.key)}}>X</button>
            <label>{props.title}</label>
            <p>{props.text}</p>
        </div>
        </CSSTransition>
    );
}

export default Message;