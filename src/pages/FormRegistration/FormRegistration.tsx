import React, { useContext, useState } from "react";
import {
    HeaderFormRegistration,
    RegistrationPagesStyle,
} from "./formRegistration.style";
import NotesInput from "../../components/basic/input/NotesInput";
import NotesButton from "../../components/basic/button/NotesButton";
import { useNavigate } from "react-router-dom";
import WarningMessageStyle from "../../components/basic/warning_message/warningMessage.style";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { RouterContext } from "../../context/context";
import Loading from "../../components/basic/loading/Loading";
import UserIsRegistered from "../../components/userIsRegistered/UserIsRegistered";

const FormRegistration = () => {
    const routerBack = useNavigate();
    const { isLoading, isRegister, setRegister } = useContext(RouterContext);
    const { dataForm, setDataForm, setValid, submitFormReg, valid } =
        useSubmitForm();

    function resetFormRegistration(e: React.MouseEvent<Element, MouseEvent>) {
        if ((e.target as Element).localName === `button`) return;
        setValid((valid) => ({
            ...valid,
            email: false,
            password: false,
            userName: false,
            repeatPassword: false,
        }));
        setRegister((obj) => ({ ...obj, cancelRegister: false }));
    }

    return (
        <>
            {isRegister.userIsRegistered ? (
                <UserIsRegistered
                    onClick={() => {
                        routerBack(`/login`);
                        setRegister((obj) => ({
                            ...obj,
                            userIsRegistered: false,
                        }));
                    }}
                >
                    {isRegister.message}
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
                    <WarningMessageStyle none={valid.userName}>
                        Incorrectly entered login
                    </WarningMessageStyle>
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
                    <WarningMessageStyle none={valid.email}>
                        Incorrectly entered email
                    </WarningMessageStyle>
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
                    <WarningMessageStyle none={valid.password}>
                        Incorrectly entered password
                    </WarningMessageStyle>
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
                    <WarningMessageStyle none={valid.repeatPassword}>
                        Incorrectly entered password
                    </WarningMessageStyle>
                    <WarningMessageStyle none={valid.samePasswords}>
                        passwords do not match
                    </WarningMessageStyle>
                    <WarningMessageStyle none={isRegister.cancelRegister}>
                        {isRegister.message}
                    </WarningMessageStyle>
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
