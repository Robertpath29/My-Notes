import React, { FC } from "react";
import NotesInput from "../../UI/input/NotesInput";
import FormLoginStyle from "../../style/loginPages/formLogin/formLoginStyle";
import LogoStyle from "../../UI/logo/logo.style";
import NotesButton from "../../UI/button/NotesButton";
import formLoginType from "../../types/components/formLoginType";

const FormLogin: FC<formLoginType> = ({ background }) => {
    function login(e: React.MouseEvent<Element, MouseEvent>) {
        e.preventDefault();
    }

    return (
        <FormLoginStyle background={background}>
            <LogoStyle>My-Notes</LogoStyle>
            <NotesInput type="text" placeholder="Логін" />
            <NotesInput type="text" placeholder="Пароль" />
            <NotesButton onClick={login}>Вхід</NotesButton>
        </FormLoginStyle>
    );
};

export default FormLogin;
