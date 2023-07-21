import styled from "styled-components";

export const NoteDisplayStyle = styled.div`
    position: relative;
    width: 80%;
    height: 80%;
    margin: 0 auto;
    padding-top: 20px;
    overflow: auto;
    background-image: url("/images/background-mainPages.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    box-shadow: 0 0 60px 10px black;
    border-radius: 10px 40px 10px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SelectStyle = styled.select`
    position: absolute;
    left: 20px;
    width: max-content;
    height: 30px;
    background-color: ${({ theme }) => theme.color.main};
    color: white;
`;
