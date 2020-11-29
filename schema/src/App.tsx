import React, { useState, useEffect } from "react";
import { fabric } from "fabric";
import "./App.css";

const initCanvas = () =>
  new fabric.Canvas("canvas", {
    height: 800,
    width: 800,
    backgroundColor: "pink",
  });
function App() {
  const [canvas, setCanvas] = useState<fabric.Canvas | null>(null);
  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Fabric.js on React - fabric.Canvas('...')
      </header>
      <main className="App-main">
        <canvas className="App-canvas" id="canvas" />
      </main>
    </div>
  );
}

export default App;
