import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { SchemaStateType } from "../..";
import useWindowSize from "../../../commons/windowSize";
import { ElementDetails } from "../../../details";
import Canvas from "./Canvas";

export const CanvasApp = () => {
  const cRef = useRef(null);
  const size = useWindowSize(cRef);
  const selectedTarget = useSelector((s: SchemaStateType) => s.selected);

  return (
    <div className={"Fabric-canvas"} ref={cRef}>
      {size.width !== undefined && size.height !== undefined ? (
        <Canvas
          width={size.width !== undefined ? size.width : 200}
          height={size.height !== undefined ? size.height : 200}
        />
      ) : null}
      {selectedTarget.length >= 1 ? (
            <ElementDetails
              name={selectedTarget[0].name}
              info={selectedTarget[0].data}
            />
          ) : null}
    </div>
  );
};

export default React.memo(CanvasApp);
