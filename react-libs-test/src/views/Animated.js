import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Anim = styled.div`
    display: block;
    background: pink;
    width: 200px;
    height: 200px;
    transition: opacity 500ms ease-in-out;
    opacity: 0;
`;

export class Animated extends React.Component {
    constructor(props) {
        super(props);
        //this.state.visible = props.visible;
    }

    /*componentDidMount() {
        if (this.props.visible === true) {
            let node = ReactDOM.findDOMNode(this);
            node.style.opacity = 0;
        }
    }*/

    componentWillReceiveProps(nextProp) {
        if (nextProp.visible === true) {
            let node = ReactDOM.findDOMNode(this);
            node.style.opacity = 1;
        }
    }

    render() {
      return (
        <Anim>
            <h1>Hello!!!</h1>
        </Anim>
      );
    }
};