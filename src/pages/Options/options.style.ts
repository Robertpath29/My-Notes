import styled from "styled-components";

export const OptionsStyle = styled.section`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.color.main};
`;

export const ContainerStyle = styled.div`
    display: flex;
    width: 100%;
    height: 80%;
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        flex-direction: column;
        height: max-content;
        align-items: center;
    }
`;

export const VerticalStrip = styled.hr`
    margin: 0 10px;
    height: 100%;
    border-color: black;
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        display: none;
    }
`;

export const HorizontalStrip = styled.hr`
    display: none;
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        display: block;
        width: 100%;
    }
`;
