//@flow
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './EnterAnimation.css';

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

const TextEnterElem = ({text}:{text:string}) => {
  return (
    <div>
      <CSSTransitionGroup component={FirstChild}
        transitionName="carousel"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <span>{text}</span>
      </CSSTransitionGroup>
    </div>
  );
};

type TextAnimationEnterElemPropsType = {
  text: string
};

export const TextAnimationEnterElem = (props:TextAnimationEnterElemPropsType) => {
  return <TextEnterElem text={props.text} />;
};
