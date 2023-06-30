import React, { FC } from "react";
import NotesInput from "../../UI/input/NotesInput";
import FormLoginStyle from "../../style/loginPages/formLogin/formLoginStyle";
import LogoStyle from "../../UI/logo/logo.style";
import NotesButton from "../../UI/button/NotesButton";
import formLoginType from "../../types/components/formLoginType";
import WarningMessage from "../../UI/warning_message/WarningMessage";
import { useSubmitForm } from "../../hooks/useSubmitForm";

const FormLogin: FC<formLoginType> = ({ background }) => {
    const { dataForm, setDataForm, setValid, submitFormLogin, valid } =
        useSubmitForm();

    return (
        <FormLoginStyle
            background={background}
            onClick={(e) => {
                if ((e.target as Element).localName === `button`) return;
                setValid((valid) => ({
                    ...valid,
                    password: false,
                    userName: false,
                }));
            }}
        >
            <LogoStyle>My-Notes</LogoStyle>
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
            <WarningMessage none={valid.userName}>
                Не коректно ведений логін
            </WarningMessage>
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
            <WarningMessage none={valid.password}>
                Не коректно ведений пароль
            </WarningMessage>
            <NotesButton onClick={submitFormLogin}>Вхід</NotesButton>
        </FormLoginStyle>
    );
};

export default FormLogin;
