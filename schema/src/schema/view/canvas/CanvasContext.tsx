import { fabric } from "fabric";
import { createContext } from "react";

// Here are the things that can live in the fabric context.
export interface TCanvas {
  // The canvas
  canvas: fabric.Canvas | fabric.StaticCanvas | null;
  width: number;
  height: number;
  onObjectSelected?: (targetNme: string | undefined, targetData: any | undefined) => void;
}

let Canvas: TCanvas | null = null;

const onMouseDown = (event: fabric.IEvent) => {
  if (Canvas)
    if (Canvas.onObjectSelected) {
      if (event.target)
        Canvas.onObjectSelected(event.target.name, event.target.data);
        else {
            Canvas.onObjectSelected(undefined, undefined);
        }
    }
};

// This is the context that components in need of canvas-access will use:
export const CanvasContext = createContext<
  fabric.Canvas | fabric.StaticCanvas | null
>(null);
export const buildCanvas = (
  canvasEl: HTMLCanvasElement | null,
  width: number,
  height: number,
  onObjectSelected?: (targetNme: string | undefined, targetData: any) => void
) => {
  //static canvas , noselection active now, no interaction for now
  console.log("build canvas: " + width + "x" + height);
  //CanvasContext.
  const fcv = new fabric.Canvas(canvasEl, {
    height: height,
    width: width,
    backgroundColor: /*backgroundColor ? backgroundColor :*/ "black",
    selection: false, //TODO no MULTI SELECTION FOR NOW
  });
  //cv.selectionColor = 'rgba(0,255,0,0.3)';
  //cv.selectionBorderColor = 'red';
  //cv.selectionLineWidth = 5;

  fcv.hoverCursor = "pointer";
  //cv.selectionBorderColor ="#AF00AF";
  //cv.selectionLineWidth = 2;
  if (onObjectSelected) {
    fcv.on("mouse:down", onMouseDown);
  }

  Canvas = {canvas:fcv, width: width, height:height, onObjectSelected: onObjectSelected};
};

export const isCanvas = () => Canvas !== null;

export const getCanvas = () => Canvas ? Canvas.canvas : null;

export const resize = (width: number, height: number) => {
    if ( width !== Canvas?.width && height !== Canvas?.height){
        console.log("RESIZE");
        Canvas?.canvas?.setWidth(width);
        Canvas?.canvas?.setHeight(height);
        Canvas?.canvas?.calcOffset();
        Canvas?.canvas?.renderAll();
    }
};

export const dispose = () => {
  Canvas?.canvas?.off("mouse:down", onMouseDown);
  Canvas?.canvas?.dispose();
};
