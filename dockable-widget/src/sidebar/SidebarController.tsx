import * as React from 'react';
import * as Rx from 'rxjs';
import * as Operators from 'rxjs/operators';

import Sidebar from './Sidebar';

interface SidebarControllerProps {};
interface SidebarControllerState {
    show: boolean;
};

class SidebarController extends React.Component<SidebarControllerProps, SidebarControllerState>
{
    state: SidebarControllerState;
    mouseMoves: Rx.Observable<Event>;
    inside: Rx.Observable<any>;
    outside: Rx.Observable<any>;

    constructor(props: SidebarControllerProps)
    {
        super(props);
        this.state = {
            show: false
        };
    }

    componentDidMount()
    {
        this.mouseMoves = Rx.fromEvent(window, "mousemove");

        this.outside = this.mouseMoves.pipe(Operators.filter((e: MouseEvent) => {
            return e.clientX >= 200;
        }));

        this.outside.subscribe((outside: any) => {
            if (this.state.show === true) {
                console.log('CHIUDO BARRA!!!!!');
                this.setState((p: SidebarControllerState) => {
                    return {
                        show: false
                    };
                });
            }
        });

        let x = -1;

        this.inside = this.mouseMoves.pipe(Operators.filter((e: MouseEvent) => {
            x = e.clientX;
            return e.clientX <= 0;
        }), Operators.mergeMap((t: boolean) => {
            console.log('Launch timer');
            return Rx.timer(500);
        }), Operators.filter((v: any) => {
            //console.log('Guardo la coordinata del mouse: ' + x);
            if (x <= 3) {
                //console.log('Ancora dentro');
                return true;
            } else {
                //console.log('Andata fuori');
                return false;
            }
        })
        );
        
        this.inside.subscribe((inside: any) => {
            //console.log('Received inside: ' + inside);
            console.log('APRO BARRA!!!!!');
            if (this.state.show === false) {
                this.setState((p: SidebarControllerState) => {
                    return {
                        show: true
                    };
                });
            }
        });
    }

    render()
    {
        return <Sidebar show={this.state.show} />;
    }
}

export default SidebarController;