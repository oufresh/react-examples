import { fabric } from "fabric";
import { createRect, createLine } from "./geometries";

export const render = (
  canvas: fabric.Canvas | fabric.StaticCanvas | null,
  geometries: Array<any>,
  editing: boolean
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
        obj = createLine(geom);
        break;
      default:
        obj = null;
        break;
    }
    console.log(obj);
    console.log(obj?.type);
    if (editing === true) {
      //editing mode
      obj?.set("lockMovementX", false);
      obj?.set("lockMovementY", false);
    } else {
      obj?.set("lockMovementX", true);
      obj?.set("lockMovementY", true);
    }
    if (obj) canvas.add(obj);
  }
};
