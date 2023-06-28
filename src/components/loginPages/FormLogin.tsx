import React from "react";
import NotesInput from "../../UI/input/NotesInput";
import FormLoginStyle from "../../style/loginPages/formLogin/formLoginStyle";
import LogoStyle from "../../UI/logo/logo.style";

const FormLogin = () => {
    return (
        <FormLoginStyle>
            <LogoStyle>My-Notes</LogoStyle>
            <NotesInput type="text" placeholder="Логін" />
            <NotesInput type="text" placeholder="Пароль" />
        </FormLoginStyle>
    );
};

export default FormLogin;
