import React, { FC } from "react";
import {
    ContainerGroupStyle,
    HeaderStyle,
    NameUserStyle,
} from "./header.style";
import Logo from "../basic/logo/Logo";
import { headerType } from "./headerType";
import NotesButton from "../basic/button/NotesButton";
import { useAction } from "../../hooks/useAction";

const Header: FC<headerType> = ({ userName }) => {
    const { visibilityConfirm } = useAction();
    return (
        <HeaderStyle>
            <ContainerGroupStyle>
                <Logo color="yellow">My-Notes</Logo>
                <NameUserStyle>{userName}</NameUserStyle>
            </ContainerGroupStyle>

            <ContainerGroupStyle>
                <NotesButton onClick={() => {}}>Options</NotesButton>
                <NotesButton
                    onClick={() => visibilityConfirm({ visibility: true })}
                >
                    Exit
                </NotesButton>
            </ContainerGroupStyle>
        </HeaderStyle>
    );
};

export default Header;
