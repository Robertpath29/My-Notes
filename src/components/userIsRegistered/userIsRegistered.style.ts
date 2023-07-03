import styled from "styled-components";

export const UserIsRegisteredStyle = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url("./images/backgroundLoginPages.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 10px 0 10px;

    &::before {
        content: "";
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: gray;
        opacity: 0.5;
    }
`;

export const HeaderUserIsRegisteredStyle = styled.h1`
    font-size: 2rem;
    z-index: 11;
    font-family: ${({ theme }) => theme.font.text};
    color: ${({ theme }) => theme.color.main};
`;
