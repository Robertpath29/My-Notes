import React from "react";
import { LoadingStyle } from "./loading.style";

const Loading = () => {
    return (
        <LoadingStyle
            className="chat"
            src="/images/loading.gif"
            alt="loading..."
        />
    );
};

export default Loading;
