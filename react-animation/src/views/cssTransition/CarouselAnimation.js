import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './CarouselAnimation.css';

const TextCarouselElem = (props) => {
  return (
    <div>
      <CSSTransitionGroup
        transitionName="carousel"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <span>{props.text}</span>
      </CSSTransitionGroup>
    </div>
  );
};

export class TextCarousel extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      items: props.items,
      item: 0
    };
  }

 /* componentDidMount = () => {
    this.int = setInterval(()=>{
      this.setState((state) => {
        state.item = (this.state.item + 1) < this.state.items.length ? (this.state.item + 1) : 0;
        return state;
      });
    }, 5000);
  }*/

  render() {
    return <TextCarouselElem text={this.state.items[this.state.item]} />;
  }
}
