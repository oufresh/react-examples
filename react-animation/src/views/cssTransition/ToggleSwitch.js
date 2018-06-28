//@flow
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './ToggleSwitch.css';

type ToggleSwtichPropsType = {
    checked: boolean,
    onChange: ()=>void
};

const ToggleSwtich = (props: ToggleSwtichPropsType) => {
    return (
        <label className={"switch"} onClick={props.onChange} >
            <CSSTransition
            in={props.checked}
            timeout={100}
            classNames={"slider"}
            >
                <span className={"slider round"}></span>
            </CSSTransition>
        </label>
    );
};

export default ToggleSwtich;