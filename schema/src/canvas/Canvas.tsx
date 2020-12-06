import React, { useState, useEffect, useRef } from "react";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvasContext";
import { Render} from "./Render";

// This is the context that components in need of canvas-access will use:

export type CanvasProps = {
  geometries: Array<any>,
  backgroundColor?: string | fabric.Pattern;
}

const Canvas = (props: CanvasProps) => {
  const cRef = useRef(null);
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  useEffect(() => {
    if (cRef.current != null && canvas == null) {
      const el: React.MutableRefObject<HTMLDivElement> | null = cRef?.current;
      if (el) {
        const d: HTMLDivElement = el;
        console.log("Build fabric cnvas: " + d.clientWidth + "x" + d.clientHeight);
        const cv = new fabric.Canvas("c", {
          height: d.clientHeight,
          width: d.clientWidth,
          backgroundColor: "black",
        });
        setCanvas(cv);
      }
    }

    return function cleanup() {
      console.warn("cleanup");
      //canvas?.dispose();
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
