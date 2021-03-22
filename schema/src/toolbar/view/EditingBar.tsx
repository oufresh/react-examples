import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SchemaStateType } from "../../schema/module";
import styles from "./EditingBar.module.css";

export const EditingBar = () => {
  const dispatch = useDispatch();
  const editing = useSelector((s: SchemaStateType) => s.editing);

  const onClickEdit = useCallback(() => {
    dispatch({
      type: "ToggleEditing",
    });
  }, [dispatch]);
  return (
    <div className={styles.editingBar +" App-bar-content"}>
      <label className="App-label">Schema tools</label>
      <button
        className={"App-bar-button" + (editing ? " App-bar-button-on" : "")}
        onClick={onClickEdit}
      >
        Edit
      </button>
    </div>
  );
};
