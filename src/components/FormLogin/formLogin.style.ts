import styled from "styled-components";

export const FormLoginStyle = styled.form<{ background?: boolean }>`
    z-index: 11;
    display: flex;
    flex-direction: column;
    max-width: ${({ background }) => (background ? `600px` : `400px`)};
    width: 100%;
    height: 40%;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    &:hover > :nth-child(n) {
        max-width: 500px;
    }
`;
