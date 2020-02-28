import * as React from "react";
import headerStyles from "./Header.module.css";

export class Header extends React.Component<{}, { opened: boolean, running: boolean }> {
  headerRef: React.RefObject<HTMLElement>;
  constructor(props: {}) {
    super(props);
    this.state = { opened: false, running: false };
    this.headerRef = React.createRef();
  }

  componentDidMount() {
      console.log("mount");
      if (this.headerRef.current) {
        this.headerRef.current.addEventListener("transitionend", (e) => {
            if (e.propertyName === "max-height") {
                console.log("end transition", e);
                this.setState({ opened: this.state.opened, running: false });
            }
        });
      }
  }

  componentDidUpdate() {
    console.log("update: ", this.state.opened);
    console.log(this.headerRef?.current);
    if (this.headerRef.current)
        this.headerRef.current.style.maxHeight = this.state.opened === true ? "141px" : "71px";
  }

  render() {
    return (
      <header className={headerStyles.Header} ref={this.headerRef}>
        <div className={headerStyles.Toolbox}>
          <div className={headerStyles.ToolboxRow}>
            <div className={headerStyles.ToolBoxRowElem}>A1</div>
            <div className={headerStyles.ToolBoxRowElem}>A2</div>
            <div className={headerStyles.ToolBoxRowElem}>A3</div>
          </div>
          {(this.state.opened === true || (this.state.opened === false && this.state.running === true)) ? (
            <div className={headerStyles.ToolboxRow}>
              <div className={headerStyles.ToolBoxRowElem}>B1</div>
              <div className={headerStyles.ToolBoxRowElem}>B2</div>
              <div className={headerStyles.ToolBoxRowElem}>B3</div>
            </div>
          ) : null}
        </div>
        <div className={headerStyles.ControlBox}>
          <button
            className={headerStyles.tooltip}
            onClick={() => {
              this.setState({ opened: !this.state.opened, running: true });
            }}
          >
            Hover over me
            <span className={headerStyles.tooltiptext}>Tooltip text</span>
          </button>
        </div>
      </header>
    );
  }
}
