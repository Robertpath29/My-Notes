import React, { FC } from "react";
import { NavOptionsStyle } from "./navOptions.style";
import NotesButton from "../basic/button/NotesButton";
import { navOptionsType } from "./navOptionsType";
import InfoForApp from "../InfoForApp/InfoForApp";
import MyInfo from "../MyInfo/MyInfo";

const NavOptions: FC<navOptionsType> = ({ fn, visDisplay }) => {
    return (
        <NavOptionsStyle>
            <NotesButton
                onClick={() => {
                    visDisplay("block");
                    fn(<MyInfo />);
                }}
            >
                My info
            </NotesButton>
            <NotesButton
                onClick={() => {
                    fn(<InfoForApp />);
                    visDisplay("block");
                }}
            >
                Info for app
            </NotesButton>
        </NavOptionsStyle>
    );
};

export default NavOptions;
