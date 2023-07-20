import React, { useState } from "react";
import {
    AddressStyle,
    BirthdayStyle,
    CityStyle,
    ContainerEditBtnStyle,
    CountryStyle,
    InformationUserStyle,
    NameStyle,
    PhotoStyle,
    SurnameStyle,
} from "./informationUser.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { URL_SERVER } from "../../api/AxiosQuery";
import NotesButton from "../basic/button/NotesButton";
import FormUserInfo from "../FormUserInfo/FormUserInfo";
import { useSubmitFormInfoUser } from "../../hooks/useSubmitFormInfoUser";

const InformationUser = () => {
    const { dataUser } = useSelector((state: reducersType) => state.user);

    const [formInfoUser, isFormInfoUser] = useState(false);
    const { setSelectedImg, editFormInfoUser } =
        useSubmitFormInfoUser(isFormInfoUser);
    return (
        <InformationUserStyle>
            {formInfoUser ? (
                <FormUserInfo
                    setSelectedImg={setSelectedImg}
                    submit={editFormInfoUser}
                />
            ) : (
                <>
                    <PhotoStyle
                        src={
                            dataUser.photo === ""
                                ? "/images/userIcon.svg"
                                : `${URL_SERVER}/${dataUser.photo}`
                        }
                    />
                    <NameStyle>Name: {dataUser.name}</NameStyle>
                    <SurnameStyle>Surname: {dataUser.surname}</SurnameStyle>
                    <BirthdayStyle>Birthday: {dataUser.birthday}</BirthdayStyle>
                    <CountryStyle>Country: {dataUser.country}</CountryStyle>
                    <CityStyle>City: {dataUser.city}</CityStyle>
                    <AddressStyle>Address: {dataUser.address}</AddressStyle>
                    <ContainerEditBtnStyle>
                        <NotesButton
                            onClick={() => {
                                isFormInfoUser(true);
                            }}
                        >
                            Edit
                        </NotesButton>
                    </ContainerEditBtnStyle>
                </>
            )}
        </InformationUserStyle>
    );
};

export default InformationUser;
