import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvasContext";
import { Render} from "./Render";

// This is the context that components in need of canvas-access will use:

export type CanvasProps = {
  geometries: Array<any>,
  backgroundColor?: string | fabric.Pattern;
  editing: boolean;
  onEdit: (geoms:Array<any>)=>void;
  onElementSelected: (target: any) => void;
}

const Canvas = (props: CanvasProps) => {
  const cRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.StaticCanvas | null>(null);

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
        cv.on('mouse:down', (options) =>{
          //console.log(options.e.clientX, options.e.clientY);
          //console.log(options);
          props.onElementSelected(options.target);
         /* if (options.target) {
            console.log(options.target.name + ":", options.target.data);
            
          } else {
            props.onElementSelected(null);
            console.log("no target");
            cv.discardActiveObject();
            cv.requestRenderAll();
          }*/
        });
        setCanvas(cv);
      }
    }

    return function cleanup() {
      console.warn("cleanup");
      canvas?.dispose();
    };
    //only on umount cleanup, disable the warning
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={"Fabric-canvas"} ref={cRef}>
      <canvas id="c">
        <CanvasContext.Provider value={canvas}>
          <Render geometries={props.geometries}/>
      </CanvasContext.Provider>
      </canvas>
    </div>
  );
};

export default Canvas;
