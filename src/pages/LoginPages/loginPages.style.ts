import styled from "styled-components";

export const LoginPagesStyle = styled.section<{ background?: boolean }>`
    width: 100%;
    height: 100vh;
    background-image: url("./images/backgroundLoginPages.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &::before {
        content: "";
        z-index: 1;
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: gray;
        opacity: ${({ background }) => (background ? `0.5` : `0`)};
        transition: opacity 0.3s;
    }
`;

export const BtnRegistrationStyle = styled.div`
    position: absolute;
    display: flex;
    z-index: 111111;
    top: 10px;
    right: 10px;
    max-width: 200px;
    width: 100%;
`;
