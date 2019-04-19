import * as React from "react";
import * as styles from "./CounterButton.module.css";

export interface CounterButtonProps {
    onClick?: () => any,
    children?: React.ReactChildren | string;
}

export const CounterButton: React.FunctionComponent<CounterButtonProps> = (props: CounterButtonProps) => {
    return <button className={styles.counterButton} onClick={props.onClick}>{props.children}</button>
}