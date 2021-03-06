import { useCallback, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fabric } from "fabric";
import { CanvasContext } from "./CanvasContext";
import { render, getObject, drageEnd} from "./engine";
import { SchemaStateType } from "../..";

export const Render = ({ editing }: { editing: boolean }) => {
  const canvas = useContext(CanvasContext);
  const dispatch = useDispatch();
  const geometries = useSelector((s: SchemaStateType) => s.geometries);
  // console.log(geometries);

  const objectMoved = useCallback(
    (e: fabric.IEvent) => {
      if (e.target) {
        const target = e.target as fabric.Object | any ;
        console.log("Object moved");
        console.log("Object: " + target.name);
        console.log("Object type: " + target.type);
        //console.log("isMoving:" + target.isMoving);
        const t = e.transform as any;
        const dy= ((e.target.top as number) - t.original.top)
        const dx = ((e.target.left as number) - t.original.left);
        console.log("Y diff: " + dy);
        console.log("X diff: " + dx);
        //console.log("top: " + target.top + ",left: " + target.left);
        //se multiple iltarget è la selezione quindi posso prendere da li i dati di drag in termini di variazione
        //in _objects ci dovrebbero essere gli oggettidevo prendere da li i nomi e id quando sono multipli bisogna fare la differenza
        //delle coords

        //if(target._objects && target._objects.length > 1) {
          
        //}
        const gs= drageEnd(e, geometries);//[{
          /*name: target.name,
          type: target.type,
          dx, dy
        }];*/

        /*if (target.data) {
          if (target.data.connections && target.data.connections.length > 0) {
            const c = target.data.connections[0];
            const ancored = geometries.find(g => g.name === c.name);
            console.log(ancored);
            gs.push({
              name: ancored.name,
              type: ancored.type,
              dx,dy
            });
        }
      }*/
        dispatch({
          type: "SaveGeometries",
          payload: {
            geometries: gs,
          },
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
      const target = e.target as any;
      const transform = e.transform as any;

      //search for delta moving
      //console.log(target.action);
      //console.log(t);
      const dy= ((e.target.top as number) - transform.original.top)
      const dx = ((e.target.left as number) - transform.original.left);
        //console.log("Y diff: " + dy);
        //console.log("X diff: " + dx);
        if (target.data) {
          if (target.data.connections && target.data.connections.length > 0) {
            const c = target.data.connections[0];
            const ancored = geometries.find(g => g.name === c.name);
            //console.log(ancored);
            if(ancored.type ==="line"){
              const coords = [ancored.coords[0]+ dx, ancored.coords[1]+dy, ancored.coords[2], ancored.coords[3]];
              //console.log(coords);
//da trovare nel canvas..
              const ancoredCanvas = getObject(canvas, ancored.name, "line");
              if(ancoredCanvas)
              console.log(coords);
              //ancoredCanvas.set({'x1': coords[0], 'y1': coords[1]});
              //canvas?.renderAll();
            }
        }
      }
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
      console.log("render geoms...");
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
