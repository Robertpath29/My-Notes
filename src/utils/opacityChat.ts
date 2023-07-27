import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

export function opacityChat(
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    setOpacity: ActionCreatorWithPayload<any, "chat/setOpacity">,
    displayChat: string
) {
    const element = e.target as HTMLElement;
    const className = element.className.slice(-4);

    if (displayChat === "none") return;
    if (className === "chat") return;

    setOpacity({ opacity: 0.5 });
}
