import * as React from 'react';
import './CounterButton.css';

export interface Props {
    onClick: Function;
}
  
class DecreaseButton extends React.Component<Props, object> {

    constructor(props: Props) {
        super(props);
    }

    onClick = () => {
        this.props.onClick();
    }
    
    render() {
        return (
          <button className="counter-button" onClick={this.onClick}>Decrease</button>
        );
    }
}
  
export default DecreaseButton;