import styled from "styled-components";

export const ContainerForm = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & > :last-child {
        margin: 20px auto;
    }
`;

export const FormUserInfoStyle = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;

    color: ${({ theme }) => theme.color.text};
`;

export const HeaderFormInfoUser = styled.h1`
    text-align: center;
    font-size: 2rem;
    color: ${({ theme }) => theme.color.text};
`;

export const FieldsetStyle = styled.fieldset`
    max-width: 300px;
    width: 100%;
    height: max-content;
    border-radius: 20px;
    & > input {
        margin: 0;
        height: max-content;
    }
`;

export const LegendStyle = styled.legend``;
