import React, { useContext, useEffect, useState } from "react";
import LoadingStyle from "../../style/startPages/loading/loading.style";
import { RouterContext } from "../../context/context";

const Loading = () => {
    const [load, setLoad] = useState({ loadingPencil: 100, loadingNumber: 0 });
    const { setLoads } = useContext(RouterContext);

    function bootEmulation() {
        setLoad((load) => ({
            ...load,
            loadingNumber: load.loadingNumber + 1,
            loadingPencil: load.loadingPencil - 1,
        }));
    }

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
    }, [setLoads]);

    return (
        <LoadingStyle load={load.loadingPencil}>
            <div>
                <img src="./images/animation-pencil.png" alt="loading..." />
            </div>
            <h1>{load.loadingNumber}%</h1>
        </LoadingStyle>
    );
};

export default Loading;
