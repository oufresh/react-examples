import { fabric } from "fabric";
import { createRect, createLine } from "./geometries";

export const render = (
  canvas: fabric.Canvas | fabric.StaticCanvas | null,
  geometries: Array<any>
): void => {
  if (canvas == null) return;
  canvas.clear();
  for (const geom of geometries) {
    let obj: fabric.Object | null = null;
    switch (geom.type) {
      case "rect":
        obj = createRect(geom);
        break;
      case "line":
          console.log(geom);
          obj = createLine(geom);
          break;
      default:
          obj = null;
        break;
    }
    if (obj) canvas.add(obj);
  }
};
