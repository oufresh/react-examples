//@flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { Transition } from 'react-transition-group';
import './TimeoutMessage.css';

type MessagePropsType = {
    id: string,
    title: string,
    text: string,
    onClose: Function,
    in: boolean,
    className?: string,
    closeTimeout?: number,
    timeoutBar?: boolean,
    startTimeout?: boolean,
    onEntered?: Function,
    onExited?: Function
};

const duration = 5000;

const defaultStyle = {
  transition: `width ${duration}ms linear`,
  width: '0%'
}

const transitionStyles = {
  entering: { width: '0%' },
  entered:  { width: '100%' },
};

const TimeoutMessage = (props: MessagePropsType) => {
    const className = props.className ? "message " + props.className : "message";
    return (
        <CSSTransition
            key={props.id}
            timeout={500}
            classNames="fading-message"
            unmountOnExit
            onEntered={()=> {
                if (props.onEntered)
                    props.onEntered();
            }}
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
            {
                props.timeoutBar === true ?
                <div className={"timeout-bar"}>
                    <Transition
                        timeout={5000}
                        onExited={() => {
                            if(props.onExited)
                                props.onExited();
                        }}
                        in={(props.startTimeout === true) ? false : true}
                    >
                    {
                        (state) => { return <div className={"indicator"} style={{
                            ...defaultStyle,
                            ...transitionStyles[state]
                        }}></div> }
                    }
                    </Transition>
                </div> : <div className={"timeout-bar"} />
            }
        </div>
        </CSSTransition>
    );
}

export default TimeoutMessage;