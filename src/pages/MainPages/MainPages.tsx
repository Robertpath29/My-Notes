import React from "react";
import { MainPagesStyle } from "./MainPages.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";

const MainPages = () => {
    const userData = useSelector((store: reducersType) => store.user);

    return (
        <MainPagesStyle>
            <h1>{userData.id}</h1>
            <h1>{userData.login}</h1>
            <h1>{userData.email}</h1>
        </MainPagesStyle>
    );
};

export default MainPages;
