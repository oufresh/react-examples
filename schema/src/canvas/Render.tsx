import {useContext, useEffect} from "react";
import { CanvasContext } from "./CanvasContext";
import { render} from "./engine"

export const Render = ({geometries, editing}: {geometries: Array<any>, editing:boolean}) => {
    const canvas = useContext(CanvasContext);
    useEffect(() => {
        if (canvas) {
            canvas.clear();
            render(canvas, geometries, editing);
        } //else console.error("canvas null");

        return function cleanup() {
            if (canvas) {
                canvas.clear();
        } }
      }, [canvas, geometries,editing]);
    return null;

}