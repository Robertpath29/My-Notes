import React from "react";
import { MainPagesStyle } from "./MainPages.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import Header from "../../components/Header/Header";
import NoteDisplay from "../../components/NoteDisplay/NoteDisplay";
import Footer from "../../components/Footer/Footer";
import Confirm from "../../components/Confirm/Confirm";
import { useNavigate } from "react-router-dom";
import { useAction } from "../../hooks/useAction";

const MainPages = () => {
    const { visibility } = useSelector((state: reducersType) => state.confirm);
    const { visibilityConfirm, userLogIn } = useAction();
    const userData = useSelector((store: reducersType) => store.user);
    const router = useNavigate();
    function exitAccount() {
        document.cookie = "saveUser=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        router(`/login`);
        visibilityConfirm({ visibility: false });
        userLogIn({ userIsLogIn: false });
    }

    function noExitAccount() {
        visibilityConfirm({ visibility: false });
    }

    return (
        <MainPagesStyle>
            <>
                <Header userName={userData.login} />
                <NoteDisplay />
                <Footer />
            </>
            {visibility && (
                <Confirm
                    message={`Exit account ${userData.login}?`}
                    onConfirm={exitAccount}
                    onCancel={noExitAccount}
                />
            )}
        </MainPagesStyle>
    );
};

export default MainPages;
