import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import Canvas from "./canvas/Canvas";
import { ElementDetails } from "./details/Elememtdetails";
import { useSelector, useDispatch } from "react-redux";
import { SchemaStateType } from "./schema";

function App() {
  const dispatch = useDispatch();
  const editing = useSelector((s: SchemaStateType) => s.editing);
  const geometries = useSelector((s: SchemaStateType) => s.geometries);
  const [selectedTarget, setSelectedTarget] = useState<any>(null);

  useEffect(() => {}, []);

  const onEdit = useCallback((geoms: Array<any>) => {}, []);

  const onClickEdit = useCallback(() => {
    dispatch({
      type: "ToggleEditing",
    });
  }, [dispatch]);

  const onElementSelected = useCallback((target: any) => {
    console.warn(target);
    if (target) setSelectedTarget(target);
    else setSelectedTarget(null);
  }, []);

  const onObjectMoving = useCallback((target: any, transform: any) => {
    //console.log(target);
    //console.log("Object: " + target.name);
    //console.log("isMoving:" + target.isMoving);
    //console.log("top " + target.top + "left " + target.left);
    //console.log(transform);
  }, []);

  const onObjectMoved = useCallback(
    (target: any, transform: any) => {
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
    },
    [dispatch]
  );

  return (
    <div className="App">
      <header className="App-header">Schema App</header>
      <main className="App-main">
        <div className="App-canvas">
          <Canvas
            editing={editing}
            onObjectMoving={onObjectMoving}
            onObjectMoved={onObjectMoved}
            geometries={geometries}
            onEdit={onEdit}
            onElementSelected={onElementSelected}
          />

          {selectedTarget != null ? (
            <ElementDetails
              name={selectedTarget.name}
              info={selectedTarget.data}
            />
          ) : null}
        </div>
        <div className="App-bar">
          <label className="App-label">Schema tools</label>
          <button
            className={"App-bar-button" + (editing ? " App-bar-button-on" : "")}
            onClick={onClickEdit}
          >
            Edit
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
