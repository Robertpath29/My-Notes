import React from "react";
import {
    HeaderFormRegistration,
    RegistrationPagesStyle,
} from "./formRegistration.style";
import NotesInput from "../../components/basic/input/NotesInput";
import NotesButton from "../../components/basic/button/NotesButton";
import { useNavigate } from "react-router-dom";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import Loading from "../../components/basic/loading/Loading";
import UserIsRegistered from "../../components/userIsRegistered/UserIsRegistered";
import WarningMessage from "../../components/basic/warning_message/WarningMessage";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { useAction } from "../../hooks/useAction";

const FormRegistration = () => {
    const routerBack = useNavigate();
    const { dataForm, setDataForm, setValid, submitFormReg, valid } =
        useSubmitForm();

    const isLoading = useSelector(
        (store: reducersType) => store.loading.isLoading
    );
    const registerLogIn = useSelector(
        (store: reducersType) => store.registerLogIn
    );
    const { cancelRegister, userRegistration } = useAction();

    function resetFormRegistration(e: React.MouseEvent<Element, MouseEvent>) {
        if ((e.target as Element).localName === `button`) return;
        setValid((valid) => ({
            ...valid,
            email: false,
            password: false,
            userName: false,
            repeatPassword: false,
        }));
        cancelRegister({ cancelRegister: false });
    }

    return (
        <>
            {registerLogIn.userIsRegistered ? (
                <UserIsRegistered
                    onClick={() => {
                        routerBack(`/login`);
                        userRegistration({ userRegistration: false });
                    }}
                >
                    {registerLogIn.message}
                </UserIsRegistered>
            ) : (
                <RegistrationPagesStyle onClick={resetFormRegistration}>
                    <HeaderFormRegistration>
                        Fill out the form below
                    </HeaderFormRegistration>
                    <NotesInput
                        type="text"
                        placeholder="Login (from 3 to 16 characters)"
                        autocomplete="username"
                        value={dataForm.userName}
                        valid={valid.userName}
                        registration
                        onChange={(e) => {
                            setDataForm({
                                ...dataForm,
                                userName: e.target.value,
                            });
                            setValid((valid) => ({
                                ...valid,
                                userName: false,
                            }));
                        }}
                    />
                    <WarningMessage none={valid.userName}>
                        Incorrectly entered login
                    </WarningMessage>
                    <NotesInput
                        type="email"
                        placeholder="Email (notes@gmail.com)"
                        autocomplete="username"
                        value={dataForm.email}
                        valid={valid.email}
                        registration
                        onChange={(e) => {
                            setDataForm({ ...dataForm, email: e.target.value });
                            setValid((valid) => ({ ...valid, email: false }));
                        }}
                    />
                    <WarningMessage none={valid.email}>
                        Incorrectly entered email
                    </WarningMessage>
                    <NotesInput
                        type="password"
                        placeholder="Password (test1234)"
                        autocomplete="new-password"
                        value={dataForm.password}
                        valid={valid.password}
                        registration
                        onChange={(e) => {
                            setDataForm({
                                ...dataForm,
                                password: e.target.value,
                            });
                            setValid((valid) => ({
                                ...valid,
                                password: false,
                            }));
                        }}
                    />
                    <WarningMessage none={valid.password}>
                        Incorrectly entered password
                    </WarningMessage>
                    <NotesInput
                        type="password"
                        placeholder="Repeat password (test1234)"
                        autocomplete="new-password"
                        value={dataForm.repeatPassword}
                        valid={valid.repeatPassword}
                        registration
                        onChange={(e) => {
                            setDataForm({
                                ...dataForm,
                                repeatPassword: e.target.value,
                            });
                            setValid((valid) => ({
                                ...valid,
                                repeatPassword: false,
                            }));
                        }}
                    />
                    <WarningMessage none={valid.repeatPassword}>
                        Incorrectly entered password
                    </WarningMessage>
                    <WarningMessage none={valid.samePasswords}>
                        passwords do not match
                    </WarningMessage>
                    <WarningMessage none={registerLogIn.cancelRegister}>
                        {registerLogIn.message}
                    </WarningMessage>
                    {isLoading ? (
                        <Loading />
                    ) : (
                        <NotesButton onClick={submitFormReg}>
                            Sign up
                        </NotesButton>
                    )}
                    <NotesButton
                        onClick={() => {
                            routerBack(`/login`);
                        }}
                    >
                        Back
                    </NotesButton>
                </RegistrationPagesStyle>
            )}
        </>
    );
};

export default FormRegistration;
