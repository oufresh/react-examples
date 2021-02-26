import React, { useCallback, useState } from "react";
import "./App.css";
import { Counter } from "./Counter";
import { expensiveAsync } from "./expensive";

function App() {
  const [count, setCount] = useState<number|null>(null);
  const onWorker = useCallback(async () => {
    console.log("Start worker: " + Date.now());
    const count = await expensiveAsync();
    console.log("End: " + Date.now());
    console.log("count: " + count);
    setCount(count);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>React with web worker</p>
      </header>
      <main className="App-main">
        <p>Waiting for worker</p>
        <button className="App-button" onClick={onWorker}>
          GO
        </button>
        <Counter count={count} />
      </main>
    </div>
  );
}

export default App;
