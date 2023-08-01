import styled from "styled-components";
import LogoStyle from "../basic/logo/logo.style";

export const HeaderStyle = styled.header`
    width: 100%;
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
    align-items: center;
`;

export const ImgUser = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
`;

export const ChatContainerBtn = styled.div<{ display: string }>`
    z-index: 11;
    display: ${({ display }) => display};
    position: relative;
    & > span {
        z-index: 111;
        position: absolute;
        top: 5px;
        left: 5px;
        width: 20px;
        height: 20px;
        font-size: 1rem;
    }
`;
