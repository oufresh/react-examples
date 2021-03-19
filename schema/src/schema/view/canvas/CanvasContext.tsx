import { fabric } from "fabric";
import { createContext } from "react";

export type SelectionEvent = {
  e: MouseEvent;
  target?: fabric.Object;
  selected: Array<fabric.Object>;
} 

export type DeSelectionEvent = {
  e: MouseEvent;
  deselected: Array<fabric.Object>;
} 
export type OnSelectionCreated = (event: SelectionEvent) => void;
export type OnSelectionCleared = (event: DeSelectionEvent) => void;
export interface TCanvas {
  // The canvas
  canvas: fabric.Canvas | fabric.StaticCanvas | null;
  width: number;
  height: number;
  onSelectionCreated?: OnSelectionCreated;
  onSelectionCleared?: OnSelectionCleared;
}

let Canvas: TCanvas | null = null;

// This is the context that components in need of canvas-access will use:
export const CanvasContext = createContext<
  fabric.Canvas | fabric.StaticCanvas | null
>(null);
export const buildCanvas = (
  canvasEl: HTMLCanvasElement | null,
  width: number,
  height: number,
  onSelectionCreated?: OnSelectionCreated,
  onSelectionCleared?: OnSelectionCleared
) => {
  console.log("build canvas: " + width + "x" + height);
  //CanvasContext.
  const fcv = new fabric.Canvas(canvasEl, {
    height: height,
    width: width,
    backgroundColor: /*backgroundColor ? backgroundColor :*/ "black",
    selection: true, //TODO no MULTI SELECTION FOR NOW
  });
  fcv.selectionColor = 'rgba(255,0,0,0.3)';
  fcv.selectionBorderColor = 'red';
  fcv.selectionLineWidth = 5;

  fcv.hoverCursor = "pointer";
  //cv.selectionBorderColor ="#AF00AF";
  //cv.selectionLineWidth = 2;
  if (onSelectionCreated) {
    fcv.on("selection:created", (onSelectionCreated) as ()=> void);
    if(onSelectionCleared)
    fcv.on("selection:cleared", onSelectionCleared as ()=> void);
  }

  Canvas = {canvas:fcv, width: width, height:height, onSelectionCreated: onSelectionCreated, onSelectionCleared: onSelectionCleared};
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
  Canvas?.canvas?.off("selection:created", Canvas.onSelectionCreated  as ()=> void);
  Canvas?.canvas?.off("selection:cleared", Canvas.onSelectionCleared  as ()=> void);
  Canvas?.canvas?.dispose();
};
