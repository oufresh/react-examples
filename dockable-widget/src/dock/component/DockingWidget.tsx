import * as React from 'react';
import * as Rx from 'rxjs';
import * as Operators from 'rxjs/operators';
import { dockingWidget } from './DockingWidget.css';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { createPanManager, PanEvent } from '../utils/pan';

type DockingWidgetPropsT = {
    width: string;
    height: string;
    backgroundColor: string;
};

type DockingwidgetStateT = {
    x: number;
    y: number;
    Dx: number;
    Dy: number;
};

class DockingWidget extends React.PureComponent<DockingWidgetPropsT>
{
    wr: React.RefObject<HTMLDivElement>;
    mouseDowns: Rx.Observable<Event>;
    bodyMoves: Rx.Observable<Event>;
    bodyUps: Rx.Observable<Event>;
    pans: Rx.Observable<PanEvent>;
    panSub: Rx.Subscription;
    state: DockingwidgetStateT;

    constructor(props: DockingWidgetPropsT)
    {
        super(props);
        this.wr = React.createRef();
        this.state = {
            x: 0,
            y: 0,
            Dx: 0,
            Dy: 0
        };
    }

    componentDidMount()
    {
        this.mouseDowns = Rx.fromEvent(this.wr.current as FromEventTarget<Event>, "mousedown");
        this.bodyMoves = Rx.fromEvent(document.body as FromEventTarget<Event>, "mousemove");
        this.bodyUps = Rx.fromEvent(document.body as FromEventTarget<Event>, "mouseup");

        this.pans = createPanManager(this.mouseDowns, this.bodyMoves, this.bodyUps);

        this.panSub = this.pans.subscribe((pe: PanEvent) => {
            console.log(pe.dx + ' ' + pe.dy);
        });
    }

    componentWillUnmount()
    {
        this.panSub.unsubscribe();
    }

    render()
    {
        const transform = `translate(${this.state.x}px, ${this.state.y}px)`;
        const style = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.backgroundColor,
            transform: transform
        };

        return (
            <div ref={this.wr} className={dockingWidget} style={style}>
            </div>
        );
    }
}

export default DockingWidget;