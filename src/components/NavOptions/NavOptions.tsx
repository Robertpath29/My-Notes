import React from "react";
import { NavOptionsStyle } from "./navOptions.style";
import NotesButton from "../basic/button/NotesButton";

const NavOptions = () => {
    return (
        <NavOptionsStyle>
            <NotesButton onClick={() => {}}>My info</NotesButton>
            <NotesButton onClick={() => {}}>Info for app</NotesButton>
        </NavOptionsStyle>
    );
};

export default NavOptions;
