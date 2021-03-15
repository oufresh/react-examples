import React, { useCallback, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { SchemaStateType } from "./schema/module";
import CanvasApp from "./schema/view/canvas/CanvasApp";

function App() {
  const dispatch = useDispatch();
  const editing = useSelector((s: SchemaStateType) => s.editing);

  useEffect(() => {}, []);

  //const onEdit = useCallback((geoms: Array<any>) => {}, []);

  const onClickEdit = useCallback(() => {
    dispatch({
      type: "ToggleEditing",
    });
  }, [dispatch]);

  

  return (
    <div className="App">
      <header className="App-header">Schema App</header>
      <main className="App-main">
        <div className="App-canvas">
          <CanvasApp />
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
