import React from 'react';
import SingleNotification from '../cssTransition/notification/SingleNotification';

type NotifyPropsType = {

};

type NotifyStateType = {
    show: boolean
};

class Notify extends React.Component<NotifyPropsType, NotifyStateType>
{
    constructor(props)
    {
        super(props);
        this.state = {
            show: false
        };
    }

    onClick = () => {
        this.setState(prevState => {
            return {
                show: !prevState.show
            }
        });
    }

    render()
    {
        return (
            <React.Fragment>
                <button onClick={this.onClick}>Toggle</button>
                <SingleNotification id={"1"} title={"1 title"} text={"1 text"} in={this.state.show} onClose={this.onClick} />
            </React.Fragment>
        );
    }
}

export default Notify;