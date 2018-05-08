
import * as React from 'react';
import { connect } from 'react-redux'
import { increase, decrease} from '../../modules/counter/actionCreators';
import { getCounter } from '../../modules/counter/selectors';
import './Counter.css';


class Counter extends React.Component<props, object> {
    render() {
        return (
            <div>
                <button className={'button-value'} onClick={this.props.onDecrement}>Decrement</button>
                <button className={'button-value'} onClick={this.props.onIncrement}>Increment</button>
                <span className={'value'}>{this.props.value}</span>
            </div>
        );
    }
}

export const mapStateToProps = (state) => {
    return {
        value: getCounter(state)
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increase()),
        onDecrement: () => dispatch(decrease())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);