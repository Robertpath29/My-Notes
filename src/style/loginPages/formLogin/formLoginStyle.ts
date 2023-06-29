import styled from "styled-components";

const FormLoginStyle = styled.form<{ background?: boolean }>`
    z-index: 11;
    display: flex;
    flex-direction: column;
    max-width: ${({ background }) => (background ? `600px` : `400px`)};
    width: 100%;
    height: 40%;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;

    &:hover > h1 {
        text-shadow: 0 0 10px yellow, 0px 0px 4px black;
    }

    &:hover {
        max-width: 600px;
    }
    & > h1 {
        margin-bottom: ${({ background }) => (background ? `80px` : `10px`)};
    }
`;

export default FormLoginStyle;
