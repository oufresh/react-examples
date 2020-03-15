import React from "react";
import * as styles from "./app.css";
import { HookCompoent } from "./HookComponent";

const areaStyle: React.CSSProperties = {
  position: "absolute",
  right: "0px",
  width: "100%",
  textAlign: "center"
};

const App: React.FC<{}> = () => {
  return (
    <div className={styles.AppStyle}>
      <h1 style={areaStyle}>HI!</h1>
      <HookCompoent />
    </div>
  );
};

export default App;
