import React, { FC } from "react";
import { OptionsDisplayStyle } from "./OptionsDisplay.style";
import { optionsDisplayType } from "./optionsDisplayType";

const OptionsDisplay: FC<optionsDisplayType> = ({ children, visDisplay }) => {
    return (
        <OptionsDisplayStyle visDisplay={visDisplay}>
            {children}
        </OptionsDisplayStyle>
    );
};

export default OptionsDisplay;
