import {useState, useEffect, useCallback} from "react";
import debounce from "../commons/debounce";
// Hook
function useWindowSize(d: HTMLDivElement) {
    // Initialize state with undefined width/height so server and client renders match
    
    const [windowSize, setWindowSize] = useState<{width: number|undefined, height: number |undefined}>({
      width: undefined,
      height: undefined,
    });
  
    const handleResize = useCallback(debounce(()=>{
      setWindowSize({
        width: d.clientWidth,//window.innerWidth,
        height: d.clientHeight,//window.innerHeight,
      });
    }, 100), [])
    useEffect(() => {
      
      // Add event listener
      window.addEventListener("resize", handleResize);
      
      // Call handler right away so state gets updated with initial window size
      setWindowSize({
        width: d.clientWidth,//window.innerWidth,
        height: d.clientHeight,//window.innerHeight,
      });
      console.log(windowSize);
      
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
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