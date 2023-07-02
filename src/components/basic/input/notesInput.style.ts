import styled from "styled-components";
const NotesInputStyle = styled.input<{
    valid?: boolean;
    registration?: boolean;
}>`
    z-index: 11;
    outline: none;
    margin: ${({ registration }) => (registration ? `10px` : `4px`)};
    max-width: ${({ registration }) => (registration ? `400px` : `300px`)};
    width: 100%;
    height: 30px;
    background-color: rgba(255, 255, 255, 70%);
    border-radius: 10px;
    padding: 10px;
    box-shadow: 5px 5px 10px black;
    border: ${({ valid }) => (valid ? `3px solid red` : `1px solid black`)};
    transition: all 0.3s;
`;

export default NotesInputStyle;
