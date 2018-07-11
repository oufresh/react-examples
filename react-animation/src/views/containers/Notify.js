import React from 'react';
import Message from '../cssTransition/notification/Message';
import SingleNotification from '../cssTransition/notification/SingleNotification';

type NotifyPropsType = {

};

type NotifyStateType = {
    messages: Array,
    show: boolean
};

const Single = SingleNotification(Message);

class Notify extends React.Component<NotifyPropsType, NotifyStateType>
{
    constructor(props)
    {
        super(props);
        this.state = {
            messages: [],
            show: false
        };
    }

    onClick = () => {
        this.setState(prevState => {
            return {
                messages: prevState.messages,
                show: !prevState.show
            }
        });
    }

    render()
    {
        return (
            <React.Fragment>
                <button onClick={this.onClick}>Toggle</button>
                <Single id={"1"} title={"1 title"} text={"1 text"} show={this.state.show} onClose={this.onClick} />
            </React.Fragment>
        );
    }
}

export default Notify;