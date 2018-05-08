import React from 'react';

export const AnimatedMount = ({ unmountedStyle, mountedStyle }) => {
    return (Wrapped) => class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          style: unmountedStyle,
        };
      }
  
      componentWillEnter(callback) {
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
  /*
  import React, { PureComponent } from 'react';

class Thing extends PureComponent {
  render() {
    return <div>
      Test!
    </div>
  }
}

export default AnimatedMount({
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

return <div>
  <ReactTransitionGroup>
    <Thing />
  </ReactTransitionGroup>
</div>
*/