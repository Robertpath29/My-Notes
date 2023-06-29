import React, { useState } from "react";
import LoginPagesStyle from "../style/loginPages/loginPages.style";
import FormLogin from "../components/loginPages/FormLogin";
import NotesButton from "../UI/button/NotesButton";

const LoginPages = () => {
    const [background, setBackground] = useState(false);
    function animationBackground(e: React.MouseEvent<Element, MouseEvent>) {
        if ((e.target as Element).localName === `input`) {
            setBackground(true);
            console.log((e.target as Element).localName);
        } else {
            setBackground(false);
        }
    }
    function registration() {}
    return (
        <LoginPagesStyle onClick={animationBackground} background={background}>
            <FormLogin background={background} />
            <NotesButton onClick={registration}>Реєстрація</NotesButton>
        </LoginPagesStyle>
    );
};

export default LoginPages;
