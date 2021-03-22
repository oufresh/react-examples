import { useState } from "react";
import styles from "./Toolbar.module.css";
import { ShortcutBar, EditingBar } from "./view";
export const Toolbar = () => {
  
  return (
    <div className={styles.toolbar+" App-bar"}>
        <ShortcutBar />
        <EditingBar />
    </div>
  );
};

