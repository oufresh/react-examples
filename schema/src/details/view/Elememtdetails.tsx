import React, { Fragment, useCallback, useState } from "react";
import ReactJson from "react-json-view";

export const ElementDetails = ({ name, info }: { name: string; info: any }) => {
  const [opened, setOpened] = useState(true);
  const onToggle = useCallback(() => {
    setOpened(!opened);
  }, [opened]);
  return (
    <div className="element-details">
      <div className="element-details-head">
        <button onClick={onToggle}>
          {opened === true ? <span>&#9866;</span> : <span>&#9744;</span>}
        </button>
      </div>
      {opened === true ? (
        <Fragment>
            <div className="element-details-divide"/>
          <div className="element-details-row">
            <label>NAME:</label>
            <label>{name}</label>
          </div>
          <div className="element-details-row">
            <ReactJson src={info} />
          </div>
        </Fragment>
      ) : null}
    </div>
  );
};
