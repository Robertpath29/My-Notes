import styled from "styled-components";

export const NoteDisplayStyle = styled.div`
    position: relative;
    width: 80%;
    height: 75vh;
    margin: 0 auto;
    padding-top: 45px;
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
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        padding-top: 70px;
    }
`;

export const SelectStyle = styled.select`
    position: absolute;
    top: 20px;
    left: 20px;
    width: max-content;
    height: 30px;
    background-color: ${({ theme }) => theme.color.main};
    color: white;
`;

export const CleanTableGroup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const CleanTableTitleGroup = styled.h1``;
export const CleanTableImgGroup = styled.img``;
