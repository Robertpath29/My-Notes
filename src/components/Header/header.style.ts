import styled from "styled-components";
import LogoStyle from "../basic/logo/logo.style";

export const HeaderStyle = styled.header`
    width: 100%;
    background-color: ${({ theme }) => theme.color.main};
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        justify-content: center;
        flex-wrap: wrap;
    }
`;

export const NameUserStyle = styled(LogoStyle)`
    color: yellow;
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        font-size: 1.4rem;
    }
`;
export const ContainerLogoStyle = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 5px;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        justify-content: center;
    }
`;
export const ContainerLoginImgStyle = styled(ContainerLogoStyle)``;

export const ContainerBtnStyle = styled.div`
    display: flex;
    align-items: center;
`;

export const ImgUser = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    object-fit: cover;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        margin: 5px;
    }
`;
