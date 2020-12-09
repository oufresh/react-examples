import {useContext, useEffect} from "react";
import { CanvasContext } from "./CanvasContext";
import { fabric } from "fabric";

export const Render = ({geometries}: {geometries: Array<any>}) => {
    const canvas = useContext(CanvasContext);
    useEffect(() => {
        if (canvas) {
            canvas.clear();
            for (const geom of geometries) {
                const rect = new fabric.Rect({ top: geom.top, left: geom.left, width:geom.width, height: geom.height, fill: geom.fill, stroke: geom.stroke, strokeWidth: geom.strokeWidth });
                rect.selectable = true;
                rect.lockMovementX = true;
                rect.lockMovementY = true;
                rect.lockRotation = true
                rect.lockScalingFlip = true;
                rect.lockScalingX  = true;
                rect.lockScalingY = true;
                rect.lockSkewingX = true;
                rect.lockSkewingY = true;
                rect.lockUniScaling =true;
                rect.hasControls = false;
               // rect.borderColor = "#AF00AFF";
                rect.set("padding", 5);
                //rect.selectionBackgroundColor = "transparent";
                
                rect.setOptions({ name: "pippo", data:{a:50}});
                rect.on("selected", (t) => {
                    //da capire se non agire direttamente sulle geometries e rifare il giro o solo sull'elemento e rirenderizzarlo, 
                    //il problema è che va tenuto uno sto di selezione
                    //l'evento di selezione può essere utile all'esterno oltre che per evidenzire l'oggto, tipo mostrare dati su form
                    //rect.set("fill", "red");
                    //canvas.requestRenderAll();
                
                //console.log(t);
                });
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