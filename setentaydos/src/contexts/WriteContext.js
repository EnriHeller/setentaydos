import React, { createContext, useState } from "react";

export const WriteContext = createContext();

export const WriteProvider = ({children}) =>{

    const[writing, setWriting] = useState();
    const[wallData, setWallData] = useState();

    const value = {
        writing,
        setWriting,
        wallData,
        setWallData
    }

    return(
        <WriteContext.Provider value={value}>
            {children}
        </WriteContext.Provider>
    )
}