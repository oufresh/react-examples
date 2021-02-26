import { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvasContext";
import { render } from "./engine";
import { SchemaStateType } from "../schema";

export const Render = ({ editing }: { editing: boolean }) => {
  const canvas = useContext(CanvasContext);
  const dispatch = useDispatch();
  const geometries = useSelector((s: SchemaStateType) => s.geometries);
 // console.log(geometries);

  const objectMoved = useCallback(
    (e: fabric.IEvent) => {
      if (e.target) {
        const target = e.target as fabric.Object;
        console.log("Object moved");
        console.log("Object: " + target.name);
        console.log("Object type: " + target.type);
        //console.log("isMoving:" + target.isMoving);
        console.log("top: " + target.top + ",left: " + target.left);
        dispatch({
          type: "SaveGeometries",
          payload: [
            {
              name: target.name,
              type: target.type,
              top: target.top,
              left: target.left,
            },
          ],
        });
      }
    },
    [dispatch]
  );

  const objectScaling = useCallback((e: fabric.IEvent) => {}, []);
  const objectScaled = useCallback((e: fabric.IEvent) => {}, []);
  const objectRotating = useCallback((e: fabric.IEvent) => {}, []);
  const objectRotated = useCallback((e: fabric.IEvent) => {}, []);
  const objectMoving = useCallback((e: fabric.IEvent) => {
    //gestire connections
    if (e.target) {
      //console.log(e.target.aCoords);
      //console.log(e.target.oCoords);
      //console.log(e.target.top - e.target.t);
      const t = e.transform as any;

      //search for delta moving
      console.log(t.action);
      console.log("transform originX: " + e.transform?.originX);
      console.log("transform originY: " + e.transform?.originY);
      //e.
      console.log(t);
      //console.log("target.top: " +e.target.top + ", t.lastY:" + t.lastY)
      console.log("Y diff: " + ((e.target.top as number) - t.original.top));
      console.log("X diff: " + ((e.target.left as number) - t.original.left));
      //console.log(t)

      /*
            se ha un anchor devo muovere l'oggetto collegato
    
            se intercetta un altro oggetto ed è un a linea sidve agganciare dove possibile
            */
    }
  }, []);
  useEffect(() => {
    function clearListenersAndDrawings(c: fabric.Canvas | fabric.StaticCanvas) {
      c.off("object:moving", objectMoving);
      c.off("object:moved", objectMoved);
      c.off("object:scaling", objectScaling);
      c.off("object:scaled", objectScaled);
      c.off("object:rotating", objectRotating);
      c.off("object:rotated", objectRotated);
      c.clear();
    }

    if (canvas) {
      clearListenersAndDrawings(canvas);
      //rendring  and editing events
      canvas.on("object:moving", objectMoving);
      canvas.on("object:moved", objectMoved);
      canvas.on("object:scaling", objectScaling);
      canvas.on("object:scaled", objectScaled);
      canvas.on("object:rotating", objectRotating);
      canvas.on("object:rotated", objectRotated);
      render(canvas, geometries, editing);
    }

    return function cleanup() {
      if (canvas) {
        canvas.clear();
      }
    };
  }, [
    canvas,
    geometries,
    objectMoved,
    objectMoving,
    objectScaling,
    editing,
    objectRotating,
  ]);
  return null;
};
