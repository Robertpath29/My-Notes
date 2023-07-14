import React from "react";
import {
    AddressStyle,
    BirthdayStyle,
    CityStyle,
    CountryStyle,
    InformationUserStyle,
    NameStyle,
    PhotoStyle,
    SurnameStyle,
} from "./informationUser.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { URL_SERVER } from "../../api/AxiosQuery";

const InformationUser = () => {
    const { dataUser } = useSelector((state: reducersType) => state.user);

    return (
        <InformationUserStyle>
            <PhotoStyle
                src={
                    dataUser.photo === ""
                        ? "/images/userIcon.svg"
                        : `${URL_SERVER}/${dataUser.photo}`
                }
                alt="User Photo"
            />
            <NameStyle>Name: {dataUser.name}</NameStyle>
            <SurnameStyle>Surname: {dataUser.surname}</SurnameStyle>
            <BirthdayStyle>Birthday: {dataUser.birthday}</BirthdayStyle>
            <CountryStyle>Country: {dataUser.country}</CountryStyle>
            <CityStyle>City: {dataUser.city}</CityStyle>
            <AddressStyle>Address: {dataUser.address}</AddressStyle>
        </InformationUserStyle>
    );
};

export default InformationUser;
