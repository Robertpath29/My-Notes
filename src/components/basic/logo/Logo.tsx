import React, { FC } from "react";
import logoType from "./logoType";
import LogoStyle from "./logo.style";

const Logo: FC<logoType> = ({ children, color }) => {
    return <LogoStyle color={color}>{children}</LogoStyle>;
};

export default Logo;
