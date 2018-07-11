//@flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Message.css';

type MessagePropsType = {
    id: string,
    title: string,
    text: string,
    onClose: Function,
    in: boolean,
    className?: string
};

const Message = (props: MessagePropsType) => {
    const className = props.className ? "message " + props.className : "message";
    return (
        <CSSTransition
            key={props.id}
            timeout={500}
            classNames="fading-message"
            unmountOnExit
            appear={true}
            in={props.in}
        >
        <div className={className} key={props.id}>
            <div className={"header"}>
                <label>{props.title}</label>
                <button className={"close"} onClick={()=>{props.onClose(props.id)}}></button>
            </div>
            <div className={"body"}>
                <p>{props.text}</p>
            </div>
        </div>
        </CSSTransition>
    );
}

export default Message;