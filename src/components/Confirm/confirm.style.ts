import styled from "styled-components";

export const ConfirmStyle = styled.article`
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
