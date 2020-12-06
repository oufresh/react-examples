import {useContext, useEffect} from "react";
import { CanvasContext } from "./CanvasContext";
import { fabric } from "fabric";

export const Render = ({geometries}: {geometries: Array<any>}) => {
    const canvas = useContext(CanvasContext);
    useEffect(() => {
        if (canvas) {
            for (const geom of geometries) {
                const rect = new fabric.Rect({ top: geom.top, left: geom.left, width:geom.width, height: geom.height, fill: geom.fill, stroke: geom.stroke, strokeWidth: geom.strokeWidth });
                canvas.add(rect);
            }
          
        } else console.error("canvas null");

        return function cleanup() {
            if (canvas) {
                canvas.clear();
        } }
      }, [canvas, geometries]);
    return null;

}