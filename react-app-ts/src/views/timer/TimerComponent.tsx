import * as React from 'react';

export interface ITimerComponentProps {
    value: number;
    running: boolean;
    onStart?: () => any;
    onStop?: () => any;
};

export const TimerComponent: React.SFC<ITimerComponentProps> = (props: ITimerComponentProps) => {
    // console.log(props.running);
    return (
        <div>
            <div>
                <label>Value:</label><label>{props.value}</label>
            </div>
            <div>
                <label>{props.running === false ? "Timer not running" : "Timer running"}</label>
            </div>
            <div>
                <button disabled={props.running} onClick={props.onStart}>Start</button>
                <button disabled={!props.running} onClick={props.onStop}>Stop</button>
            </div>
        </div>
    );
}