import React, { FC } from "react";
import {
    ConfirmStyle,
    ContainerConfirm,
    ContainerLoading,
    MessageStyle,
} from "./confirm.style";
import { ContainerBtnStyle } from "../Header/header.style";
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
        <ConfirmStyle className="chat">
            <ContainerConfirm className="chat">
                <MessageStyle className="chat">{message}</MessageStyle>
                <ContainerLoading className="chat">
                    <Loading />
                </ContainerLoading>
                <ContainerBtnStyle className="chat">
                    <NotesButton onClick={btnConfirm} className="chat">
                        Yes
                    </NotesButton>
                    <NotesButton onClick={btnCancel} className="chat">
                        no
                    </NotesButton>
                </ContainerBtnStyle>
            </ContainerConfirm>
        </ConfirmStyle>
    );
};

export default Confirm;
