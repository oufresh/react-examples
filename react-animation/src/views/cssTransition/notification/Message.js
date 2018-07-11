//@flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Message.css';

type MessagePropsType = {
    id: string,
    title: string,
    text: string,
    onClose: Function
};

const Message = (props: MessagePropsType) => {
    return (
        <CSSTransition
            key={props.id}
            timeout={100}
            classNames="fading-message"
            unmountOnExit
            appear={true}
            in={true}
        >
        <div className={"message"} key={props.id}>
            <button className={"close"} onClick={()=>{props.onClose(props.id)}}>X</button>
            <label>{props.title}</label>
            <p>{props.text}</p>
        </div>
        </CSSTransition>
    );
}

export default Message;