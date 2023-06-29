import React, { useState } from "react";
import LoginPagesStyle from "../style/loginPages/loginPages.style";
import FormLogin from "../components/loginPages/FormLogin";
import NotesButton from "../UI/button/NotesButton";
import { useNavigate } from "react-router-dom";

const LoginPages = () => {
    const routerRegistration = useNavigate();
    const [background, setBackground] = useState(false);
    function animationBackground(e: React.MouseEvent<Element, MouseEvent>) {
        if ((e.target as Element).localName === `input`) {
            setBackground(true);
            console.log((e.target as Element).localName);
        } else {
            setBackground(false);
        }
    }
    function moveRegistration() {
        routerRegistration(`/registration`);
    }
    return (
        <LoginPagesStyle onClick={animationBackground} background={background}>
            <FormLogin background={background} />
            <NotesButton onClick={moveRegistration}>Реєстрація</NotesButton>
        </LoginPagesStyle>
    );
};

export default LoginPages;
