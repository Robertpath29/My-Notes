import React from "react";
import { useState } from "react";
import validFormsReg from "../utils/formRegistValidation";
import validFormsLogin from "../utils/formLoginValidation";

export function useSubmitForm() {
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
    function submitFormReg(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
        const validation = validFormsReg(dataForm, setValid);
        if (validation) {
            const newUser = JSON.stringify(dataForm);
            console.log(newUser);
        }
    }
    function submitFormLogin(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
        const validation = validFormsLogin(dataForm, setValid);
        if (validation) {
            const loginUser = JSON.stringify({
                userName: dataForm.userName,
                password: dataForm.password,
            });

            console.log(loginUser);
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
