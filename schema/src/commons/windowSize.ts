import { useState, useEffect } from "react";
import debounce from "../commons/debounce";

function useWindowSize(ref: React.MutableRefObject<null>) {
  // Initialize state with undefined width/height so server and client renders match

  const [windowSize, setWindowSize] = useState<{
    width: number | undefined;
    height: number | undefined;
    windowWidth: number | undefined;
    windowHeight: number | undefined;
  }>({
    width: undefined,
    height: undefined,
    windowWidth: undefined,
    windowHeight: undefined,
  });

  const calcResize = () => {
    const htmlEl = ref?.current as HTMLElement | null;
    setWindowSize({
      width: htmlEl !== null ? htmlEl.clientWidth : undefined,
      height: htmlEl !== null ? htmlEl.clientHeight : undefined,
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    });
  };

  const handleResize = debounce(calcResize, 100);

  useEffect(() => {
    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    calcResize();
    console.log("Calculated size on mount:", windowSize);

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export default useWindowSize;
/**
   * 
   * // Usage
function App() {
  const size = useWindowSize();

  return (
    <div>
      {size.width}px / {size.height}px
    </div>
  );
}
   * 
   */
