import React, { useState } from "react";
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

const InformationUser = () => {
    const { dataUser } = useSelector((state: reducersType) => state.user);
    console.log(dataUser);

    return (
        <InformationUserStyle>
            <PhotoStyle src={dataUser.photo} alt="User Photo" />
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
