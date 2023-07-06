import React from "react";
import { MainPagesStyle } from "./MainPages.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";

const MainPages = () => {
    const userData = useSelector((store: reducersType) => store.user);
    console.log(userData);

    return <MainPagesStyle></MainPagesStyle>;
};

export default MainPages;
