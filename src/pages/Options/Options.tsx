import React from "react";
import { ContainerStyle, OptionsStyle, VerticalStrip } from "./options.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavOptions from "../../components/NavOptions/NavOptions";
import OptionsDisplay from "../../components/OptionsDisplay/OptionsDisplay";

const Options = () => {
    const router = useNavigate();
    function moveToMainPages() {
        router(`/my-notes`);
    }
    const userData = useSelector((store: reducersType) => store.user);
    return (
        <OptionsStyle>
            <Header
                userName={userData.login}
                nameBtn="Main page"
                fnBtn={moveToMainPages}
            />
            <ContainerStyle>
                <NavOptions />
                <VerticalStrip />
                <OptionsDisplay></OptionsDisplay>
            </ContainerStyle>
        </OptionsStyle>
    );
};

export default Options;
