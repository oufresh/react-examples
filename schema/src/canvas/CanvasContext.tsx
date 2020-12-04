import { fabric } from "fabric";
import { createContext } from "react";

// Here are the things that can live in the fabric context.
export interface TCanvasContext {
    // The canvas
    canvas: fabric.Canvas | null;
};

// This is the context that components in need of canvas-access will use:
export const CanvasContext = createContext<fabric.Canvas |null>(null);
 