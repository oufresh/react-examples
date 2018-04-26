import * as React from 'react';

export interface ReqButtonProps {
    onClick: Function;
}

class ReqButton extends React.Component<ReqButtonProps, object> {

    constructor(props: ReqButtonProps) {
        super(props);
    }

    onClick = () => {
        this.props.onClick();
    }

    render() {
        return (
            <button className="req-button" onClick={this.onClick}>Request</button>
        );
    }
}

export default ReqButton;