import React, { useEffect, useRef } from "react";
import useWindowSize from "../../../commons/windowSize";

export const CanvasApp = () => {
  const cRef = useRef(null);
  const size = useWindowSize(cRef);

  useEffect(() => {
    const canvas: HTMLCanvasElement | null = document.getElementById(
      "c"
    ) as HTMLCanvasElement;
    if (canvas) {
      const ctx = canvas.getContext("2d");

      if (ctx) {
        ctx.fillStyle = "blue";
        ctx.fillRect(
          0,
          0,
          size.width !== undefined ? size.width : 200,
          size.height !== undefined ? size.height : 200
        );
        ctx.strokeStyle = "white";
        ctx.moveTo(0, 0);
        ctx.lineTo(
          size.width !== undefined ? size.width : 200,
          size.height !== undefined ? size.height : 200
        );
        ctx.stroke();
      }
    }
  }, [size.width, size.height]);

  return (
    <div className={"Fabric-canvas"} ref={cRef}>
      <canvas id="c" width={size.width} height={size.height}></canvas>
    </div>
  );
};

export default React.memo(CanvasApp);
