import React from "react";

export const HookCompoent: React.FC<{}> = () => {
  const counter = React.useRef<number>(0);
  React.useEffect(() => {
    let tim: any = null;
    if (!counter.current) {
      tim = setInterval(() => {
        counter.current += 1;
        console.log(counter.current);
      }, 5000);
    }
    return () => {
      if (tim) clearInterval(tim);
    };
  });
  return <div>{counter.current}</div>;
};
