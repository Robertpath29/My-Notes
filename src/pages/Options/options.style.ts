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
    margin-top: 30px;
`;

export const VerticalStrip = styled.hr`
    margin: 0 10px;
    height: 100%;
    border-color: black;
`;
