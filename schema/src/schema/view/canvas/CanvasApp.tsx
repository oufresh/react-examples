import React, { useRef,useCallback, useState } from "react";
import useWindowSize from "../../../commons/windowSize";
import { ElementDetails } from "../../../details";
import Canvas from "./Canvas";

export const CanvasApp = () => {
  const cRef = useRef(null);
  const size = useWindowSize(cRef);
  const [selectedTarget, setSelectedTarget] = useState<any>(null);

  const onElementSelected = useCallback((targetNme: string | undefined, targetData: any | undefined) => {
    console.warn(targetNme);
    if (targetData) setSelectedTarget({data: targetData, name: targetNme});
    else setSelectedTarget(null);
  }, []);

  return (
    <div className={"Fabric-canvas"} ref={cRef}>
      {/*<canvas id="c" width={size.width} height={size.height}></canvas>*/}
      {size.width !== undefined && size.height !== undefined ? (
        <Canvas
          width={size.width !== undefined ? size.width : 200}
          height={size.height !== undefined ? size.height : 200}
          editing={false}
          onObjectSelected={onElementSelected}
        />
      ) : null}
      {selectedTarget != null ? (
            <ElementDetails
              name={selectedTarget.name}
              info={selectedTarget.data}
            />
          ) : null}
    </div>
  );
};

export default React.memo(CanvasApp);
