import * as React from "react";
import headerStyles from "./Header.module.css";

function reducer(
  state: {
    opened: boolean;
    running: boolean;
  },
  action: { type: "open" | "running"; payload: boolean }
) {
  switch (action.type) {
    case "open":
      return { running: true, opened: action.payload };
    case "running":
      return { running: action.payload, opened: state.opened };
    default:
      return state;
  }
}

export const Header: React.FC<{}> = () => {
  const headerRef: React.MutableRefObject<HTMLElement | null> = React.useRef(
    null
  );
  const [state, dispatch] = React.useReducer(reducer, {
    opened: false,
    running: false
  });

  const onOpen = React.useCallback(() => {
    dispatch({ type: "open", payload: !state.opened });
  }, [state.opened]);

  React.useEffect(() => {
    const ref = headerRef.current;
    if (ref !== null) {
      ref.addEventListener("transitionend", e => {
        if (e.propertyName === "max-height") {
          console.log("end transition", e);
          dispatch({ type: "running", payload: false });
        }
      });
    }
  }, []);

  React.useLayoutEffect(() => {
    if (headerRef.current)
      headerRef.current.style.maxHeight =
        state.opened === true ? "141px" : "71px";
  }, [state.opened]);

  return (
    <header className={headerStyles.Header} ref={headerRef}>
      <div className={headerStyles.Toolbox}>
        <div className={headerStyles.ToolboxRow}>
          <div className={headerStyles.ToolBoxRowElem}>A1</div>
          <div className={headerStyles.ToolBoxRowElem}>A2</div>
          <div className={headerStyles.ToolBoxRowElem}>A3</div>
        </div>
        {state.opened === true ||
        (state.opened === false && state.running === true) ? (
          <div className={headerStyles.ToolboxRow}>
            <div className={headerStyles.ToolBoxRowElem}>B1</div>
            <div className={headerStyles.ToolBoxRowElem}>B2</div>
            <div className={headerStyles.ToolBoxRowElem}>B3</div>
          </div>
        ) : null}
      </div>
      <div className={headerStyles.ControlBox}>
        <button className={headerStyles.tooltip} onClick={onOpen}>
          Hover over me
          <span className={headerStyles.tooltiptext}>Tooltip text</span>
        </button>
      </div>
    </header>
  );
};

// NO MORE CLASSES !!! :D :D :D 

/*
export class HHeader extends React.Component<
  {},
  { opened: boolean; running: boolean }
> {
  headerRef: React.RefObject<HTMLElement>;
  constructor(props: {}) {
    super(props);
    this.state = { opened: false, running: false };
    this.headerRef = React.createRef();
  }

  componentDidMount() {
    console.log("mount");
    if (this.headerRef.current) {
      this.headerRef.current.addEventListener("transitionend", e => {
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
      this.headerRef.current.style.maxHeight =
        this.state.opened === true ? "141px" : "71px";
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
          {this.state.opened === true ||
          (this.state.opened === false && this.state.running === true) ? (
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
*/
