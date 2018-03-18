import * as React from 'react';
import { connect, Dispatch } from 'react-redux';

import { StoreState } from '../../store';

import { Action } from '../../modules/value/types';
import { increment, decrement } from '../../modules/value/actions';

import IncreaseButton from '../components/IncreaseButton';
import CounterViewer from '../components/CounterViewer';
import DecreaseButton from '../components/DecreaseButton';

export interface CounterProps {
    value: number;
    onIncrement: () => void;
    onDecrement: () => void;
}

class Counter extends React.Component<CounterProps, object> {
    constructor(props: CounterProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <DecreaseButton onClick={this.props.onDecrement} />
                <IncreaseButton onClick={this.props.onIncrement} />
                <hr/>
                <CounterViewer value={this.props.value} />
            </div>
        );
    }
}

/**
 * Si può usare reselect nel passo successivo
 * si possono fare delle modifche al dato per adattarlo al component
 * mappa solo il value, non le due functions!!!!
 */

interface StateFromProps {
    value: number;
}
  
interface DispatchFromProps {
    onIncrement: () => void;
    onDecrement: () => void;
}

export const mapStateToProps = ({ value }: StoreState) => {
    return {
        value: value
    };
};

export const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement())
    };
};

// servono per tipizzare la classe
export default connect<StateFromProps, DispatchFromProps>(mapStateToProps, mapDispatchToProps)(Counter);