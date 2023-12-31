import styled from "styled-components";

const NotesButtonStyle = styled.button`
    z-index: 11;
    text-align: center;
    margin: 10px;
    padding: 10px;
    max-width: 200px;
    min-width: 100px;
    height: 35px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.main};
    color: white;
    transition: all 0.3s;
`;

export default NotesButtonStyle;
