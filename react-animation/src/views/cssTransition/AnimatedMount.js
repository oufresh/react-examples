import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';

export const AnimatedMount = ({ unmountedStyle, mountedStyle }) => {
  return (Wrapped) => class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        style: unmountedStyle,
      };
    }

    componentWillAppear(callback)
    {
      console.log('componentWillAppear');
      this.onTransitionEnd = callback;
      setTimeout(() => {
        this.setState({
          style: mountedStyle,
        });
      }, 20);
    }

    componentWillEnter(callback) {
      console.log('componentWillEnter');
      this.onTransitionEnd = callback;
      setTimeout(() => {
        this.setState({
          style: mountedStyle,
        });
      }, 20);
    }

    componentWillLeave(callback) {
      this.onTransitionEnd = callback;
      this.setState({
        style: unmountedStyle,
      });
    }

    render() {
      return <div
        style={this.state.style}
        onTransitionEnd={this.onTransitionEnd}
      >
        <Wrapped { ...this.props } />
      </div>;
    }
  };
};

const Thing = () => {
  return <div>
    Test!
  </div>;
};

const AnimatedMountComponentH =  AnimatedMount({
  unmountedStyle: {
    opacity: 0,
    transform: 'translate3d(-100px, 0, 0)',
    transition: 'opacity 250ms ease-out, transform 250ms ease-out',
  },
  mountedStyle: {
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: 'opacity 1.5s ease-out, transform 1.5s ease-out',
  },
})(Thing);

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

export const AnimatedMountComponent = () => 
  <ReactTransitionGroup component={FirstChild}>
    <AnimatedMountComponentH />
  </ReactTransitionGroup>;