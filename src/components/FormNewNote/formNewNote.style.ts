import styled from "styled-components";

export const FormNewNoteStyle = styled.form``;
export const TextareaStyle = styled.textarea`
    z-index: 11;
    outline: none;
    width: 100%;
    background-color: rgba(255, 255, 255, 70%);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 10px black;
`;

export const GroupFormStyle = styled.div`
    margin: 10px;
    gap: 10px;
    display: flex;
    & > input[type="color"] {
        padding: 0;
        width: 60px;
        height: 60px;
    }
`;

export const NamesFormInput = styled.h2`
    color: ${({ theme }) => theme.color.text};
`;

export const GroupBtnFormStyle = styled.div`
    display: flex;
    justify-content: center;
`;

export const GroupWarningMessageStyle = styled.div``;
