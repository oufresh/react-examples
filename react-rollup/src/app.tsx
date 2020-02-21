import React from "react";
import * as styles from "./app.css";

const areaStyle: React.CSSProperties = {
  position: "absolute",
  right: "0px",
  width: "200px"
};

const App: React.FC<{}> = () => {
  return (
    <div className={styles.AppStyle}>
      <h1 style={areaStyle}>HI!</h1>
    </div>
  );
};

export default App;
