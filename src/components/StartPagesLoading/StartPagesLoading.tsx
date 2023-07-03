import React, { useCallback, useContext, useEffect, useState } from "react";
import {
    StartPagesLoadingStyle,
    LoadingTextStyle,
    ParentImgStyle,
    PencilStyle,
} from "./StartPagesLoading.style";
import { RouterContext } from "../../context/context";

const StartPagesLoading = () => {
    const [load, setLoad] = useState({ loadingPencil: 100, loadingNumber: 0 });
    const { setIsLoadingPagesStart } = useContext(RouterContext);

    const bootEmulation = useCallback(() => {
        setLoad((load) => ({
            ...load,
            loadingNumber: load.loadingNumber + 1,
            loadingPencil: load.loadingPencil - 1,
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
            <ParentImgStyle load={load.loadingPencil}>
                <PencilStyle
                    src="./images/animation-pencil.png"
                    alt="loading..."
                />
            </ParentImgStyle>
            <LoadingTextStyle>{load.loadingNumber}%</LoadingTextStyle>
        </StartPagesLoadingStyle>
    );
};

export default StartPagesLoading;
