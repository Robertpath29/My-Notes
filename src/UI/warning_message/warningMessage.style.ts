import styled from "styled-components";

const WarningMessageStyle = styled.h2<{ none: boolean }>`
    z-index: 111;
    font-family: ${({ theme }) => theme.font.text};
    color: red;
    margin: 0;
    font-size: 1.3rem;
    display: ${({ none }) => (none ? `block` : `none`)};
`;

export default WarningMessageStyle;
