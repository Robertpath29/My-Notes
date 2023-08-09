import styled from "styled-components";

export const MyInfoStyle = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    & > article {
        width: 100%;
        height: 100%;
    }
    & > article {
        @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
            position: relative;
            top: 0;
            left: 0;
            transform: none;
        }
    }
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        height: max-content;
    }
`;
export const ContainerLoading = styled.div`
    width: max-content;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    & > img {
        transform: scale(2);
    }
`;
