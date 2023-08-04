import styled from "styled-components";

export const InformationUserStyle = styled.div`
    z-index: 1;
    height: 100%;
    padding: 10px;
    position: relative;
    color: ${({ theme }) => theme.color.text};
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        margin-top: 30px;
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
    @media (max-width: ${({ theme }) => theme.size.mobileDevices}) {
        position: relative;
    }
`;
