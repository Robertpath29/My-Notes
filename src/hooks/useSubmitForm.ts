import React from "react";
import { useState } from "react";
import validFormsReg from "../utils/formRegistValidation";
import validFormsLogin from "../utils/formLoginValidation";
import AxiosQuery, { LOGIN_URL, REG_URL } from "../api/AxiosQuery";
import { useAction } from "./useAction";

export function useSubmitForm() {
    const [dataForm, setDataForm] = useState({
        userName: ``,
        email: ``,
        password: ``,
        repeatPassword: ``,
    });

    const {
        stateLoading,
        registerMessage,
        cancelRegister,
        userRegistration,
        validUserName,
        validPassword,
        validEmail,
        validRepeatPassword,
        validSamePasswords,
    } = useAction();

    async function submitFormReg(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
        const validation = validFormsReg(
            dataForm,
            validUserName,
            validPassword,
            validEmail,
            validRepeatPassword,
            validSamePasswords
        );
        if (validation) {
            stateLoading(true);
            const newUser = await AxiosQuery.axiosQueryPost(
                dataForm,
                stateLoading,
                REG_URL
            );
            if (newUser.data.cancelRegister) {
                cancelRegister({
                    cancelRegister: newUser.data.cancelRegister,
                });
                registerMessage({ message: newUser.data.message });
            }
            if (newUser.data.userIsRegistered) {
                userRegistration({
                    userIsRegistered: newUser.data.userIsRegistered,
                });
                registerMessage({ message: newUser.data.message });
            }
        }
    }
    async function submitFormLogin(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
        const validation = validFormsLogin(
            dataForm,
            validUserName,
            validPassword
        );
        if (validation) {
            stateLoading(true);
            const loginUser = await AxiosQuery.axiosQueryPost(
                dataForm,
                stateLoading,
                LOGIN_URL
            );
            if (loginUser.data.cancelRegister) {
                cancelRegister({
                    cancelRegister: loginUser.data.cancelRegister,
                });
                registerMessage({ message: loginUser.data.message });
            }

            if (loginUser.data.userIsLogIn) {
                console.log(loginUser.data.user);
            }
        }
    }
    return {
        dataForm,
        setDataForm,
        submitFormReg,
        submitFormLogin,
    };
}
