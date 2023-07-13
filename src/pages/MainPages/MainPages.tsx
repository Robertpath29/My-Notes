import React from "react";
import { MainPagesStyle } from "./MainPages.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Header from "../../components/Header/Header";
import NoteDisplay from "../../components/NoteDisplay/NoteDisplay";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router-dom";

const MainPages = () => {
    const userData = useSelector((store: reducersType) => store.user);
    const router = useNavigate();

    function moveToOptions() {
        router(`/my-notes/options`);
    }

    return (
        <MainPagesStyle>
            <>
                <Header
                    userName={userData.login}
                    nameBtn="Options"
                    fnBtn={moveToOptions}
                />
                <NoteDisplay />
                <Footer />
            </>
        </MainPagesStyle>
    );
};

export default MainPages;
