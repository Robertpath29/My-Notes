import styled from "styled-components";

export const NoteStyle = styled.div<{
    backgroundColor: string;
    opacity: string;
    display: string;
}>`
    position: relative;
    opacity: ${({ opacity }) => (opacity === "true" ? 0.4 : 1)};
    width: 50%;
    margin: 10px;
    padding: 5px;
    border: 1px solid black;
    border-radius: 20px 0 20px 0;
    background-color: ${({ backgroundColor }) => backgroundColor};
    display: ${({ display }) => display};
    justify-content: center;
    &::after {
        content: "";
        width: 100px;
        height: 100px;
        position: absolute;
        top: -60px;
        left: -50px;
        background-image: url("/images/note-button.png");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }
`;
export const TitleNoteStyle = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
    margin: 10px;
    text-decoration: underline;
`;

export const TextStyle = styled.p``;
export const IsDoneGroupStyle = styled.div<{ checkboxOpacity: number }>`
    position: absolute;
    display: flex;
    opacity: ${({ checkboxOpacity }) => checkboxOpacity};
    top: -0px;
    right: -75px;
    height: max-content;
    align-items: center;
    transition: opacity 0.5s;
`;
export const IsDoneGroupInputStyle = styled.div<{ display: string }>`
    display: ${({ display }) => (display === "true" ? "none" : "flex")};
    & > input[type="checkbox"] {
        background-color: none;
        box-shadow: none;
        margin-right: 15px;
    }
    & > p {
        margin: 0;
        font-size: 1.5rem;
    }
`;
export const IsDoneGroupBtnStyle = styled.div<{ display: string }>`
    position: absolute;
    right: 40px;
    top: 0px;
    & > button {
        background: none;
        display: ${({ display }) => (display === "false" ? "none" : "block")};
        color: black;
        padding: 0;
        margin: 0;
        min-width: none;
        height: none;
        border: none;
        font-size: 1.7rem;
    }
`;
