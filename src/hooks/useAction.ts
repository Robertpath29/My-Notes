import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as actionsLoading } from "../redux/LoadingSlice/loadingSlice";
import { actions as actionsRegisterLogIn } from "../redux/RegisterLogInSlice/registerLogInSlice";
import { actions as actionsValidationForm } from "../redux/errorMessageFormSlice/errorMessageFormSlice";
import { actions as actionsUserSlice } from "../redux/UserSlice/userSlice";
import { actions as actionsConfirm } from "../redux/ConfirmSlice/confirmSlice";
import { actions as actionsChat } from "../redux/ChatSlice/chatSlice";
import { actions as actionsWebSocket } from "../redux/webSocketSlice/webSocketSlice";

const rootAction = {
    ...actionsLoading,
    ...actionsRegisterLogIn,
    ...actionsValidationForm,
    ...actionsUserSlice,
    ...actionsConfirm,
    ...actionsChat,
    ...actionsWebSocket,
};

export const useAction = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
