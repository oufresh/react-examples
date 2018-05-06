
// import * as React from 'react';
import styled from '../theme/styled-components';

const FlexContainer = styled.div`
    display: flex;
`;

export const FlexRowContainer = FlexContainer.extend`
    flex-direction: row;
`;