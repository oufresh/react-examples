//@flow
import React from 'react';
import './CustomExample.css';

type FadeComponentProps = {
    show: boolean
};

class FadeComponent extends React.Component<FadeComponentProps> {

    _onMount = () => {
        const elm = this.refs.div;
        if (elm)
            elm.classList.add('show');
    }

    _onUnMount = () => {
        const elm = this.refs.div;
        if (elm)
            elm.classList.remove('show');
    }
/*
    componentDidMount = () => {
        console.log('componentDidMount, show ' + this.state.show);
        if (this.state.show)
            setTimeout(this._onMount, 50) //call the into animiation
    }*/
    
    onTransitionEnd = () => {
        console.log('transitionEnd');
    };

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.show !== prevProps.show) {
            if (this.props.show === true)
                setTimeout(this._onMount, 50); //call the into animiation
            else
                setTimeout(this._onUnMount, 50); //call outro animation when mounted prop is false
        }
    }

      /*
    componentWillReceiveProps(nextProps) {
        if (!nextProps.show)
            setTimeout(this._onUnMount, 50); //call outro animation when mounted prop is false
        else {
            setTimeout(this._onMount, 50); //call the into animiation
        }
    }*/

    render() {
        return (
            this.props.show && <div ref='div' className="example-component" onTransitionEnd={this.onTransitionEnd}>Ciao!</div>
        );
    }
}

class CustomComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {};
        this.state.show = true;
    }

    onClick = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            };
        });
    }

    render() {
       
        return (
            <div>
                <button onClick={this.onClick}>Show/Hide</button>
                <FadeComponent show={this.state.show} />
            </div>
        );
    }
}

export default CustomComponent;