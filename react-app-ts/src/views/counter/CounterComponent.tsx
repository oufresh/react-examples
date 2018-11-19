import * as React from 'react';

export interface ICounterProps {
    title: string,
    readonly value?: number;
    onIncrement?: () => any;
    onDecrement?: () => any;
}

export const CounterComponent = (props: ICounterProps) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <div><button onClick={props.onIncrement}>+</button><label>{props.value}</label><button onClick={props.onDecrement}>-</button></div>
        </div>
    );
}