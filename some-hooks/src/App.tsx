import * as React from "react";
import { StatefulHello } from "./global/StateFullHello"
import { AnotherComponent } from "./global/AnotherComponent";

export class App extends React.Component<{}> {
  render() {
    return <div>
        <h1>{"Ciao hook"}</h1>
        <div>
          <StatefulHello />
          <AnotherComponent />
        </div>
      </div>;

  }
}
