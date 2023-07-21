import React, { useEffect, useState } from "react";
import { ContainerLoading, MyInfoStyle } from "./myInfo.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Loading from "../basic/loading/Loading";
import { useAction } from "../../hooks/useAction";
import InformationUser from "../InformationUser/InformationUser";
import Confirm from "../Confirm/Confirm";
import FormUserInfo from "../FormUserInfo/FormUserInfo";
import { UseGetInfoUser } from "../../hooks/useGetInfoUser";
import { useSubmitFormInfoUser } from "../../hooks/useSubmitFormInfoUser";
import { useRouter } from "../../hooks/useRouter";

const MyInfo = () => {
    const { isLoading } = useSelector((state: reducersType) => state.loading);
    const { moveTo } = useRouter();
    const [formInfoUser, isFormInfoUser] = useState(false);
    const { stateLoading } = useAction();
    const { confirmDataInfo, isConfirmDataInfo, getInfoUser } =
        UseGetInfoUser();
    const { submitFormInfoUser, setSelectedImg } =
        useSubmitFormInfoUser(isFormInfoUser);
    useEffect(() => {
        getInfoUser();
        stateLoading(true);
    }, []);
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
                        moveTo(`/my-notes`);
                    }}
                />
            ) : formInfoUser ? (
                <FormUserInfo
                    setSelectedImg={setSelectedImg}
                    submit={submitFormInfoUser}
                />
            ) : (
                <InformationUser />
            )}
        </MyInfoStyle>
    );
};

export default MyInfo;
