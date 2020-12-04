import React, { useState,useEffect } from "react";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvasContext";

// This is the context that components in need of canvas-access will use:

const Canvas = (props: any) => {
    const [canvas, setCanvas ]= useState<fabric.Canvas |null>(null);
  
  useEffect(() => {
      console.log("------");
      const cv = new fabric.Canvas("c", {
        height: 800,
        width: 800,
        backgroundColor: "pink"});
        setCanvas(cv);

        return function cleanup() {
            canvas?.dispose();
        }
      }, []);

  return (
    <canvas className={props.classname} id="c">
      <CanvasContext.Provider value={canvas}>
        {props.children}
      </CanvasContext.Provider>
    </canvas>
  );
};

export default Canvas;
