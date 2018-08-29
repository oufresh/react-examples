import * as React from 'react';
import * as Rx from 'rxjs';
import { dockingArea } from './DockingArea.css';
import { classNames } from '../utils/classes';

type DockingAreaPropsT = {
    children?: React.ReactNode;
    width?: number;
    height?: number;
    className? : string;
    style?: Object
};

class DockingArea extends React.PureComponent<DockingAreaPropsT>
{
    bodyMoves: Rx.Observable<Event>;

    constructor(props: DockingAreaPropsT)
    {
        super(props);
    }

    componentDidMount()
    {
        //this.bodyMoves = Rx.fromEvent(document.body, "mousemove");
    }

    componentWillUnmount()
    {

    }

    render()
    {
        const className = this.props.className ? classNames(dockingArea, this.props.className) : dockingArea;
        return <div className={className} style={this.props.style}>
            {this.props.children}
        </div>;
    }
}

export default DockingArea;