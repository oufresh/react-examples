import React, { useState, useEffect, useRef, useCallback } from "react";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvasContext";
import { Render} from "./Render";
import { on } from "cluster";

// This is the context that components in need of canvas-access will use:

export type CanvasProps = {
  geometries: Array<any>,
  backgroundColor?: string | fabric.Pattern;
  editing: boolean;
  onEdit: (geoms:Array<any>)=>void;
  onElementSelected: (target: any) => void;
  onObjectMoving: (target: fabric.Object | undefined, transform: any) => void;
  onObjectMoved: (target: fabric.Object | undefined, transform: any) => void;
}

const Canvas = (props: CanvasProps) => {
  const { editing,onObjectMoving, onObjectMoved } = props;
  const cRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.StaticCanvas | null>(null);
  const objectMoving = useCallback((e:fabric.IEvent)=>{
    onObjectMoving(e.target, e.transform);
  }, [onObjectMoving]);

  const objectMoved = useCallback((e:fabric.IEvent)=>{
    onObjectMoved(e.target, e.transform);
  },[onObjectMoved]);

  useEffect(() => {
    if (cRef.current != null && canvas == null) {
      const el: React.MutableRefObject<HTMLDivElement> | null = cRef?.current;
      if (el) {
        const d: HTMLDivElement = el;
        console.log("Build fabric cnvas: " + d.clientWidth + "x" + d.clientHeight);

        //static canvas , noselection active now, no interaction for now
        const cv = new fabric.Canvas("c", {
          height: d.clientHeight,
          width: d.clientWidth,
          backgroundColor: "black",
          selection: false
        });
        //cv.selectionColor = 'rgba(0,255,0,0.3)';
        //cv.selectionBorderColor = 'red';
        //cv.selectionLineWidth = 5;
        
        cv.hoverCursor = 'pointer';
        //cv.selectionBorderColor ="#AF00AF";
        //cv.selectionLineWidth = 2;
        cv.on("object:moving", objectMoving);
        cv.on("object:moved",objectMoved);
        cv.on("object:scaling", ()=>{});
        cv.on("object:rotating", ()=>{});
        cv.on('mouse:down', (options) => {
          props.onElementSelected(options.target);
        });
        setCanvas(cv);
      }
    }

    return function cleanup() {
      console.warn("cleanup canvas");
      canvas?.dispose();
    };
    //only on umount cleanup, disable the warning
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"Fabric-canvas"} ref={cRef}>
      <canvas id="c">
        <CanvasContext.Provider value={canvas}>
          <Render editing={editing} geometries={props.geometries}/>
      </CanvasContext.Provider>
      </canvas>
    </div>
  );
};

export default Canvas;
