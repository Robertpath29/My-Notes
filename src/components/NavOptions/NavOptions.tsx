import React, { FC } from "react";
import { NavOptionsStyle } from "./navOptions.style";
import NotesButton from "../basic/button/NotesButton";
import { navOptionsType } from "./navOptionsType";
import InfoForApp from "../InfoForApp/InfoForApp";

const NavOptions: FC<navOptionsType> = ({ fn, visDisplay }) => {
    return (
        <NavOptionsStyle>
            <NotesButton onClick={() => {}}>My info</NotesButton>
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
