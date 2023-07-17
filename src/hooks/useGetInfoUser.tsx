import { useCallback, useState } from "react";
import axiosQuery, { GET_INFO_USER_URL } from "../api/AxiosQuery";
import { useSelector } from "react-redux";
import { reducersType } from "../redux/combineReducers/combineReducers";
import { useAction } from "./useAction";

export const UseGetInfoUser = () => {
    const { id } = useSelector((state: reducersType) => state.user);
    const { stateLoading, setDataUser, setImgUser } = useAction();
    const [confirmDataInfo, isConfirmDataInfo] = useState(false);
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
                console.log(confirmDataInfo);
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
    }, [id, stateLoading, setDataUser, confirmDataInfo]);

    const getImgUser = useCallback(async () => {
        try {
            const infoUser = await axiosQuery.axiosQueryGet(
                { id: id },
                GET_INFO_USER_URL
            );

            if (infoUser) {
                if (infoUser.data.length !== 0) {
                    setImgUser({ photo: infoUser.data[0].photo });
                } else {
                    setImgUser({
                        photo: "",
                    });
                }
            }
        } catch (error) {
            console.log(error);
        }
    }, [id, setImgUser]);

    return { getInfoUser, confirmDataInfo, isConfirmDataInfo, getImgUser };
};
