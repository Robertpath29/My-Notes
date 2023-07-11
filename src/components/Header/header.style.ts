import styled from "styled-components";
import LogoStyle from "../basic/logo/logo.style";

export const HeaderStyle = styled.header`
    width: 100%;
    height: 10%;
    background-color: ${({ theme }) => theme.color.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const NameUserStyle = styled(LogoStyle)`
    color: yellow;
`;
export const ContainerGroupStyle = styled.div`
    display: flex;
`;
