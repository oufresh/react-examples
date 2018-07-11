import React from 'react';
import NotificationList from '../cssTransition/notification/NotificationList';

type NotificationListPropsType = {

};

type NotificationListStateType = {
    messages: Array,
    num: number
};

class Notify extends React.Component<NotificationListPropsType, NotificationListStateType>
{
    constructor(props)
    {
        super(props);
        this.state = {
            num: 0,
            messages: []
        };
    }

    onClick = () => {
        this.setState((prevState) => {
            const newMessage = {
                id: prevState.num + "",
                title: 'title ' + prevState.num,
                text: 'text ' + prevState.num
            };
            const messages= prevState.messages;
            messages.push(newMessage);
            const num = prevState.num+1;
            return {
                messages: messages,
                num: num
            };
        });
    }

    onClose = (id) => {
        //console.log('close id ' + id);
        this.setState((prevState) => {
            const index = prevState.messages.findIndex(el => el.id === id);
            const messages = prevState.messages;
            messages.splice(index, 1);
            return {
                messages: messages,
                num: prevState.num
            };
        });
    }

    render()
    {
        return (
            <React.Fragment>
                <button onClick={this.onClick}>New notify</button>
                <NotificationList messages={this.state.messages} onClose={this.onClose}/>
            </React.Fragment>
        );
    }
}

export default Notify;