import styled from "styled-components";

const NotesInputStyle = styled.input<{ valid?: boolean }>`
    z-index: 11;
    outline: none;
    margin: 4px;
    width: 70%;
    height: 30px;
    background-color: rgba(255, 255, 255, 70%);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 10px black;
    border: ${({ valid }) => (valid ? `3px solid red` : `1px solid black`)};
`;

export default NotesInputStyle;
