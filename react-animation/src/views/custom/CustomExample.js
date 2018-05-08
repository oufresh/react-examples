import React from 'react';
import './CustomExample.css';

class FadeComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.mounted
        }
    }

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

    componentDidMount = () => {
        console.log('componentDidMount, show ' + this.state.show);
        if (this.state.show)
            setTimeout(this._onMount, 50) //call the into animiation
    }
    
    onTransitionEnd = () => {
        console.log('transitionEnd');
        if (!this.props.mounted) { //remove the node on transition end when the mounted prop is false
            this.setState({
                show: false
            });
        }
    };
    
    componentWillReceiveProps(nextProps) {
        if (!nextProps.mounted)
            this._onUnMount(); //call outro animation when mounted prop is false
        else {
            this.setState({ //remount the node when the mounted prop is true
                show: true
            });
            setTimeout(this._onMount, 50) //call the into animiation
        }
    }

    render() {
        return (
            this.state.show && <div ref='div' className="example-component" onTransitionEnd={this.onTransitionEnd}>Ciao!</div>
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
                <FadeComponent mounted={this.state.show} />
            </div>
        );
    }
}

export default CustomComponent;