import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './ExpandBox.css';

function FirstChild(props) {
    const childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
}

class ExpandBox extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            opened: false
        };
    }

    handleClick = () => {
        this.setState({opened: !this.state.opened});
    }

    render() {    
        return (
          <div>
            <button onClick={this.handleClick}>Toggle</button>
            <CSSTransitionGroup
                component={FirstChild}
                transitionName="expand"
                transitionAppear={true}
                transitionAppearTimeout={500}
                transitionEnterTimeout={500}
                transitionLeaveTimeout={500}>
                { this.state.opened ? 
                    <div>
                        <ul className="expand-list">
                            <li>A</li>
                            <li>B</li>
                            <li>C</li>
                            <li>D</li>
                        </ul>
                    </div>: null
                }
            </CSSTransitionGroup>
          </div>
        );
      }
}

export default ExpandBox;