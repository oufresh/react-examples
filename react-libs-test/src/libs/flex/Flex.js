import styled from 'styled-components';

const FlexBaseContainer = styled.div`
    display: flex;
`;

export const FlexRowContainer = FlexBaseContainer.extend`
    flex-direction: row;
`;

export const FlexGrow = (StyledComponent) => {
    return StyledComponent.extend`
        flex-grow: 1;
    `;
}