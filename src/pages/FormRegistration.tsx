import React from "react";
import RegistrationPagesStyle from "../style/registrationPages/registrationPages.style";
import NotesInput from "../UI/input/NotesInput";
import NotesButton from "../UI/button/NotesButton";
import { useNavigate } from "react-router-dom";
import WarningMessageStyle from "../UI/warning_message/warningMessage.style";
import { useSubmitForm } from "../hooks/useSubmitForm";

const FormRegistration = () => {
    const routerBack = useNavigate();
    const { dataForm, setDataForm, setValid, submitFormReg, valid } =
        useSubmitForm();

    return (
        <RegistrationPagesStyle
            onClick={(e) => {
                if ((e.target as Element).localName === `button`) return;
                setValid((valid) => ({
                    ...valid,
                    email: false,
                    password: false,
                    userName: false,
                    repeatPassword: false,
                }));
            }}
        >
            <h1>Заповніть форму нижче</h1>
            <NotesInput
                type="text"
                placeholder="Логін (від 3 до 16 символів)"
                autocomplete="username"
                value={dataForm.userName}
                valid={valid.userName}
                onChange={(e) => {
                    setDataForm({ ...dataForm, userName: e.target.value });
                    setValid((valid) => ({ ...valid, userName: false }));
                }}
            />
            <WarningMessageStyle none={valid.userName}>
                Не коректно ведений логін
            </WarningMessageStyle>
            <NotesInput
                type="email"
                placeholder="Імейл (notes@gmail.com)"
                autocomplete="username"
                value={dataForm.email}
                valid={valid.email}
                onChange={(e) => {
                    setDataForm({ ...dataForm, email: e.target.value });
                    setValid((valid) => ({ ...valid, email: false }));
                }}
            />
            <WarningMessageStyle none={valid.email}>
                Не коректно ведений імейл
            </WarningMessageStyle>
            <NotesInput
                type="password"
                placeholder="Пароль (test1234)"
                autocomplete="new-password"
                value={dataForm.password}
                valid={valid.password}
                onChange={(e) => {
                    setDataForm({ ...dataForm, password: e.target.value });
                    setValid((valid) => ({ ...valid, password: false }));
                }}
            />
            <WarningMessageStyle none={valid.password}>
                Не коректно ведений пароль
            </WarningMessageStyle>
            <NotesInput
                type="password"
                placeholder="Повторити пароль (test1234)"
                autocomplete="new-password"
                value={dataForm.repeatPassword}
                valid={valid.repeatPassword}
                onChange={(e) => {
                    setDataForm({
                        ...dataForm,
                        repeatPassword: e.target.value,
                    });
                    setValid((valid) => ({ ...valid, repeatPassword: false }));
                }}
            />
            <WarningMessageStyle none={valid.repeatPassword}>
                Не коректно ведений пароль
            </WarningMessageStyle>
            <WarningMessageStyle none={valid.samePasswords}>
                паролі не збігаються
            </WarningMessageStyle>
            <NotesButton onClick={submitFormReg}>Зареєструватися</NotesButton>
            <NotesButton
                onClick={() => {
                    routerBack(`/login`);
                }}
            >
                Назад
            </NotesButton>
        </RegistrationPagesStyle>
    );
};

export default FormRegistration;
