import styled from "styled-components";

export const Grid = styled.div`

`;

const size = {
    xs: "320px",
    sm: "768px",
    lg: "1200px",
   }

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Col = styled.div`
    flex: ${(props) => props.size};

    ${(props => props.destroy )}
`;