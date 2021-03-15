import { fabric } from "fabric";
import React, {  useEffect, useRef, useState } from "react";
import { Render } from "./Render";
import { CanvasContext, buildCanvas,isCanvas, getCanvas, dispose, resize } from "./CanvasContext";

// This is the context that components in need of canvas-access will use:

export type CanvasProps = {
  backgroundColor?: string | fabric.Pattern;
  width: number;
  height: number;
  editing?: boolean;
  onObjectMoving?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectMoved?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectScaling?: (e: fabric.IEvent) => void; //TOD no event but new coordsth geom moving
  onObjectScaled?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectRotating?: (e: fabric.IEvent) => void; //TOD no event but new coordsth geom moving
  onObjectRotated?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectSelected?: (targetNme: string | undefined, targetData: any | undefined) => void;
};

const Canvas = (props: CanvasProps) => {
  const {width, height, onObjectSelected } = props;
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const [ built, setBuilt] = useState(false);

  useEffect(() => {
    if (!isCanvas() && !built) {
      buildCanvas(canvasEl.current, width, height, onObjectSelected);
      setBuilt(true);
    }

    return function cleanup() {
      console.warn("cleanup canvas");
      dispose();
      setBuilt(false);
    };
    //only on umount cleanup, disable the warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (isCanvas() && built) {
      resize(width, height);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);
  console.log("RENDER CANVAS", width, height);
  return (
    <canvas id="c" ref={canvasEl}>
      <CanvasContext.Provider value={getCanvas()} >
        {built ? <Render editing={false} /> : null}
      </CanvasContext.Provider>
    </canvas>
  );
};

export default React.memo(Canvas, (prevProps, nextProps) => {
  if (
    prevProps.width !== nextProps.width || prevProps.height !== nextProps.height
  ) return false;
  else return true;

});
