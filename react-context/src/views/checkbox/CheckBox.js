//@flow
import React from "react";
import styled from "styled-components";

const themes = new Map([["light", {
    backgroundChecked: "#2196F3",
    bckaground: "#eee"
}], ["dark", {}]]);

const Container = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;

  & input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
`;

const CheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: ${props => (props.checked ? "#2196F3" : "#eee")};

  :after {
    content: "";
    position: absolute;
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    display: ${props => (props.checked ? "block" : "none")};
  }

  :hover {
    background-color: ${props => (props.checked ? "#2196F3" : "#ccc")};
  }
`;

export const CheckBox = ({
  checked,
  onChange,
  text,
  theme
}: {
  checked: boolean,
  onChange: () => any,
  text?: string,
  theme?: string
}) => {
  return (
    <Container theme={theme}>
      {text}
      <input type="checkbox" checked={checked} onChange={onChange} />
      <CheckMark checked={checked} theme={theme} />
    </Container>
  );
};
