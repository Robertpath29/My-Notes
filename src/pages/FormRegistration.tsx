import React from "react";
import RegistrationPagesStyle from "../style/registrationPages/registrationPages.style";
import NotesInput from "../UI/input/NotesInput";
import NotesButton from "../UI/button/NotesButton";
import { useNavigate } from "react-router-dom";

const FormRegistration = () => {
    const routerBack = useNavigate();
    return (
        <RegistrationPagesStyle>
            <h1>Заповніть форму нижче</h1>
            <NotesInput type="text" placeholder="Логін" />
            <NotesInput type="email" placeholder="Імейл" />
            <NotesInput type="password" placeholder="Пароль" />
            <NotesInput type="password" placeholder="Повторити пароль" />
            <NotesButton onClick={() => {}}>Зареєструватися</NotesButton>
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
