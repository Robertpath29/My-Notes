import styled from "styled-components";

export const NavOptionsStyle = styled.nav`
    width: 150px;
    height: 90%;
    display: flex;
    flex-direction: column;
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        flex-direction: row;
    }
    & button {
        @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
            max-width: 100px;
            margin: 5px;
            font-size: 0.7rem;
            height: max-content;
        }
    }
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        width: 100%;
        justify-content: center;
    }
`;
