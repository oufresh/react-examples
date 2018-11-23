import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { start, stop } from '../../modules/timer/actionCreators';
import { IAppState} from '../../store/types';
import { TimerComponent } from './TimerComponent';

interface InjectedProps {
    readonly runnig: boolean;
    readonly value: number;
    start?: () => AnyAction;
    stop?: () => AnyAction;
}

interface ITimerProps {
    name?: string
}

export interface ITimerContainerProps extends ITimerProps, InjectedProps {};

const mapStateToProps = (state: IAppState) => ({
    runnig: state.timer.running,
    value: state.timer.value
});
  
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        start: () => dispatch(start()),
        stop: () => dispatch(stop())
    };
}

export class TimerContainer extends React.Component<ITimerContainerProps>
{
    constructor(props: ITimerContainerProps) {
        super(props);
    }

    public render()
    {
        return (
            <div>
                <h1>Timer with observable</h1>
                <TimerComponent value={this.props.value} running={this.props.runnig} onStart={this.props.start} onStop={this.props.stop}/>
            </div>
            );
    }
}

export const TimerContainerConnected = connect(mapStateToProps, mapDispatchToProps)(TimerContainer);