import * as React from "react";
import appStyles from "./App.module.css";

export default function App() {
  const [opened, setOpened] = React.useState(false);
  return (
    <div className={appStyles.App}>
      <header className={appStyles.Header}>
        <div className={appStyles.Toolbox}>
          <div className={appStyles.ToolboxRow}>
            <div className={appStyles.ToolBoxRowElem}>A1</div>
            <div className={appStyles.ToolBoxRowElem}>A2</div>
            <div className={appStyles.ToolBoxRowElem}>A3</div>
          </div>
          <div className={appStyles.ToolboxRow}>
            {opened === true ? (
              <React.Fragment>
                <div className={appStyles.ToolBoxRowElem}>B1</div>
                <div className={appStyles.ToolBoxRowElem}>B2</div>
                <div className={appStyles.ToolBoxRowElem}>B3</div>
              </React.Fragment>
            ) : null}
          </div>
        </div>
        <div className={appStyles.ControlBox}>
          <button
            className={appStyles.tooltip}
            onClick={() => {
              setOpened(!opened);
            }}
          >
            Hover over me
            <span className={appStyles.tooltiptext}>Tooltip text</span>
          </button>
        </div>
      </header>
      <main className={appStyles.Main}></main>
    </div>
  );
}
