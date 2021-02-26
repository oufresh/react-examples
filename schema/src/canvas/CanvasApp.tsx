import React, { useRef } from "react";
import useWindowSize from "../commons/windowSize";

export const CanvasApp = ()=>{
    const cRef = useRef(null);
    const size = useWindowSize(cRef);

    return <div className={"Fabric-canvas"} ref={cRef}>

    </div>
}