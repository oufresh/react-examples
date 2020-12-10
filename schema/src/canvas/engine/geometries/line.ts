import { fabric } from "fabric";

export function createLine(geometry: any): fabric.Line {
  const line = new fabric.Line(geometry.coords, {
    stroke: geometry.stroke,
    strokeWidth: geometry.strokeWidth,
    selectable: true,
    evented: true,
    lockMovementX: true,
    lockMovementY: true,
    lockScalingX: true,
    lockSkewingY: true,
    lockRotation: true,
    lockScalingY: true,
    lockSkewingX: true,
    lockScalingFlip: true,
    lockUniScaling: true,
    hasControls: false,
    selectionBackgroundColor: "transparent",
    padding: 5,
  });
  line.setOptions({ name: "pippo", data: { a: 50 } });
  return line;
}
