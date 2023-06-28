import styled from "styled-components";

const FormLoginStyle = styled.form`
    display: flex;
    flex-direction: column;
    &:hover > h1 {
        text-shadow: 0 0 10px yellow, 0px 0px 4px black;
    }
`;

export default FormLoginStyle;
