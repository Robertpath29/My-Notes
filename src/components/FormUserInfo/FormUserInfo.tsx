import React, { FC, useState } from "react";
import {
    ContainerForm,
    FieldsetStyle,
    FormUserInfoStyle,
    HeaderFormInfoUser,
    LegendStyle,
} from "./formUserInfo.style";
import NotesInput from "../basic/input/NotesInput";
import NotesButton from "../basic/button/NotesButton";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { formInfoUserType } from "./formInfoUserType";

const FormUserInfo: FC<formInfoUserType> = ({ setSelectedImg, submit }) => {
    const { id, dataUser } = useSelector((state: reducersType) => state.user);

    const [data, setData] = useState({
        name: dataUser.name,
        surname: dataUser.surname,
        birthday: dataUser.birthday,
        country: dataUser.country,
        city: dataUser.city,
        address: dataUser.address,
        user_id: id,
        infoUser_id: dataUser.id,
        photo: dataUser.photo,
    });

    return (
        <ContainerForm>
            <HeaderFormInfoUser>Fill out the form below</HeaderFormInfoUser>
            <FormUserInfoStyle>
                <FieldsetStyle>
                    <LegendStyle>Name</LegendStyle>
                    <NotesInput
                        type="text"
                        placeholder="Max"
                        value={data.name}
                        onChange={(e) => {
                            setData({ ...data, name: e.target.value });
                        }}
                    />
                </FieldsetStyle>
                <FieldsetStyle>
                    <LegendStyle>Surname</LegendStyle>
                    <NotesInput
                        type="text"
                        placeholder="Smith"
                        value={data.surname}
                        onChange={(e) => {
                            setData({ ...data, surname: e.target.value });
                        }}
                    />
                </FieldsetStyle>
                <FieldsetStyle>
                    <LegendStyle>Birthday</LegendStyle>
                    <NotesInput
                        type="date"
                        placeholder="Max"
                        value={data.birthday}
                        onChange={(e) => {
                            setData({ ...data, birthday: e.target.value });
                        }}
                    />
                </FieldsetStyle>
                <FieldsetStyle>
                    <LegendStyle>Country</LegendStyle>
                    <NotesInput
                        type="text"
                        placeholder="USA"
                        value={data.country}
                        onChange={(e) => {
                            setData({ ...data, country: e.target.value });
                        }}
                    />
                </FieldsetStyle>
                <FieldsetStyle>
                    <LegendStyle>City</LegendStyle>
                    <NotesInput
                        type="text"
                        placeholder="New York"
                        value={data.city}
                        onChange={(e) => {
                            setData({ ...data, city: e.target.value });
                        }}
                    />
                </FieldsetStyle>
                <FieldsetStyle>
                    <LegendStyle>Address</LegendStyle>
                    <NotesInput
                        type="text"
                        placeholder="9844 Second Dr.
Brooklyn, NY 11211"
                        value={data.address}
                        onChange={(e) => {
                            setData({ ...data, address: e.target.value });
                        }}
                    />
                </FieldsetStyle>
                <FieldsetStyle>
                    <LegendStyle>Photo</LegendStyle>
                    <NotesInput
                        type="file"
                        onChange={(e) => {
                            setSelectedImg(e.target.files[0]);
                        }}
                    />
                </FieldsetStyle>
            </FormUserInfoStyle>
            <NotesButton
                onClick={() => {
                    submit(data);
                }}
            >
                Submit form
            </NotesButton>
        </ContainerForm>
    );
};

export default FormUserInfo;
