import React, { useCallback, useEffect, useState } from "react";
import { ContainerLoading, MyInfoStyle } from "./myInfo.style";
import axiosQuery, { GET_INFO_USER_URL } from "../../api/AxiosQuery";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Loading from "../basic/loading/Loading";
import { useAction } from "../../hooks/useAction";
import InformationUser from "../InformationUser/InformationUser";
import Confirm from "../Confirm/Confirm";
import FormUserInfo from "../FormUserInfo/FormUserInfo";

const MyInfo = () => {
    const { id } = useSelector((state: reducersType) => state.user);
    const { isLoading } = useSelector((state: reducersType) => state.loading);
    const { stateLoading, setDataUser } = useAction();
    const [confirmDataInfo, isConfirmDataInfo] = useState(false);
    const [formInfoUser, isFormInfoUser] = useState(false);

    const getInfoUser = useCallback(async () => {
        const infoUser = await axiosQuery.axiosQueryGet(
            { id: id },
            GET_INFO_USER_URL
        );
        if (infoUser) {
            if (infoUser.data.length !== 0) {
                setDataUser({ dataUser: infoUser.data[0] });
                isConfirmDataInfo(false);
            } else {
                isConfirmDataInfo(true);
                setDataUser({
                    dataUser: {
                        photo: "",
                        name: "...",
                        surname: "...",
                        birthday: "...",
                        country: "...",
                        city: "...",
                        address: "...",
                    },
                });
            }
            stateLoading(false);
        }
    }, [id, stateLoading, setDataUser]);

    useEffect(() => {
        getInfoUser();
        stateLoading(true);
    }, [getInfoUser, stateLoading]);

    return (
        <MyInfoStyle>
            {isLoading ? (
                <ContainerLoading>
                    <Loading />
                </ContainerLoading>
            ) : confirmDataInfo ? (
                <Confirm
                    message="You have not filled in the data, fill it in?"
                    onConfirm={() => {
                        isFormInfoUser(true);
                        isConfirmDataInfo(false);
                    }}
                    onCancel={() => {
                        isConfirmDataInfo(false);
                    }}
                />
            ) : formInfoUser ? (
                <FormUserInfo isFormInfoUser={isFormInfoUser} />
            ) : (
                <InformationUser />
            )}
        </MyInfoStyle>
    );
};

export default MyInfo;
