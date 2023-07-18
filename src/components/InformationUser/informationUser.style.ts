import styled from "styled-components";

export const InformationUserStyle = styled.div<{ images: string }>`
    z-index: 1;
    height: 100%;
    padding: 10px;
    position: relative;
    color: ${({ theme }) => theme.color.text};
    background-image: ${({ images }) => `url(${images})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    &::before {
        content: "";
        z-index: -1;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: ${({ theme }) => theme.color.main};
        opacity: 0.5;
    }
`;
export const PhotoStyle = styled.img`
    max-width: 200px;
    width: 100%;
`;
export const NameStyle = styled.h2``;
export const SurnameStyle = styled.h2``;
export const BirthdayStyle = styled.h2``;
export const CountryStyle = styled.h2``;
export const CityStyle = styled.h2``;
export const AddressStyle = styled.h2``;
export const ContainerEditBtnStyle = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;
