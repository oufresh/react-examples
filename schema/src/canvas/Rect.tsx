import { fabric } from "fabric";
import { useContext, useEffect } from "react";
import { CanvasContext } from "./CanvasContext";

export const Rect = ({
  top,
  left,
  width,
  height,
  fill,
}: {
  top: number;
  left: number;
  width: number;
  height: number;
  fill: string;
}) => {
  const canvas = useContext(CanvasContext);
  useEffect(() => {
    if (canvas) {
      const rect = new fabric.Rect({ top, left, width, height, fill: "red" });
      canvas.add(rect);
    } else console.error("canvas null");
  }, [canvas, top, left, width, height]);
  return null;
};
