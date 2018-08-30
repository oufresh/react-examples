import * as React from 'react';
import * as Rx from 'rxjs';
import * as Operators from 'rxjs/operators';
import { dockingWidget } from './DockingWidget.css';
import { FromEventTarget } from 'rxjs/internal/observable/fromEvent';
import { createPanManager, PanEvent, MouseCoords, event2MouseCoords } from '../utils/pan';

type DockingWidgetPropsT = {
    width: string;
    height: string;
    backgroundColor: string;
    bodyMoves: Rx.Observable<Event>;
};

type DockingwidgetStateT = {
    x: number;
    y: number;
    Dx: number;
    Dy: number;
    docked: boolean;
};

class DockingWidget extends React.PureComponent<DockingWidgetPropsT>
{
    bodyUps: Rx.Observable<Event>;
    pans: Rx.Observable<PanEvent>;
    panSub: Rx.Subscription;
    state: DockingwidgetStateT;
    wr: React.RefObject<HTMLDivElement>;
    rect: DOMRect;

    mouseDownS: Rx.Subject<MouseCoords>;

    constructor(props: DockingWidgetPropsT)
    {
        super(props);
        this.mouseDownS = new Rx.Subject();
        this.state = {
            x: 0,
            y: 0,
            Dx: 0,
            Dy: 0,
            docked: true
        };
        this.wr = React.createRef();
    }

    componentDidMount()
    {
        this.bodyUps = Rx.fromEvent(document.body as FromEventTarget<Event>, "mouseup");

        this.pans = createPanManager(this.mouseDownS, this.props.bodyMoves, this.bodyUps);

        this.panSub = this.pans.subscribe((pe: PanEvent) => {
            this.setState((prevState: DockingwidgetStateT) => {
                const x = prevState.Dx + pe.dx;
                const y = prevState.Dy + pe.dy;
                const Dx = x;
                const Dy = y;

                const docked = (x === 0) && (y === 0);
                return {
                    x, y, Dx, Dy, docked
                };
            });
        });

        /*this.mouseDownS.subscribe((o: any) => {
            console.log(o);
        })*/
        this.rect = this.wr.current? this.wr.current.getBoundingClientRect() : null;
        console.log(this.rect);
    }

    componentWillUnmount()
    {
        this.panSub.unsubscribe();
    }

    onMouseDown = (e: any) => {
        this.mouseDownS.next(event2MouseCoords(e));
    }

    render()
    {
        const transform = `translate(${this.state.x}px, ${this.state.y}px)`;
        const posx = this.rect ? this.rect.x+'px' : '';
        const posy = this.rect ? this.rect.y+'px' : '';
        const style = {
            width: this.props.width,
            height: this.props.height,
            backgroundColor: this.props.backgroundColor,
            transform: transform,
            position: this.state.docked === false ? 'fixed' : '',
            zIndex: this.state.docked === false ? '1000' : '',
            top: this.state.docked ? posx : '',
            left: this.state.docked ? posy : ''
        };

        return (
            <div ref={this.wr} className={dockingWidget} style={style} onMouseDown={this.onMouseDown} >
            </div>
        );
    }
}

export default DockingWidget;