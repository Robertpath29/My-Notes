import React, { FC } from "react";
import WarningMessageStyle from "./warningMessage.style";
import warningMessageType from "./WarningMessageType";

const WarningMessage: FC<warningMessageType> = ({
    children,
    none,
    className,
}) => {
    return (
        <WarningMessageStyle className={className} none={none}>
            {children}
        </WarningMessageStyle>
    );
};

export default WarningMessage;
