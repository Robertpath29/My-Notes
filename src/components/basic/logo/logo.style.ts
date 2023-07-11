import styled from "styled-components";

const LogoStyle = styled.h1<{ color?: string }>`
    width: max-content;
    z-index: 111;
    font-family: ${({ theme }) => theme.logo.font.main};
    padding: 0;
    margin: 10px;
    font-size: 2.5rem;
    color: ${({ theme, color }) => (color ? color : theme.color.main)};
    text-shadow: 0 0 10px yellow, 5px 5px 4px black;
    transition: all 0.3s;
`;
export default LogoStyle;
