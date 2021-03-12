import { fabric } from "fabric";

export function createRect(geometry: any): fabric.Rect {
  const rect = new fabric.Rect({
    top: geometry.top,
    left: geometry.left,
    width: geometry.width,
    height: geometry.height,
    fill: geometry.fill,
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
  rect.setOptions({ name: geometry.name, data: geometry.data });

  /*rect.on("selected", (t) => {
          //da capire se non agire direttamente sulle geometries e rifare il giro o solo sull'elemento e rirenderizzarlo, 
          //il problema è che va tenuto uno sto di selezione
          //l'evento di selezione può essere utile all'esterno oltre che per evidenzire l'oggto, tipo mostrare dati su form
          //rect.set("fill", "red");
          //canvas.requestRenderAll();
      
      //console.log(t);
 
    });*/

  return rect;
}
