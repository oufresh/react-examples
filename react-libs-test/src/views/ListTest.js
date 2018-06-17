import React, { Fragment } from "react";
import { render } from "react-dom";
import styled from "styled-components";
import VList from "./VList";

const ListCont = styled.div`
  width: 500px;
  height: 500px;
  background-color: lightgrey;
`;

const ListTest = () => (
    <ListCont>
      <VList />
    </ListCont>
);

export default ListTest;