import React, { useContext, useState } from "react";
import LoginPagesStyle from "./loginPages.style";
import FormLogin from "../../components/FormLogin/FormLogin";
import NotesButton from "../../components/basic/button/NotesButton";
import { useNavigate } from "react-router-dom";
import { RouterContext } from "../../context/context";

const LoginPages = () => {
    const routerRegistration = useNavigate();
    const [background, setBackground] = useState(false);
    const { setRegister } = useContext(RouterContext);
    function animationBackground(e: React.MouseEvent<Element, MouseEvent>) {
        if ((e.target as Element).localName === `input`) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    }
    function moveRegistration() {
        routerRegistration(`/registration`);
    }
    function clearWarning() {
        setRegister((obj) => ({ ...obj, cancelRegister: false }));
    }

    return (
        <LoginPagesStyle
            onClick={(e) => {
                animationBackground(e);
                clearWarning();
            }}
            background={background}
        >
            <FormLogin background={background} />
            <NotesButton onClick={moveRegistration}>Registration</NotesButton>
        </LoginPagesStyle>
    );
};

export default LoginPages;
