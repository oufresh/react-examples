import { fabric } from "fabric";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Render } from "./Render";
import {
  CanvasContext,
  buildCanvas,
  isCanvas,
  getCanvas,
  dispose,
  resize,
  OnSelectionCreated,
  OnSelectionCleared,
  SelectionEvent,
  DeSelectionEvent
} from "./CanvasContext";
import { useSelector, useDispatch } from "react-redux";
import { SchemaStateType } from "../..";

export type CanvasProps = {
  backgroundColor?: string | fabric.Pattern;
  width: number;
  height: number;
  onObjectMoving?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectMoved?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectScaling?: (e: fabric.IEvent) => void; //TOD no event but new coordsth geom moving
  onObjectScaled?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
  onObjectRotating?: (e: fabric.IEvent) => void; //TOD no event but new coordsth geom moving
  onObjectRotated?: (e: fabric.IEvent) => void; //TODO no event but new coordsth geom moving
};

const Canvas = (props: CanvasProps) => {
  const { width, height } = props;
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const [built, setBuilt] = useState(false);
  const editing = useSelector((s: SchemaStateType) => s.editing);

  const dispatch = useDispatch();

  /**
   * lock movement if not editing on selection
   */
  const onSelectionCreated = useCallback<OnSelectionCreated>(
    (event: SelectionEvent) => {
      if (!editing) {
        if (event.selected.some((obj) => obj.lockMovementX)) {
          if (event.target) event.target.lockMovementX = true;
        }
        if (event.selected.some((obj) => obj.lockMovementY)) {
          if (event.target) event.target.lockMovementY = true;
        }
        dispatch({
          type: "SelectObjects",
          payload: event.selected
        });
      }
    },
    [editing, dispatch]
  );

  const onSelectionCleared = useCallback<OnSelectionCleared>(
    (event: DeSelectionEvent) => {
      dispatch({
        type: "DeSelectObjects",
        payload: event.deselected
      });
    },
    []
  );

  useEffect(() => {
    if (!isCanvas() && !built) {
      buildCanvas(
        canvasEl.current,
        width,
        height,
        onSelectionCreated,
        onSelectionCleared
      );
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [width, height]);
  console.log("RENDER CANVAS", width, height);
  return (
    <canvas id="c" ref={canvasEl}>
      <CanvasContext.Provider value={getCanvas()}>
        {built ? <Render editing={editing} /> : null}
      </CanvasContext.Provider>
    </canvas>
  );
};

export default React.memo(Canvas, (prevProps, nextProps) => {
  if (
    prevProps.width !== nextProps.width ||
    prevProps.height !== nextProps.height
  )
    return false;
  else return true;
});
