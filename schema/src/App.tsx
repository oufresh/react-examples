import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
//import Canvas from "./canvas/Canvas";
import { ElementDetails } from "./details/Elememtdetails";
import { useSelector, useDispatch } from "react-redux";
import { SchemaStateType } from "./schema/module";
import CanvasApp from "./schema/view/canvas/CanvasApp";

function App() {
  const dispatch = useDispatch();
  const editing = useSelector((s: SchemaStateType) => s.editing);
  //const geometries = useSelector((s: SchemaStateType) => s.geometries);
  const [selectedTarget, setSelectedTarget] = useState<any>(null);

  useEffect(() => {}, []);

  //const onEdit = useCallback((geoms: Array<any>) => {}, []);

  const onClickEdit = useCallback(() => {
    dispatch({
      type: "ToggleEditing",
    });
  }, [dispatch]);

  const onElementSelected = useCallback((target: any) => {
    //console.warn(target);
    if (target) setSelectedTarget(target);
    else setSelectedTarget(null);
  }, []);

  

  return (
    <div className="App">
      <header className="App-header">Schema App</header>
      <main className="App-main">
        <div className="App-canvas">
          <CanvasApp />

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
