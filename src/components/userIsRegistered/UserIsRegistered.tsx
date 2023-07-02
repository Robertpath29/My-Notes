import React, { FC } from "react";
import {
    HeaderUserIsRegisteredStyle,
    UserIsRegisteredStyle,
} from "./userIsRegistered.style";
import NotesButton from "../basic/button/NotesButton";
import { userIsRegisteredType } from "./userIsRegisteredType";
const UserIsRegistered: FC<userIsRegisteredType> = ({ children, onClick }) => {
    return (
        <UserIsRegisteredStyle>
            <HeaderUserIsRegisteredStyle>
                {children}
            </HeaderUserIsRegisteredStyle>
            <NotesButton onClick={onClick}>Ok</NotesButton>
        </UserIsRegisteredStyle>
    );
};

export default UserIsRegistered;
