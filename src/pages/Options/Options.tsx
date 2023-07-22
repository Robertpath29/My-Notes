import React, { useState } from "react";
import { ContainerStyle, OptionsStyle, VerticalStrip } from "./options.style";
import { useSelector } from "react-redux";
import { reducersType } from "../../redux/combineReducers/combineReducers";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import NavOptions from "../../components/NavOptions/NavOptions";
import OptionsDisplay from "../../components/OptionsDisplay/OptionsDisplay";
import { useRouter } from "../../hooks/useRouter";
import { opacityChat } from "../../utils/opacityChat";
import { useAction } from "../../hooks/useAction";

const Options = () => {
    const { moveTo } = useRouter();
    const userData = useSelector((store: reducersType) => store.user);
    const { displayChat } = useSelector((store: reducersType) => store.chat);
    const [element, setElement] = useState(<></>);
    const [visDisplay, setVisDisplay] = useState("none");
    const { setOpacity } = useAction();
    return (
        <OptionsStyle
            onClick={(e) => {
                opacityChat(e, setOpacity, displayChat);
            }}
        >
            <Header
                userName={userData.login}
                nameBtnOptions="Main page"
                fnBtnOptions={() => {
                    moveTo("/my-notes");
                }}
                nameBtnNewNote="New note"
                fnBtnNewNote={() => {
                    moveTo("/my-notes/new-note");
                }}
            />
            <ContainerStyle>
                <NavOptions fn={setElement} visDisplay={setVisDisplay} />
                <VerticalStrip />
                <OptionsDisplay visDisplay={visDisplay}>
                    {element}
                </OptionsDisplay>
            </ContainerStyle>
        </OptionsStyle>
    );
};

export default Options;
