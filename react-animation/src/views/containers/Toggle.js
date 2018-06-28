//@flow
import React from 'react';
import ToggleSwitch from '../cssTransition/ToggleSwitch';

type TogglePropsType = {

};

type ToggleStateType = {
    checked: boolean
};

class Toggle extends React.Component<TogglePropsType, ToggleStateType>
{
    constructor(props:TogglePropsType)
    {
        super(props);
        this.state = {
            checked: false
        }
    }

    onChange = () => {
        this.setState(prevState => {
            return {
                checked: !prevState.checked
            };
        })
    }

    render() {
        return (<ToggleSwitch onChange={this.onChange} checked={this.state.checked} />);
    }   
}

export default Toggle;