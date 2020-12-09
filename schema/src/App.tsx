import React, { useCallback, useState } from "react";
import "./App.css";
import Canvas from "./canvas/Canvas";
import { ElementDetails } from "./details/Elememtdetails";

function App() {
  const [editing, setEditing]= useState(false);
  const [geometries, setGeometries] = useState<Array<any>>([{top: 100, left: 100, width: 100, height: 100, stroke: "green", strokeWidth: 2}]);
  const [selectedTarget, setSelectedTarget] = useState<any>(null);

  const onEdit = useCallback((geoms: Array<any>)=>{

  }, []);

  const onClickEdit = useCallback(() => {
    setEditing(!editing);
  },[editing]);

  const onElementSelected = useCallback((target: any) =>{
    console.warn(target);
    if(target)
      setSelectedTarget(target);
    else
      setSelectedTarget(null);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Fabric.js on React - fabric.Canvas('...')
      </header>
      <main className="App-main">
        <div className="App-canvas">
        <Canvas editing={editing} geometries={geometries} onEdit={onEdit} onElementSelected={onElementSelected}/>

        {selectedTarget !=null ? <ElementDetails name= {selectedTarget.name} info={selectedTarget.data }/>: null}
        </div>
        <div className="App-bar">
          <label className="App-label">Schema tools</label>
          <button className={"App-bar-button"+ (editing? " App-bar-button-on":"")} onClick={onClickEdit}>Edit</button>
        </div>
        
      </main>
    </div>
  );
}

export default App;
