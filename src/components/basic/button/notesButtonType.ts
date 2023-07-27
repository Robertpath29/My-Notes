import { MouseEvent } from "react";

type NotesButtonType = {
    children: string;
    onClick: (e: MouseEvent) => void;
    className?: string;
    id?: string;
};

export default NotesButtonType;
