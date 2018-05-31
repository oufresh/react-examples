import React from "react";
import { List, AutoSizer } from "react-virtualized";
import styled from "styled-components";

const rows = ["ciao", "pippo"];
let N = 1000;
while (N--) {
  rows.push("name " + N);
}

const ListWrapper = styled.div`
  & .mylist {
    border: 1px solid black;
  }
`;

const ListElem = styled.div`
  border-top: ${props => (props.border === true ? "" : "1px solid black")};
`;

let lastIndNotVisible = 0;
let mayBorder = false;

const _rowRenderer = ({ index, isScrolling, isVisible, key, style }) => {
  let border = false;
  if (isVisible === false) {
    mayBorder = true;
  }
  if (isVisible === true && mayBorder === true) {
    mayBorder = false;
    border = true;
  }

  //console.log("Render row " + index + ", isVisible " + isVisible);
  //if (index !== 0) style.borderTop = "1px solid black";
  return (
    <ListElem key={key} style={style}>
      {rows[index]}
    </ListElem>
  );
};

const getRowHeight = ({ index }) => {
  return 50;
};

//const listItems = rows.map(row => <li>{row}</li>);

const VList = () => {
  //return <ul>{listItems}</ul>;
  lastIndNotVisible = 0;
  mayBorder = false;
  return (
    <AutoSizer>
      {({ width, height }) => (
        <ListWrapper>
          <List
            className={"mylist"}
            width={width}
            height={height}
            rowCount={rows.length}
            rowHeight={getRowHeight}
            rowRenderer={_rowRenderer}
          />
        </ListWrapper>
      )}
    </AutoSizer>
  );
};

export default VList;
