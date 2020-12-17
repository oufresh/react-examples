import React, { useState, useEffect, useRef, useCallback } from "react";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvasContext";
import { Render } from "./Render";
import debounce from "../commons/debounce";

// This is the context that components in need of canvas-access will use:

export type CanvasProps = {
  backgroundColor?: string | fabric.Pattern;
  editing: boolean;
  //onEdit: (geoms: Array<any>) => void;
  onElementSelected: (target: any) => void;
};

const Canvas = (props: CanvasProps) => {
  const { editing } = props;
  const cRef = useRef(null);
  //const size = useWindowSize();
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);

  const buildCanvas = (width: number, height: number) => {
    //static canvas , noselection active now, no interaction for now
    console.log("build canvas: " +width +"x"+ height);
    const cv = new fabric.Canvas("c", {
      height: height,
      width: width,
      backgroundColor: "black",
      selection: false,
    });
    //cv.selectionColor = 'rgba(0,255,0,0.3)';
    //cv.selectionBorderColor = 'red';
    //cv.selectionLineWidth = 5;

    cv.hoverCursor = "pointer";
    //cv.selectionBorderColor ="#AF00AF";
    //cv.selectionLineWidth = 2;

    cv.on("mouse:down", (options) => {
      props.onElementSelected(options.target);
    });
    return cv;
  };


  //TODO
  // bisogna fare il render dopo l'effect in dipendenzadalle geometries e ge stire il resize quindi nell'effect, non serve il contxt e Render.tsx, usiamo solo funzione di render mettiamo qui 
  //gli eventi  e le disptch di modi modifica
  const onResize = debounce(() => {
    const el: React.MutableRefObject<HTMLDivElement> | null = cRef?.current;
    if (el) {
      const d: HTMLDivElement = el;
      console.log(
        " Fabric canvas new size: " + d.clientWidth + "x" + d.clientHeight
      );
      canvas?.setDimensions({width:d.clientWidth, height: d.clientHeight});
      canvas?.renderAll();
      /*canvas?.clear();
      canvas?.dispose();
      while (d.firstChild) d.removeChild(d.firstChild);
      const cv = buildCanvas(d.clientWidth, d.clientHeight);
      setCanvas(cv);*/
    }
  }, 100);
  useEffect(() => {
    if (cRef.current != null && canvas == null) {
      const el: React.MutableRefObject<HTMLDivElement> | null = cRef?.current;
      if (el) {
        const d: HTMLDivElement = el;
        console.log(
          "Build fabric canvas: " + d.clientWidth + "x" + d.clientHeight
        );

        window.addEventListener("resize", onResize);

        const cv = buildCanvas(d.clientWidth, d.clientHeight);
        setCanvas(cv);
      }
    }

    return function cleanup() {
      window.removeEventListener("resize", onResize);
      console.warn("cleanup canvas");
      canvas?.dispose();
    };
    //only on umount cleanup, disable the warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("RENDER CANVAS", canvas?.getWidth(), canvas?.getHeight());
  return (
    <div className={"Fabric-canvas"} ref={cRef}>
      <canvas id="c">
        <CanvasContext.Provider value={canvas}>
          <Render editing={editing} />
        </CanvasContext.Provider>
      </canvas>
    </div>
  );
};

export default Canvas;
