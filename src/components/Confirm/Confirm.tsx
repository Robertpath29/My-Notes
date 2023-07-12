import React, { FC } from "react";
import { ConfirmStyle, ContainerLoading, MessageStyle } from "./confirm.style";
import { ContainerGroupStyle } from "../Header/header.style";
import NotesButton from "../basic/button/NotesButton";
import { ConfirmType } from "./confirmType";
import Loading from "../basic/loading/Loading";
import { useAction } from "../../hooks/useAction";

const Confirm: FC<ConfirmType> = ({ message, onConfirm, onCancel }) => {
    const { visibilityConfirm } = useAction();
    function btnConfirm() {
        onConfirm();
        visibilityConfirm({ visibility: false });
    }
    function btnCancel() {
        onCancel();
        visibilityConfirm({ visibility: false });
    }
    return (
        <ConfirmStyle>
            <MessageStyle>{message}</MessageStyle>
            <ContainerLoading>
                <Loading />
            </ContainerLoading>
            <ContainerGroupStyle>
                <NotesButton onClick={btnConfirm}>Yes</NotesButton>
                <NotesButton onClick={btnCancel}>no</NotesButton>
            </ContainerGroupStyle>
        </ConfirmStyle>
    );
};

export default Confirm;
