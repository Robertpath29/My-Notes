import React, { FC, MouseEvent } from "react";
import NotesInput from "../basic/input/NotesInput";
import { FormLoginStyle } from "./formLogin.style";
import LogoStyle from "../basic/logo/logo.style";
import NotesButton from "../basic/button/NotesButton";
import formLoginType from "./formLoginType";
import WarningMessage from "../basic/warning_message/WarningMessage";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import Loading from "../basic/loading/Loading";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";

const FormLogin: FC<formLoginType> = ({ background }) => {
    const { dataForm, setDataForm, setValid, submitFormLogin, valid } =
        useSubmitForm();

    const isLoading = useSelector(
        (store: reducersType) => store.loading.isLoading
    );
    const registerLogIn = useSelector(
        (store: reducersType) => store.registerLogIn
    );

    function resetFormLogin(e: MouseEvent) {
        if ((e.target as Element).localName === `button`) return;
        setValid((valid) => ({
            ...valid,
            password: false,
            userName: false,
        }));
    }
    return (
        <FormLoginStyle background={background} onClick={resetFormLogin}>
            <LogoStyle>My-Notes</LogoStyle>
            <NotesInput
                type="text"
                placeholder="Login (from 3 to 16 characters)"
                autocomplete="username"
                value={dataForm.userName}
                valid={valid.userName}
                onChange={(e) => {
                    setDataForm({ ...dataForm, userName: e.target.value });
                    setValid((valid) => ({ ...valid, userName: false }));
                }}
            />
            <WarningMessage none={valid.userName}>
                Incorrectly entered login
            </WarningMessage>
            <NotesInput
                type="password"
                placeholder="password (test1234)"
                autocomplete="new-password"
                value={dataForm.password}
                valid={valid.password}
                onChange={(e) => {
                    setDataForm({ ...dataForm, password: e.target.value });
                    setValid((valid) => ({ ...valid, password: false }));
                }}
            />
            <WarningMessage none={valid.password}>
                Incorrectly entered password
            </WarningMessage>
            <WarningMessage none={registerLogIn.cancelRegister}>
                {registerLogIn.message}
            </WarningMessage>
            {isLoading ? (
                <Loading />
            ) : (
                <NotesButton onClick={submitFormLogin}>log in</NotesButton>
            )}
        </FormLoginStyle>
    );
};

export default FormLogin;
