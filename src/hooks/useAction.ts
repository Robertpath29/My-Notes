import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as actionsLoading } from "../redux/LoadingSlice/loadingSlice";
import { actions as actionsRegisterLogIn } from "../redux/RegisterLogInSlice/registerLogInSlice";
import { actions as actionsValidationForm } from "../redux/errorMessageFormSlice/errorMessageFormSlice";

const rootAction = {
    ...actionsLoading,
    ...actionsRegisterLogIn,
    ...actionsValidationForm,
};

export const useAction = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
