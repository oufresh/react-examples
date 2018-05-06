import * as React from 'react';
import styled from '../theme/styled-components';
import { FlexRowContainer } from './Flex';

// import { ThemedStyledComponentsModule } from 'styled-components';

// import ThemeInterface from '../theme/theme';

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

/*const DivGrowElem = DivElem.extend`
    flex-grow: 1;
`;*/

const Grow = (StyledComponent: any): {} => {
    return StyledComponent.extends`
        flex-grow: 1;
    `;
};

export const FlexTest = () => {
    console.log(typeof DivElem);
    const GrowDiv = Grow(DivElem);
    return(
        <FlexRowContainer>
            <DivElem>1</DivElem>
            <DivElem>2</DivElem>
            <DivElem>3</DivElem>
            <GrowDiv>Div grow</GrowDiv>
        </FlexRowContainer>
    );
};