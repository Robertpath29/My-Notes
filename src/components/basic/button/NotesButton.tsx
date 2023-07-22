import React, { FC } from "react";
import NotesButtonType from "./notesButtonType";
import NotesButtonStyle from "./notesButton.style";

const NotesButton: FC<NotesButtonType> = ({ children, onClick, id }) => {
    return (
        <NotesButtonStyle id={id} onClick={onClick}>
            {children}
        </NotesButtonStyle>
    );
};

export default NotesButton;
