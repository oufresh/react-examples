import * as React from 'react';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import { startDelay, stopDelay } from '../../modules/delay/actionCreators';
import { IDelayStartPayload } from '../../modules/delay/types';
import { IAppState} from '../../store/types';
import { DelayComponent } from './DelayComponent';

interface InjectedProps {
    readonly waiting: boolean;
    startDelay?: (p: IDelayStartPayload) => AnyAction;
    stopDelay?: () => AnyAction;
}

interface IDelayProps {
    name?: string
}

export interface IDelayContainerProps extends IDelayProps, InjectedProps {};

interface IDelayContainerState {
    duration: number
};

const mapStateToProps = (state: IAppState) => ({
    waiting: state.delay.waiting
});
  
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        startDelay: (p: IDelayStartPayload) => dispatch(startDelay(p)),
        stopDelay: () => dispatch(stopDelay())
    };
}

export class DelayContainer extends React.Component<IDelayContainerProps, IDelayContainerState>
{
    public state: IDelayContainerState;

    constructor(props: IDelayContainerProps) {
        super(props);
        this.state = {
            duration: 50
        };
    }

    public render()
    {
        return (
            <div>
                <h1>Custom delay with observable</h1>
                <DelayComponent waiting={this.props.waiting} onStart={this.onStart} onStop={this.onStop} onChangeDuration={this.onChangeDuration} duration={this.state.duration} />
            </div>
            );
    }

    protected onChangeDuration= (event: React.ChangeEvent<HTMLInputElement>): void  => {
        const n = parseInt(event.target.value, 10);
        this.setState({
            duration: !isNaN(n) ? n : 50
        })
    }

    protected onStart = () => {
        if (this.props.startDelay) {
            this.props.startDelay({
                duration: this.state.duration
            });
        }
    }

    protected onStop = () => {
        if (this.props.stopDelay) {
            this.props.stopDelay();
        }
    }
}

export const DelayContainerConnected = connect(mapStateToProps, mapDispatchToProps)(DelayContainer);