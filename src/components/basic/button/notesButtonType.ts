import { MouseEvent } from "react";

type NotesButtonType = {
    children: string;
    onClick: (e: MouseEvent) => void;
    id?: string;
};

export default NotesButtonType;
