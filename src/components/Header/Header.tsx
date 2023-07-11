import React, { FC } from "react";
import {
    ContainerGroupStyle,
    HeaderStyle,
    NameUserStyle,
} from "./header.style";
import Logo from "../basic/logo/Logo";
import { headerType } from "./headerType";
import NotesButton from "../basic/button/NotesButton";

const Header: FC<headerType> = ({ userName }) => {
    return (
        <HeaderStyle>
            <ContainerGroupStyle>
                <Logo color="yellow">My-Notes</Logo>
                <NameUserStyle>{userName}</NameUserStyle>
            </ContainerGroupStyle>

            <ContainerGroupStyle>
                <NotesButton onClick={() => {}}>Options</NotesButton>
                <NotesButton onClick={() => {}}>Exit</NotesButton>
            </ContainerGroupStyle>
        </HeaderStyle>
    );
};

export default Header;
