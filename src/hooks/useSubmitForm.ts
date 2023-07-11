import React from "react";
import { useState } from "react";
import validFormsReg from "../utils/formRegistValidation";
import validFormsLogin from "../utils/formLoginValidation";
import axiosQuery, { LOGIN_URL, REG_URL } from "../api/AxiosQuery";
import { useAction } from "./useAction";
import { useNavigate } from "react-router-dom";

export function useSubmitForm() {
    const routerUser = useNavigate();
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
        userLogIn,
        setUser,
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
        try {
            if (validation) {
                stateLoading(true);
                const newUser = await axiosQuery.axiosQueryPost(
                    dataForm,
                    REG_URL,
                    stateLoading
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
        } catch (error) {
            console.log(error);
        }
    }
    async function submitFormLogin(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
        const validation = validFormsLogin(
            dataForm,
            validUserName,
            validPassword
        );
        try {
            if (validation) {
                stateLoading(true);
                const loginUser = await axiosQuery.axiosQueryPost(
                    dataForm,
                    LOGIN_URL,
                    stateLoading
                );

                if (loginUser.data.cancelRegister) {
                    cancelRegister({
                        cancelRegister: loginUser.data.cancelRegister,
                    });
                    registerMessage({ message: loginUser.data.message });
                }

                if (loginUser.data.userIsLogIn) {
                    userLogIn({ userIsLogIn: true });
                    const user = loginUser.data.user;
                    setUser({
                        id: user.id,
                        login: user.login,
                        email: user.email,
                        dataUser: [],
                    });
                    const saveUser = window.confirm(`save login and password?`);
                    if (saveUser) {
                        const user = {
                            userName: dataForm.userName,
                            password: dataForm.password,
                        };
                        const userJSON = JSON.stringify(user);
                        const expirationDate = new Date();
                        expirationDate.setDate(expirationDate.getDate() + 1);
                        document.cookie = `saveUser=${userJSON}; expires=${expirationDate.toUTCString()}`;
                    }

                    routerUser(`/my-notes`);
                }
            }
        } catch (error) {
            console.log(error);
        }
    }
    return {
        dataForm,
        setDataForm,
        submitFormReg,
        submitFormLogin,
    };
}
