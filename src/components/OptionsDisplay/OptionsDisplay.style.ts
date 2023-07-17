import styled from "styled-components";

export const OptionsDisplayStyle = styled.div<{ visDisplay: string }>`
    z-index: 1;
    width: 85%;
    padding: 20px;
    display: ${({ visDisplay }) => visDisplay};
    box-shadow: 10px 10px 10px -10px black, inset 10px 10px 10px -10px white;
    overflow: auto;
    border-radius: 10px;
`;
