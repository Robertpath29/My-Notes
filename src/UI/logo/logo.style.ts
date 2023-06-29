import styled from "styled-components";

const LogoStyle = styled.h1`
    font-family: ${({ theme }) => theme.logo.font.main};
    margin: 10px;
    padding: 0;
    text-align: center;
    font-size: 2.5rem;
    color: ${({ theme }) => theme.color.main};
    text-shadow: 0 0 10px yellow, 5px 5px 4px black;
    transition: all 0.3s;
`;
export default LogoStyle;
