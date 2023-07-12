import React, { FC } from "react";
import {
    ContainerGroupStyle,
    HeaderStyle,
    NameUserStyle,
} from "./header.style";
import Logo from "../basic/logo/Logo";
import { headerType } from "./headerType";
import NotesButton from "../basic/button/NotesButton";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks/useAction";

const Header: FC<headerType> = ({ userName }) => {
    const router = useNavigate();
    function exitAccount() {
        const confirm = window.confirm(`exit account ${userName}?`);
        if (confirm) {
            document.cookie =
                "saveUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
            router(`/login`);
        }
    }
    return (
        <HeaderStyle>
            <ContainerGroupStyle>
                <Logo color="yellow">My-Notes</Logo>
                <NameUserStyle>{userName}</NameUserStyle>
            </ContainerGroupStyle>

            <ContainerGroupStyle>
                <NotesButton onClick={() => {}}>Options</NotesButton>
                <NotesButton onClick={exitAccount}>Exit</NotesButton>
            </ContainerGroupStyle>
        </HeaderStyle>
    );
};

export default Header;
