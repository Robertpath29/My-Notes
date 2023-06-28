import React, { FC } from "react";
import logoType from "./logoType";

const Logo: FC<logoType> = ({ children }) => {
    return <h1>{children}</h1>;
};

export default Logo;
