import * as React from 'react';
import CheckBox from '../checkbox/CheckBox';

export type CheckBoxData = {
    checked: boolean;
    title: string;
    id: string;
};

export type CheckGroupPropsType = {
    checkBoxes: Array<CheckBoxData>;
    onChange: (id: string) => void;
};

const CheckGroup = (props: CheckGroupPropsType) => {
    const { checkBoxes } = props;
    return (
        <div className="check-group">
            {
                checkBoxes.map((c) => {
                    return <CheckBox checked={c.checked} title={c.title} key={c.id} onChange={() => {props.onChange(c.id); }} />;
                })
            }
        </div>
    );
};

export default CheckGroup;