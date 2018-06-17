//@flow
import React from 'react';
import './Example.css';

type AnimComponentProps = {
    show: boolean,
    rotate: boolean
};

class AnimComponent extends React.Component<AnimComponentProps> {
    cRef: any;

    constructor(props:AnimComponentProps) {
        super(props);

        this.cRef = React.createRef();
    }

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.show !== this.props.show) {
            const elm = this.cRef.current;
            if (this.props.show === true)
                elm.classList.add('show');
            else
                elm.classList.remove('show');
                
        }
        else if (prevProps.rotate !== this.props.rotate)
        {
            const elm = this.cRef.current;
            if (this.props.rotate === true)
                elm.classList.add('rotate');
            else
                elm.classList.remove('rotate');
        }
    }

    render() {
        return (
            <div className="example-cont">
                <div ref={this.cRef} className="example-component">Ciao!</div>
            </div>
        );
    }
}

type ExampleComponentProps = any;

class ExampleComponent extends React.Component<ExampleComponentProps>
{
    constructor(props:{}) {
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