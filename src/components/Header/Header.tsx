import React, { FC, useEffect, useState } from "react";
import {
    ContainerLoginImgStyle,
    ContainerLogoStyle,
    HeaderStyle,
    ImgUser,
    NameUserStyle,
} from "./header.style";
import Logo from "../basic/logo/Logo";
import { headerType } from "./headerType";
import { useAction } from "../../hooks/useAction";
import Confirm from "../Confirm/Confirm";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { URL_SERVER } from "../../api/AxiosQuery";
import { UseGetInfoUser } from "../../hooks/useGetInfoUser";
import Chat from "../Chat/Chat";
import Navigation from "../Navigation/Navigation";

const Header: FC<headerType> = ({
    userName,
    nameBtnOptions,
    fnBtnOptions,
    fnBtnNewNote,
    nameBtnNewNote,
}) => {
    const { visibility } = useSelector((state: reducersType) => state.confirm);
    const userData = useSelector((store: reducersType) => store.user);
    const { arrayNameFriendsUnreadMessage } = useSelector(
        (store: reducersType) => store.webSocket
    );
    const { visibilityConfirm, userLogIn, isOnline } = useAction();
    const { getImgUser } = UseGetInfoUser();
    const [numberUnreadMes, setNumberUnreadMes] = useState(0);

    useEffect(() => {
        getImgUser();
    }, [getImgUser]);
    useEffect(() => {
        setNumberUnreadMes(arrayNameFriendsUnreadMessage.length);
    }, [arrayNameFriendsUnreadMessage]);

    function exitAccount() {
        isOnline({ online: false });
        document.cookie = "saveUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        visibilityConfirm({ visibility: false });
        userLogIn({ userIsLogIn: false });
    }

    function noExitAccount() {
        visibilityConfirm({ visibility: false });
    }

    return (
        <HeaderStyle>
            <ContainerLogoStyle>
                <Logo color="yellow">My-Notes</Logo>
                <ContainerLoginImgStyle>
                    <NameUserStyle>{userName}</NameUserStyle>
                    <ImgUser
                        src={
                            userData.dataUser.photo === ""
                                ? "/images/userIcon.svg"
                                : `${URL_SERVER}/${userData.dataUser.photo}`
                        }
                    />
                </ContainerLoginImgStyle>
            </ContainerLogoStyle>
            <Navigation
                fnBtnNewNote={fnBtnNewNote}
                fnBtnOptions={fnBtnOptions}
                nameBtnNewNote={nameBtnNewNote}
                nameBtnOptions={nameBtnOptions}
                numberUnreadMes={numberUnreadMes}
            />
            {visibility && (
                <Confirm
                    message={`Exit account ${userData.login}?`}
                    onConfirm={exitAccount}
                    onCancel={noExitAccount}
                />
            )}
            <Chat />
        </HeaderStyle>
    );
};

export default Header;
