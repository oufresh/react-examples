import * as React from 'react';

export interface CounterProps {
    value: number;
}

class CounterViewer extends React.Component<CounterProps, object> {
    render() {
        const value = this.props.value;
        return (
            <span>Value = {value}</span>
        );
        /*return (
          <input readOnly={true} value={this.props.value}/>
        );*/
    }
}

export default CounterViewer;