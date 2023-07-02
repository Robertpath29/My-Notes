import styled from "styled-components";

const LogoStyle = styled.h1<{ background?: boolean }>`
    z-index: 111;
    font-family: ${({ theme }) => theme.logo.font.main};
    margin: 10px;
    padding: 0;
    text-align: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.color.main};
    text-shadow: 0 0 10px yellow, 5px 5px 4px black;
    transition: all 0.3s;
    margin-bottom: ${({ background }) => (background ? `80px` : `10px`)};
    &:hover {
        text-shadow: 0 0 10px yellow, 0px 0px 4px black;
    }
`;
export default LogoStyle;
