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
        @media (max-width: ${({ theme }) => theme.size.tablet}) {
            width: 50px;
            height: 50px;
            top: -25px;
            left: -25px;
        }
    }
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        width: 90%;
    }
`;

export const TitleNoteStyle = styled.h1`
    font-weight: bold;
    font-size: 2.5rem;
    margin: 10px;
    text-decoration: underline;
    @media (max-width: ${({ theme }) => theme.size.tablet}) {
        font-size: 1rem;
    }
`;

export const TextStyle = styled.p`
    width: 50%;
    overflow-wrap: break-word;
`;
export const TextIsDoneStyle = styled.span``;

export const IsDoneGroupStyle = styled.div<{ checkboxOpacity: number }>`
    position: absolute;
    display: flex;
    opacity: ${({ checkboxOpacity }) => checkboxOpacity};
    top: -0px;
    right: -75px;
    height: max-content;
    align-items: center;
    transition: opacity 0.5s;
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        top: -5px;
        right: -5px;
    }
`;
export const IsDoneGroupInputStyle = styled.div<{ display: string }>`
    display: ${({ display }) => (display === "true" ? "none" : "flex")};
    & > input[type="checkbox"] {
        background-color: none;
        box-shadow: none;
        margin-right: 15px;
    }
    & > span {
        margin: 0;
        font-size: 1.5rem;
    }
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        width: 35px;
        height: 35px;
        flex-direction: column-reverse;
        & > span {
            font-size: 0.8rem;
        }
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
        @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
            font-size: 1.2rem;
        }
    }
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        top: 0px;
        right: -30px;
    }
`;
