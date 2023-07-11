import React from "react";
import { MainPagesStyle } from "./MainPages.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Header from "../../components/Header/Header";
import NoteDisplay from "../../components/NoteDisplay/NoteDisplay";
import Footer from "../../components/Footer/Footer";

const MainPages = () => {
    const userData = useSelector((store: reducersType) => store.user);

    return (
        <MainPagesStyle>
            <Header userName={userData.login} />
            <NoteDisplay />
            <Footer />
        </MainPagesStyle>
    );
};

export default MainPages;
