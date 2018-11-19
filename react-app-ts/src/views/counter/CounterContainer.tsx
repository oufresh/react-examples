import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { decrement, increment } from '../../modules/counter/actionCreators';
import { IAppState} from '../../store/store';
import { CounterComponent } from './CounterComponent';

export interface ICounterProps {
    name: string
}

export interface ICounterState {
    value: number
}

export interface InjectedProps {
    readonly counter?: number; // le props di stato prese da redux le metto readonly
    onIncrement?: () => AnyAction;
    onDecrement?: () => AnyAction;
}

const mapStateToProps = (state: IAppState) => ({
    counter: state.counter.value
});
  
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        onDecrement: () => dispatch(decrement()),
        onIncrement: () => dispatch(increment())
    };
}

export class CounterContainer extends React.Component<ICounterProps & InjectedProps, ICounterState>
{
    public state: ICounterState;

    constructor(props: ICounterProps) {
        super(props);
        this.state = {
            value: 0
        };
    }

    public render()
    {
        return (
            <div>
                <CounterComponent title={'State counter'} value={this.state.value} onIncrement={this.onInc} onDecrement={this.onDec} />
                <hr />
                <CounterComponent title={'Redux counter'} value={this.props.counter} onIncrement={this.props.onIncrement} onDecrement={this.props.onDecrement} />
            </div>
            );
    }

    private onInc = (): void => {
        this.setState((ps: ICounterState) => {
            return {
                value: ps.value + 1
            }
        });
    }

    private onDec = (): void => {
        this.setState((ps: ICounterState) => {
            return {
                value: ps.value - 1
            }
        });
    }
}

export const CounterContainerConnected = connect(mapStateToProps, mapDispatchToProps)(CounterContainer);