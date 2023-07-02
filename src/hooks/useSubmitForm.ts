import React, { useContext } from "react";
import { useState } from "react";
import validFormsReg from "../utils/formRegistValidation";
import validFormsLogin from "../utils/formLoginValidation";
import AxiosQuery, { LOGIN_URL, REG_URL } from "../api/AxiosQuery";
import { RouterContext } from "../context/context";

export function useSubmitForm() {
    const { setLoading, setRegister } = useContext(RouterContext);
    const [dataForm, setDataForm] = useState({
        userName: ``,
        email: ``,
        password: ``,
        repeatPassword: ``,
    });

    const [valid, setValid] = useState({
        userName: false,
        email: false,
        password: false,
        repeatPassword: false,
        samePasswords: false,
    });
    async function submitFormReg(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
        const validation = validFormsReg(dataForm, setValid);
        if (validation) {
            setLoading(true);
            const newUser = await AxiosQuery.axiosQueryPost(
                dataForm,
                setLoading,
                REG_URL
            );
            if (newUser.data.cancelRegister) {
                setRegister((obj) => ({
                    ...obj,
                    message: newUser.data.message,
                    cancelRegister: newUser.data.cancelRegister,
                }));
            }
            if (newUser.data.userIsRegistered) {
                setRegister((obj) => ({
                    ...obj,
                    message: newUser.data.message,
                    userIsRegistered: newUser.data.userIsRegistered,
                }));
            }
        }
    }
    async function submitFormLogin(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
        const validation = validFormsLogin(dataForm, setValid);
        if (validation) {
            setLoading(true);
            const loginUser = await AxiosQuery.axiosQueryPost(
                dataForm,
                setLoading,
                LOGIN_URL
            );
            if (loginUser.data.cancelRegister) {
                setRegister((obj) => ({
                    ...obj,
                    message: loginUser.data.message,
                    cancelRegister: loginUser.data.cancelRegister,
                }));
            }

            if (loginUser.data.userIsLogIn) {
                console.log(loginUser.data.user);
            }
        }
    }
    return {
        dataForm,
        setDataForm,
        valid,
        setValid,
        submitFormReg,
        submitFormLogin,
    };
}
