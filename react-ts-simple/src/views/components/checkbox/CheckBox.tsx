import * as React from 'react';
import './CheckBox.css';

export type CheckBoxPropsType = {
    checked: boolean;
    title: string;
    onChange: () => void
};

const CheckBox = (props: CheckBoxPropsType) => {
    return (
        <label className="container">{props.title}
            <input type="checkbox" checked={props.checked} onChange={props.onChange}/>
            <span className="checkmark" />
        </label>
    );
};

export default CheckBox;