import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { actions as actionsLoading } from "../redux/Loading/loadingSlice";
import { actions as actionsRegisterLogIn } from "../redux/RegisterLogIn/registerLogInSlice";

const rootAction = {
    ...actionsLoading,
    ...actionsRegisterLogIn,
};

export const useAction = () => {
    const dispatch = useDispatch();

    return useMemo(() => bindActionCreators(rootAction, dispatch), [dispatch]);
};
