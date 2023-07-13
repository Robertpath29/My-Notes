import React, { FC } from "react";
import { OptionsDisplayStyle } from "./OptionsDisplay.style";
import { optionsDisplayType } from "./optionsDisplayType";

const OptionsDisplay: FC<optionsDisplayType> = ({ children }) => {
    return <OptionsDisplayStyle>{children}</OptionsDisplayStyle>;
};

export default OptionsDisplay;
