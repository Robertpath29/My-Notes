import React, { FC, useEffect, useState } from "react";
import {
    ChatContainerBtn,
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
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import axiosQuery, { ADD_FRIEND_URL, URL_SERVER } from "../../api/AxiosQuery";
import { UseGetInfoUser } from "../../hooks/useGetInfoUser";
import Chat from "../Chat/Chat";
import { friends } from "../Chat/chatType";

const Header: FC<headerType> = ({
    userName,
    nameBtnOptions,
    fnBtnOptions,
    fnBtnNewNote,
    nameBtnNewNote,
}) => {
    const { visibility } = useSelector((state: reducersType) => state.confirm);
    const userData = useSelector((store: reducersType) => store.user);
    const { displayBtnChat } = useSelector((store: reducersType) => store.chat);
    const {
        visibilityConfirm,
        userLogIn,
        setDisplayBtnChat,
        setDisplayChat,
        isOnline,
    } = useAction();
    const { getImgUser } = UseGetInfoUser();
    const [myFriends, setMyFriends] = useState<friends[]>([]);

    useEffect(() => {
        getImgUser();
    }, [getImgUser]);

    function exitAccount() {
        isOnline({ online: false });
        document.cookie = "saveUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        visibilityConfirm({ visibility: false });
        userLogIn({ userIsLogIn: false });
    }

    function noExitAccount() {
        visibilityConfirm({ visibility: false });
    }

    async function getFriends() {
        const friends = await axiosQuery.axiosQueryGet(
            {
                user_id: Number(userData.id),
            },
            ADD_FRIEND_URL
        );

        setMyFriends(friends.data);
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
                <ChatContainerBtn display={displayBtnChat}>
                    <NotesButton
                        id="openChat"
                        onClick={() => {
                            setDisplayChat({ displayChat: "visibility" });
                            setDisplayBtnChat({ displayBtnChat: "none" });
                            getFriends();
                        }}
                    >
                        Chat
                    </NotesButton>
                </ChatContainerBtn>
                <NotesButton onClick={fnBtnNewNote}>
                    {nameBtnNewNote}
                </NotesButton>
                <NotesButton onClick={fnBtnOptions}>
                    {nameBtnOptions}
                </NotesButton>
                <NotesButton
                    onClick={() => {
                        visibilityConfirm({ visibility: true });
                        setDisplayChat({ displayChat: "none" });
                        setDisplayBtnChat({ displayBtnChat: "block" });
                    }}
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
            <Chat
                getFriends={getFriends}
                myFriends={myFriends}
                setMyFriends={setMyFriends}
            />
        </HeaderStyle>
    );
};

export default Header;
