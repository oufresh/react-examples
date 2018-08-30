import * as React from 'react';
import * as Rx from 'rxjs';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import DockingWidget from './DockingWidget';
import { dockingArea } from './DockingArea.css';
import { classNames } from '../utils/classes';
import { MouseCoords, event2MouseCoords } from '../utils/pan';

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
    bmS: Rx.Subject<MouseCoords>;
    sub: Rx.Subscription;

    constructor(props: DockingAreaPropsT)
    {
        super(props);
        this.bodyMoves = Rx.fromEvent(document.body as FromEventTarget<Event>, "mousemove");
    }

    componentDidMount()
    {
        this.bmS = new Rx.Subject();
    }

    componentWillUnmount()
    {
    }

    render()
    {
        const className = this.props.className ? classNames(dockingArea, this.props.className) : dockingArea;
        return <div className={className} style={this.props.style}>
            <DockingWidget width={this.props.style.width} height={'250px'} backgroundColor={'lightyellow'} bodyMoves={this.bodyMoves} />
            <DockingWidget width={this.props.style.width} height={'150px'} backgroundColor={'lightblue'} bodyMoves={this.bodyMoves} />
            <DockingWidget width={this.props.style.width} height={'150px'} backgroundColor={'lightgreen'} bodyMoves={this.bodyMoves} />
        </div>;
    }
}

export default DockingArea;