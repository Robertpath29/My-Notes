import styled from "styled-components";

export const NavigationStyle = styled.nav`
    display: none;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    & button {
        @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
            min-width: max-content;
        }
    }
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
