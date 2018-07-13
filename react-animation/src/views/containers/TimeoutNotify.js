import React from 'react';
import { SingleTimeoutMessage } from '../cssTransition/notification/SingleNotification';

type NotifyPropsType = {

};

type NotifyStateType = {
    show: boolean,
    startTimeout: boolean
};

class TimeoutNotify extends React.Component<NotifyPropsType, NotifyStateType>
{
    constructor(props)
    {
        super(props);
        this.state = {
            show: false,
            startTimeout: false,
            timeoutBar: true
        };
    }

    onClick = () => {
        if (this.state.show === false) {
            this.setState(prevState => {
                return {
                    show: true,
                    startTimeout: false,
                    timeoutBar: true
                }
            });
        }
        else
            alert('Nofica già in atto!!');
    }

    onEntered = () => {
        //console.log('onEntered');
        this.setState(prevState => {
            return {
                show: prevState.show,
                startTimeout: true,
                timeoutBar: prevState.timeoutBar
            }
        });
    }

    onExited = () => {
        this.setState(prevState => {
            return {
                show: false,
                startTimeout: false,
                timeoutBar: false
            }
        });
    }

    onClose = () => {
        this.setState(prevState => {
            return {
                show: false,
                startTimeout: false,
                timeoutBar: false
            }
        });
    }

    render()
    {
        return (
            <React.Fragment>
                <button onClick={this.onClick}>New notify</button>
                <SingleTimeoutMessage onEntered={this.onEntered} onExited={this.onExited} startTimeout={this.state.startTimeout} timeoutBar={this.state.timeoutBar} id={"1"} title={"1 title"} text={"1 text"} in={this.state.show} onClose={this.onClose} />
            </React.Fragment>
        );
    }
}

export default TimeoutNotify;