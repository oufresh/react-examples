//@flow
import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './EnterAnimation.css';

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

const TextEnterElem = (props) => {
  return (
    <div>
      <CSSTransitionGroup component={FirstChild}
        transitionName="carousel"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={500}>
        <span>{props.text}</span>
      </CSSTransitionGroup>
    </div>
  );
};

export const TextAnimationEnterElem = (props) => {
  return <TextEnterElem text={props.text} />;
};
