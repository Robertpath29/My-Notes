import React, { useCallback, useContext, useEffect, useState } from "react";
import {
    StartPagesLoadingStyle,
    LoadingTextStyle,
} from "./StartPagesLoading.style";
import { RouterContext } from "../../context/context";
import Loading from "../basic/loading/Loading";

const StartPagesLoading = () => {
    const [load, setLoad] = useState({ loadingNumber: 0 });
    const { setIsLoadingPagesStart } = useContext(RouterContext);

    const bootEmulation = useCallback(() => {
        setLoad((load) => ({
            ...load,
            loadingNumber: load.loadingNumber + 1,
        }));
    }, [setLoad]);

    useEffect(() => {
        let currentNumber = 0;
        const index = setInterval(() => {
            currentNumber++;
            bootEmulation();
            if (currentNumber > 99) {
                clearInterval(index);
                setTimeout(() => {
                    setIsLoadingPagesStart(false);
                }, 1000);
            }
        }, 1);
    }, [bootEmulation, setLoad, setIsLoadingPagesStart]);

    return (
        <StartPagesLoadingStyle>
            <Loading />
            <LoadingTextStyle>{load.loadingNumber}%</LoadingTextStyle>
        </StartPagesLoadingStyle>
    );
};

export default StartPagesLoading;
