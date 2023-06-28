import styled from "styled-components";

const LoadingStyle = styled.div<{ load?: number }>`
    padding: 20px;
    max-width: 550px;
    width: 100%;
    text-align: center;
    & > div {
        width: 100%;
        position: relative;
        & > img {
            width: 100%;
        }
        &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0px;
            width: ${({ load }) => load + `%`};
            height: 100%;
            background-color: white;
        }
    }

    & > h1 {
        position: relative;
        margin: 0;
        margin-top: 15px;
        padding: 0;
        font-size: 3rem;
    }
`;
export default LoadingStyle;
