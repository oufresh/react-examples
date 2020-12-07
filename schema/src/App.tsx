import React, { useState } from "react";
import "./App.css";
import Canvas from "./canvas/Canvas";

function App() {
  const [geometries, setGeometries] = useState<Array<any>>([{top: 100, left: 100, width: 100, height: 100, stroke: "green", strokeWidth: 2}]);
  return (
    <div className="App">
      <header className="App-header">
        Fabric.js on React - fabric.Canvas('...')
      </header>
      <main className="App-main">
        <div className="App-canvas">
        <Canvas geometries={geometries} />
        </div>
        <div className="App-bar">
          <label className="App-label">BAR</label>
        </div>
        
      </main>
    </div>
  );
}

export default App;
