import React from "react";

import "./App.css";
import Canvas from "./canvas/Canvas";
import { Rect } from "./canvas/Rect";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Fabric.js on React - fabric.Canvas('...')
      </header>
      <main className="App-main">
        <Canvas >
          <Rect top={0} left={0} width={50} height={50} fill={"red"} />
          </Canvas>
      </main>
    </div>
  );
}

export default App;
