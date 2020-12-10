import {useContext, useEffect} from "react";
import { CanvasContext } from "./CanvasContext";
import { render} from "./engine"

export const Render = ({geometries}: {geometries: Array<any>}) => {
    const canvas = useContext(CanvasContext);
    useEffect(() => {
        if (canvas) {
            canvas.clear();
            render(canvas, geometries);
        } else console.error("canvas null");

        return function cleanup() {
            if (canvas) {
                canvas.clear();
        } }
      }, [canvas, geometries]);
    return null;

}