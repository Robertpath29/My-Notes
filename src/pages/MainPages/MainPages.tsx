import React from "react";
import { MainPagesStyle } from "./MainPages.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Header from "../../components/Header/Header";
import NoteDisplay from "../../components/NoteDisplay/NoteDisplay";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";
import { useRouter } from "../../hooks/useRouter";

const MainPages = () => {
    const userData = useSelector((store: reducersType) => store.user);
    const { moveTo } = useRouter();

    return (
        <MainPagesStyle>
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
