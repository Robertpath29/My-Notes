import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export function opacityChat(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    setOpacity: ActionCreatorWithPayload<any, "chat/setOpacity">,
    displayChat: string
) {
    const element = e.target as HTMLElement;
    if (displayChat === "none") return;
    if (
        element.id === "chat" ||
        element.id === "chatDisplay" ||
        element.id === "userDisplay" ||
        element.id === "groupMessageUser" ||
        element.id === "inputUserLogin" ||
        element.id === "userLoginBtn" ||
        element.id === "groupNameUser" ||
        element.id === "writeTextGroup" ||
        element.id === "textareaShat" ||
        element.id === "closeChat" ||
        element.id === "submit" ||
        element.id === "openChat"
    )
        return;

    setOpacity({ opacity: 0.5 });
}
