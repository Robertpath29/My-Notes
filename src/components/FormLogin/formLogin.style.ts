import styled from "styled-components";

export const FormLoginStyle = styled.form<{ background?: boolean }>`
    z-index: 11;
    display: flex;
    flex-direction: column;
    max-width: 450px;
    width: 100%;
    height: max-content;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    transform: scale(${({ background }) => (background ? `1.1` : `1`)});

    &:hover {
        transform: scale(1.1);
    }
`;
