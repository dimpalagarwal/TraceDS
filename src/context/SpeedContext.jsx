import {
    createContext,
    useContext,
    useState,useEffect,
} from "react";

const SpeedContext =
    createContext();

export function SpeedProvider({
    children,
}) {

    const [speed,setSpeed] =
    useState(
        Number(
            localStorage.getItem(
                "speed"
            )
        ) || 1
    );

    useEffect(() => {

    localStorage.setItem(
        "speed",
        speed
    );

}, [speed]);

    return (
        <SpeedContext.Provider
            value={{
                speed,
                setSpeed,
            }}
        >
            {children}
        </SpeedContext.Provider>
    );
}

export const useSpeed =
    () => useContext(
        SpeedContext
    );