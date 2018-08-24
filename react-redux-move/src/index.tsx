import * as React from "react";
import { render } from "react-dom";
import { Subject, timer } from "rxjs";
import { debounce } from "rxjs/operators";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

// we create the Subject
const counter = new Subject();

const onClick = () => {
  counter.next(1);
};

let top = 0;
let left = 0;

const obs = counter.pipe(debounce(() => timer(200)));

obs.subscribe(() => {
  top += 10;
  setTimeout(() => {
    render(<App top={top} left={left} />, document.getElementById("root"));
  }, 50);
});

interface Props {
  top?: number;
  left?: number;
}

const App = (props: Props) => {
  const transform = `translate(${props.left}px, ${props.top}px)`;
  const mDivStyle = {
    position: "absolute",
    top: "0px",
    left: "0px",
    width: "300px",
    height: "300px",
    backgroundColor: "red",
    transform: transform
  };

  return (
    <div style={styles}>
      <Hello name="CodeSandbox" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
      <button onClick={onClick}>Test</button>
      <div style={{ position: "relative" }}>
        <div style={mDivStyle} />
      </div>
    </div>
  );
};

render(<App top={top} left={left} />, document.getElementById("root"));
