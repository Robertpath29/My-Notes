import React, { FC } from "react";
import NotesButtonType from "./notesButtonType";
import NotesButtonStyle from "./notesButton.style";

const NotesButton: FC<NotesButtonType> = ({
    children,
    onClick,
    className,
    id,
}) => {
    return (
        <NotesButtonStyle className={className} onClick={onClick} id={id}>
            {children}
        </NotesButtonStyle>
    );
};

export default NotesButton;
