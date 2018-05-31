import React from 'react';
import './Example.css';

class AnimComponent extends React.Component {
    
    componentWillReceiveProps(nextProps) {
        if (nextProps.show !== this.props.show) {
            const elm = this.refs.div;
            if (nextProps.show === true)
                elm.classList.add('show');
            else
                elm.classList.remove('show');
        }
        else if (nextProps.rotate !== this.props.rotate)
        {
            const elm = this.refs.div;
            if (nextProps.rotate === true)
                elm.classList.add('rotate');
            else
                elm.classList.remove('rotate');
        }
    }

    render() {
        return (
            <div className="example-cont">
                <div ref='div' className="example-component">Ciao!</div>
            </div>
        );
    }
}

class ExampleComponent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            rotate: false
        };
    }

    onFade = () => {
        this.setState(prevState => {
            let nextState = prevState;
            nextState.show = !prevState.show;
            return nextState;
        });
    }

    onRotate = () => {
        this.setState(prevState => {
            let nextState = prevState;
            nextState.rotate = !prevState.rotate;
            return nextState;
        });
    }

    render() {
       
        return (
            <div>
                <h3>Basic animation example</h3>
                <p>A div is faded after a button click, only works with visibility, the component is always mounted!!!</p>
                <button onClick={this.onFade}>Show/Hide</button>
                <button onClick={this.onRotate}>Rotate</button>
                <AnimComponent show={this.state.show} rotate ={this.state.rotate} />
            </div>
        );
    }
}

export default ExampleComponent;