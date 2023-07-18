import { useState } from "react";
import axiosQuery, { GET_INFO_USER_URL } from "../api/AxiosQuery";
import { useAction } from "./useAction";
import { useSelector } from "react-redux";
import { reducersType } from "../redux/combineReducers/combineReducers";
import { dataObj } from "../components/FormUserInfo/formInfoUserType";

export const useSubmitFormInfoUser = (
    isFormInfoUser: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const [selectedImg, setSelectedImg] = useState(null);
    const { setDataUser } = useAction();

    async function submitFormInfoUser(data: dataObj) {
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
    }
    async function editFormInfoUser(data: dataObj) {
        const formData = new FormData();
        let response = null;

        if (selectedImg) {
            formData.append("img", selectedImg);
            formData.append("data", JSON.stringify(data));
            response = await axiosQuery.axiosQueryPut(
                formData,
                GET_INFO_USER_URL
            );
        } else {
            formData.append("data", JSON.stringify(data));
            response = await axiosQuery.axiosQueryPut(
                formData,
                GET_INFO_USER_URL
            );
        }

        if (response) {
            setDataUser({ dataUser: response.data });
            isFormInfoUser(false);
        }
    }

    return {
        setSelectedImg,
        submitFormInfoUser,
        editFormInfoUser,
    };
};
