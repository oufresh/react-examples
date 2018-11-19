import * as React from 'react';

export interface ITimerComponentProps {
    value: number;
    running: boolean;
    onStart?: () => any;
    onStop?: () => any;
};

export const TimerComponent = (props: ITimerComponentProps) => {
    return (
        <div>
            <div>
                <label>Value</label><label>{props.value}</label>
            </div>
            <div>
                <label>Running</label><label>{props.running}</label>
            </div>
            <div>
                <button disabled={props.running} onClick={props.onStart}>Start</button>
                <button disabled={!props.running} onClick={props.onStop}>Stop</button>
            </div>
        </div>
    );
}