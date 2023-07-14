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
import axiosQuery, { GET_INFO_USER_URL } from "../../api/AxiosQuery";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { formInfoUserType } from "./formInfoUserType";
import { useAction } from "../../hooks/useAction";

const FormUserInfo: FC<formInfoUserType> = ({ isFormInfoUser }) => {
    const { id } = useSelector((state: reducersType) => state.user);
    const [data, setData] = useState({
        name: "...",
        surname: "...",
        birthday: "...",
        country: "...",
        city: "...",
        address: "...",
        user_id: id,
    });
    const [selectedImg, setSelectedImg] = useState(null);
    const { setDataUser } = useAction();

    async function submitFormInfoUser() {
        const formData = new FormData();
        let response = null;
        if (selectedImg) {
            formData.append("img", selectedImg);
            formData.append("data", JSON.stringify(data));
            response = await axiosQuery.axiosQueryPost(
                formData,
                GET_INFO_USER_URL
            );
        } else {
            formData.append("data", JSON.stringify(data));
            response = await axiosQuery.axiosQueryPost(
                formData,
                GET_INFO_USER_URL
            );
        }
        if (response) {
            setDataUser({ dataUser: response.data });
            isFormInfoUser(false);
        }
        console.log(response);
    }
    return (
        <ContainerForm>
            <HeaderFormInfoUser>Fill out the form below</HeaderFormInfoUser>
            <FormUserInfoStyle>
                <FieldsetStyle>
                    <LegendStyle>Name</LegendStyle>
                    <NotesInput
                        type="text"
                        placeholder="Max"
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
            <NotesButton onClick={submitFormInfoUser}>Submit form</NotesButton>
        </ContainerForm>
    );
};

export default FormUserInfo;
