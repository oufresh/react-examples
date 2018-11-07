import * as Rx from 'rxjs';
import * as Operators from 'rxjs/operators';

export type PanEvent = 
{
    dx: number;
    dy: number;
    pX: number;
    pY: number;
};

export type MouseCoords = {
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
}

export function createPanManager(mouseDowns: Rx.Observable<MouseCoords>, bodyMoves: Rx.Observable<Event>, bodyUp: Rx.Observable<Event>): Rx.Observable<PanEvent>
{
    const mousePan: Rx.Observable<PanEvent> = mouseDowns.pipe(Operators.switchMap((contactPoint: MouseEvent) => {
        let moveXPrec = 0;
        let moveYPrec = 0;
        return bodyMoves.pipe(
            Operators.takeUntil(bodyUp),
            Operators.map((movePoint: MouseEvent): PanEvent=>{
                movePoint.preventDefault();

                //calcolo di quanto mi sono spostato rispetto alla posizione precendente e passo il delta
                let moveX = ((movePoint.pageX - contactPoint.pageX) /*- contRect.left*/);
                let moveY = ((movePoint.pageY - contactPoint.pageY) /*- contRect.top*/);

                let pX = movePoint.pageX;
                let pY = movePoint.pageY

                let dx = moveX - moveXPrec;
                let dy = moveY - moveYPrec;

                moveXPrec = moveX;
                moveYPrec = moveY;

                let ret: PanEvent = {
                    dx, dy, pX, pY
                }
                return ret;
            })
        );
    }));

    return mousePan;
}

export function event2MouseCoords(e: MouseEvent): MouseCoords {
    return {
        clientX: e.clientX,
        clientY: e.clientY,
        pageX: e.pageX,
        pageY: e.pageY
    };
}



function isInside(rect: ClientRect, pX: number, pY: number): boolean
{
    if ((pX - rect.left) < 0)
        return false;
    if ((pX - rect.right) > 0)
        return false;
    if ((pY - rect.top) < 0) {
        return false;
    }
    if ((pY - rect.bottom) > 0)
        return false;

    return true;
}

function translate(element: HTMLElement, dx: number, dy: number): void
{
    element.style.transform = `translate(${dx}px, ${dy}px)`;
}

function softTranslate(element: HTMLElement, dx: number, dy: number): void
{
    element.style.transition = 'transform 100ms linear';
    element.style.transform = `translate(${dx}px, ${dy}px)`;
    const tr = () => {
        element.style.transition = '';
        element.removeEventListener('transitionend', tr);
    }
    element.addEventListener('transitionend', tr);
}

function startPan(palette: HTMLElement, element: HTMLElement): void
{
    let mouseDowns = Rx.fromEvent(element, "mousedown");
    let mouseMoves = Rx.fromEvent(element, "mousemove");
    //let mouseUps = Rx.fromEvent(element, "mouseup");
    let paletteRect = palette.getBoundingClientRect();
    let bodyMoves = Rx.fromEvent(document.body, "mousemove");
    let bodyUp = Rx.fromEvent(document.body, "mouseup");

    //usiamo pipe!!!
    let mousePan: Rx.Observable<PanEvent> = mouseDowns.pipe(Operators.switchMap((contactPoint: MouseEvent) => {
        let moveXPrec = 0;
        let moveYPrec = 0;
        return bodyMoves.pipe(
            Operators.takeUntil(bodyUp),
            Operators.map((movePoint: MouseEvent): PanEvent=>{
                movePoint.preventDefault();

                //calcolo di quanto mi sono spostato rispetto alla posizione precendente e passo il delta
                let moveX = ((movePoint.pageX - contactPoint.pageX) /*- contRect.left*/);
                let moveY = ((movePoint.pageY - contactPoint.pageY) /*- contRect.top*/);

                let pX = movePoint.pageX;
                let pY = movePoint.pageY

                let dx = moveX - moveXPrec;
                let dy = moveY - moveYPrec;

                moveXPrec = moveX;
                moveYPrec = moveY;

                let ret: PanEvent = {
                    dx, dy, pX, pY
                }
                return ret;
            })
        );
    }));


    // For each mouse drag event, translate the sprite to the absolute page position.
    let x = 0;
    let y = 0;
    let Dx = 0;
    let Dy = 0;
    let docked = true;

    translate(element, x, y);

    const sub = mousePan.subscribe((dragPoint: PanEvent) => {
        //sommo i delta per ottenere la nuova posizione
        //memorizzando quella precedente in modo da applicare la translate incrementando la precedente traslazione
        //lavoro in modo incrementale per gestire più azioni di spostamento

        x = Dx + dragPoint.dx;
        y = Dy + dragPoint.dy;
        Dx = x;
        Dy = y;

        translate(element, x, y);

        const d = isInside(palette.getBoundingClientRect(), dragPoint.pX, dragPoint.pY);
        if (d == false)
            element.dataset.docked = 'false';
        else
            element.dataset.docked = 'moving';

        adjustPaletteHeight(palette);
    });

    //voglio sapere quando il div è rilasciato nella palette
    const mDock = mouseDowns.pipe(Operators.switchMap((contactPoint: MouseEvent) => {
        return mouseMoves.pipe(Operators.switchMap((movePoint: MouseEvent)=>{
            return bodyUp.pipe(Operators.filter(mouseUp => {
                return isInside(palette.getBoundingClientRect(), movePoint.pageX, movePoint.pageY);
            }));
        }));
    }));

    //quando il div è rilasciato nella palette lo inserisco
    const mDockSub = mDock.subscribe(() => {
        console.log("dock");
        element.dataset.docked = 'true';
        adjustPaletteHeight(palette);
        softTranslate(element, 0, 0);
        x = 0;
        y = 0;
        Dx = 0;
        Dy = 0;
    });
}

function adjustPaletteHeight(palette: HTMLElement)
{
    let Dh = 0;
    for (let i = 0; i < palette.children.length; i++) {
        let c = palette.children[i] as HTMLElement;
        if (c.dataset.docked === 'true' || c.dataset.docked === 'moving') {
            Dh += c.getBoundingClientRect().height;
            Dh += 5;
        }
    }

    let hp = 30 + Dh;

    palette.style.height = hp + "px";
}
