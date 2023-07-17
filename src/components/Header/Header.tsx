import React, { FC, useEffect } from "react";
import {
    ContainerGroupStyle,
    HeaderStyle,
    ImgUser,
    NameUserStyle,
} from "./header.style";
import Logo from "../basic/logo/Logo";
import { headerType } from "./headerType";
import NotesButton from "../basic/button/NotesButton";
import { useAction } from "../../hooks/useAction";
import Confirm from "../Confirm/Confirm";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { URL_SERVER } from "../../api/AxiosQuery";
import { UseGetInfoUser } from "../../hooks/useGetInfoUser";

const Header: FC<headerType> = ({ userName, nameBtn, fnBtn }) => {
    const { visibility } = useSelector((state: reducersType) => state.confirm);
    const userData = useSelector((store: reducersType) => store.user);
    const { visibilityConfirm, userLogIn } = useAction();
    const router = useNavigate();
    const { getImgUser } = UseGetInfoUser();
    useEffect(() => {
        getImgUser();
    }, [getImgUser]);

    function exitAccount() {
        document.cookie = "saveUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router(`/login`);
        visibilityConfirm({ visibility: false });
        userLogIn({ userIsLogIn: false });
    }

    function noExitAccount() {
        visibilityConfirm({ visibility: false });
    }
    return (
        <HeaderStyle>
            <ContainerGroupStyle>
                <Logo color="yellow">My-Notes</Logo>
                <NameUserStyle>{userName}</NameUserStyle>
                <ImgUser
                    src={
                        userData.dataUser.photo === ""
                            ? "/images/userIcon.svg"
                            : `${URL_SERVER}/${userData.dataUser.photo}`
                    }
                />
            </ContainerGroupStyle>

            <ContainerGroupStyle>
                <NotesButton onClick={fnBtn}>{nameBtn}</NotesButton>
                <NotesButton
                    onClick={() => visibilityConfirm({ visibility: true })}
                >
                    Exit
                </NotesButton>
            </ContainerGroupStyle>
            {visibility && (
                <Confirm
                    message={`Exit account ${userData.login}?`}
                    onConfirm={exitAccount}
                    onCancel={noExitAccount}
                />
            )}
        </HeaderStyle>
    );
};

export default Header;
