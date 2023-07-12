import styled from "styled-components";

export const ConfirmStyle = styled.article`
    z-index: 1111;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-color: gray;
        opacity: 0.6;
    }
`;

export const ContainerConfirm = styled.div`
    z-index: 111111111;
    display: flex;
    flex-direction: column;
    align-items: center;

    animation: visibilityConfirm 0.5s 1;

    @keyframes visibilityConfirm {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
`;
export const MessageStyle = styled.h1`
    margin: 5px;
    text-align: center;
    color: ${({ theme }) => theme.color.main};
    font-size: 2rem;
`;

export const ContainerLoading = styled.div``;
