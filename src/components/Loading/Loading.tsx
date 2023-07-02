import React, { useCallback, useContext, useEffect, useState } from "react";
import { LoadingStyle, LoadingText, ParentImg, Pencil } from "./loading.style";
import { RouterContext } from "../../context/context";

const Loading = () => {
    const [load, setLoad] = useState({ loadingPencil: 100, loadingNumber: 0 });
    const { setLoads } = useContext(RouterContext);

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
                    setLoads(false);
                }, 1000);
            }
        }, 1);
    }, [bootEmulation, setLoads]);

    return (
        <LoadingStyle>
            <ParentImg load={load.loadingPencil}>
                <Pencil src="./images/animation-pencil.png" alt="loading..." />
            </ParentImg>
            <LoadingText>{load.loadingNumber}%</LoadingText>
        </LoadingStyle>
    );
};

export default Loading;
