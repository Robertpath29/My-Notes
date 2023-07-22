import React from "react";
import { MainPagesStyle } from "./MainPages.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Header from "../../components/Header/Header";
import NoteDisplay from "../../components/NoteDisplay/NoteDisplay";
import Footer from "../../components/Footer/Footer";
import { useRouter } from "../../hooks/useRouter";
import { opacityChat } from "../../utils/opacityChat";
import { useAction } from "../../hooks/useAction";

const MainPages = () => {
    const userData = useSelector((store: reducersType) => store.user);
    const { displayChat } = useSelector((state: reducersType) => state.chat);
    const { moveTo } = useRouter();
    const { setOpacity } = useAction();

    return (
        <MainPagesStyle
            onClick={(e) => {
                opacityChat(e, setOpacity, displayChat);
            }}
        >
            <>
                <Header
                    userName={userData.login}
                    nameBtnOptions="Options"
                    fnBtnOptions={() => {
                        moveTo("/my-notes/options");
                    }}
                    nameBtnNewNote="New note"
                    fnBtnNewNote={() => {
                        moveTo("/my-notes/new-note");
                    }}
                />
                <NoteDisplay />
                <Footer />
            </>
        </MainPagesStyle>
    );
};

export default MainPages;
