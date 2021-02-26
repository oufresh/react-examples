import { fabric } from "fabric";
import React, { useCallback, useEffect, useState } from "react";
import debounce from "../commons/debounce";
import { CanvasContext } from "./CanvasContext";
import { Render } from "./Render";

// This is the context that components in need of canvas-access will use:

export type CanvasProps = {
  backgroundColor?: string | fabric.Pattern;
  width: number;
  height: number;
  editing: boolean;
  onObjectMoving?:(e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectMoved?:(e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectScaling?: (e: fabric.IEvent) => void; //TOD no event but new coordsth geom moving
  onObjectScaled?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectRotating?: (e: fabric.IEvent) => void; //TOD no event but new coordsth geom moving
  onObjectRotated?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectSelected?: (targetNme: string | undefined, targetData: any) => void;
};

const Canvas = (props: CanvasProps) => {
  const { editing, backgroundColor, width, height, onObjectSelected} = props;
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const buildCanvas = () => {
    //static canvas , noselection active now, no interaction for now
    console.log("build canvas: " + width +"x"+ height);
    const cv = new fabric.Canvas("c", {
      height: height,
      width: width,
      backgroundColor: backgroundColor ? backgroundColor: "black",
      selection: false, //TODO no MULTI SELECTION FOR NOW
    });
    //cv.selectionColor = 'rgba(0,255,0,0.3)';
    //cv.selectionBorderColor = 'red';
    //cv.selectionLineWidth = 5;

    cv.hoverCursor = "pointer";
    //cv.selectionBorderColor ="#AF00AF";
    //cv.selectionLineWidth = 2;

    return cv;
  };

  const objSelected = useCallback((event: fabric.IEvent) =>{
    if(onObjectSelected) {
      if(event.target) {
        onObjectSelected(event.target.name, event.target.data);
      }
    }
  }, []);


  //TODO
  // bisogna fare il render dopo l'effect in dipendenzadalle geometries e ge stire il resize quindi nell'effect, non serve il contxt e Render.tsx, usiamo solo funzione di render mettiamo qui 
  //gli eventi  e le disptch di modi modifica
  const onResize = debounce(() => {
      console.log(
        " Fabric canvas new size: " + width + "x" + height
      );
      canvas?.setDimensions({width:width, height: height});
      canvas?.renderAll();
      /*canvas?.clear();
      canvas?.dispose();
      while (d.firstChild) d.removeChild(d.firstChild);
      const cv = buildCanvas(d.clientWidth, d.clientHeight);
      setCanvas(cv);*/
  }, 100);

  useEffect(() => {
    if (canvas == null) {
        console.log(
          "Build fabric canvas: " + width + "x" + height
        );
        const cv = buildCanvas();
        cv.on("mouse:down", objSelected);
        setCanvas(cv);
    }

    return function cleanup() {
      console.warn("cleanup canvas");
      canvas?.off("mouse:down", objSelected);
      canvas?.dispose();
    };
    //only on umount cleanup, disable the warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("RENDER CANVAS", canvas?.getWidth(), canvas?.getHeight());
  return (
      <canvas id="c">
        <CanvasContext.Provider value={canvas}>
          <Render editing={editing} />
        </CanvasContext.Provider>
      </canvas>
  );
};

export default Canvas;
