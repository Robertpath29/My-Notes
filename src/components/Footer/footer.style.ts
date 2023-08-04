import styled from "styled-components";

export const FooterStyle = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const FooterCopyright = styled.h1`
    font-size: 1rem;
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        margin: 5px 5px;
        text-align: center;
    }
`;
