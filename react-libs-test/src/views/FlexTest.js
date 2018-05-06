import React from 'react';
import styled from 'styled-components';

import { FlexRowContainer, FlexGrow } from '../libs/flex/Flex';

const DivElem = styled.div`
    font-family: 'Helvetica';
    font-weight: bold;
    font-size: 1.8rem;
    background-color: lightblue;
    flex: 0 0 200px;
    height: 100px;
    border: 1px solid black;
    text-align: center;
`;

const DivGrowElem = DivElem.extend`
    flex-grow: 1;
`;

const Grow = (StyledComponent) => {
    return StyledComponent.extend`
        flex-grow: 1;
    `;
};

export const FlexTest = (props) => {
    const Gr = Grow(DivElem);
    const Grf = FlexGrow(DivElem);
    return (
        <FlexRowContainer>
            <DivElem>1</DivElem>
            <DivElem>2</DivElem>
            <DivElem>3</DivElem>
            <DivGrowElem>DivGrowElem</DivGrowElem>
            <Gr>Gr</Gr>
            <Grf>Grf</Grf>
        </FlexRowContainer>
    )
}