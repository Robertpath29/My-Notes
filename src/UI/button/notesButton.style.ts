import styled from "styled-components";

const NotesButtonStyle = styled.button`
    z-index: 1111;
    margin: 10px;
    width: 30%;
    height: 30px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.color.main};
    color: white;
`;

export default NotesButtonStyle;
