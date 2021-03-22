import "./App.css";
import CanvasApp from "./schema/view/canvas/CanvasApp";
import {Toolbar} from "./toolbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">Schema App</header>
      <main className="App-main">
        <CanvasApp />
        <Toolbar />
      </main>
    </div>
  );
}

export default App;
