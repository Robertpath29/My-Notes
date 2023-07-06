import React, { MouseEvent, useEffect, useState } from "react";
import LoginPagesStyle from "./loginPages.style";
import FormLogin from "../../components/FormLogin/FormLogin";
import NotesButton from "../../components/basic/button/NotesButton";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { cookieGetUser } from "../../utils/cookieGetUser";

const LoginPages = () => {
    const routerRegistration = useNavigate();
    const [background, setBackground] = useState(false);
    const { cancelRegister, validUserName, validPassword } = useAction();
    const { userLogIn, setUser } = useAction();
    const routeUser = useNavigate();

    function animationBackground(e: MouseEvent) {
        if ((e.target as Element).localName === `input`) {
            setBackground(true);
        } else {
            setBackground(false);
        }
    }
    function moveRegistration() {
        routerRegistration(`/registration`);
    }
    function clearWarning(e: MouseEvent) {
        if ((e.target as Element).innerHTML === `log in`) return;
        cancelRegister({ cancelRegister: false });
        validUserName({ userName: false });
        validPassword({ password: false });
    }
    useEffect(() => {
        cookieGetUser(userLogIn, routeUser, setUser);
    }, [userLogIn, routeUser, setUser]);
    return (
        <LoginPagesStyle
            onClick={(e) => {
                animationBackground(e);
                clearWarning(e);
            }}
            background={background}
        >
            <FormLogin background={background} />
            <NotesButton onClick={moveRegistration}>Registration</NotesButton>
        </LoginPagesStyle>
    );
};

export default LoginPages;
