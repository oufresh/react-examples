import * as React from 'react';

export interface IDelayComponentProps {
    waiting: boolean;
    duration: number;
    onChangeDuration?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onStart?: () => any;
    onStop?: () => any;
}

export const DelayComponent: React.SFC<IDelayComponentProps> = (props: IDelayComponentProps) => {
    return (<div>
        <div>Delay duration:</div><input type="number" value={props.duration} onChange={props.onChangeDuration}/>
        <div><label>{props.waiting === true ? "Waiting ..." : "Free"}</label></div>
        <div><button onClick={props.onStart}>START</button><button onClick={props.onStop}>STOP</button></div>
    </div>);
}