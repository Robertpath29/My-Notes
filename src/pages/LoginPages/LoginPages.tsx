import React, { MouseEvent, useState } from "react";
import { LoginPagesStyle, BtnRegistrationStyle } from "./loginPages.style";
import FormLogin from "../../components/FormLogin/FormLogin";
import NotesButton from "../../components/basic/button/NotesButton";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks/useAction";
import { useSubmitForm } from "../../hooks/useSubmitForm";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Confirm from "../../components/Confirm/Confirm";

const LoginPages = () => {
    const routerRegistration = useNavigate();
    const [background, setBackground] = useState(false);
    const { cancelRegister, validUserName, validPassword } = useAction();
    const {
        dataForm,
        setDataForm,
        submitFormLogin,
        confirmSaveUser,
        cancelSaveUser,
    } = useSubmitForm();
    const { visibility } = useSelector((state: reducersType) => state.confirm);

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

    return (
        <LoginPagesStyle
            onClick={(e) => {
                animationBackground(e);
                clearWarning(e);
            }}
            background={background}
        >
            {!visibility ? (
                <>
                    <FormLogin
                        background={background}
                        dataForm={dataForm}
                        setDataForm={setDataForm}
                        submitFormLogin={submitFormLogin}
                    />
                    <BtnRegistrationStyle>
                        <NotesButton onClick={moveRegistration}>
                            Registration
                        </NotesButton>
                    </BtnRegistrationStyle>
                </>
            ) : (
                <Confirm
                    message="Save login and password?"
                    onConfirm={confirmSaveUser}
                    onCancel={cancelSaveUser}
                />
            )}
        </LoginPagesStyle>
    );
};

export default LoginPages;
