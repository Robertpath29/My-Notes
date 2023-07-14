import React, { useCallback, useEffect } from "react";
import { ContainerLoading, MyInfoStyle } from "./myInfo.style";
import axiosQuery, { GET_INFO_USER_URL } from "../../api/AxiosQuery";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Loading from "../basic/loading/Loading";
import { useAction } from "../../hooks/useAction";

const MyInfo = () => {
    const { id } = useSelector((state: reducersType) => state.user);
    const { isLoading } = useSelector((state: reducersType) => state.loading);
    const { stateLoading } = useAction();

    const getInfoUser = useCallback(async () => {
        const infoUser = await axiosQuery.axiosQueryGet(
            { id: id },
            GET_INFO_USER_URL
        );
        if (infoUser) {
            stateLoading(false);
            console.log(infoUser.data);
        }
    }, [id, stateLoading]);

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
            ) : (
                <></>
            )}
        </MyInfoStyle>
    );
};

export default MyInfo;
