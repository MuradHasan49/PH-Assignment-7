"use client"
import { createContext, useState } from "react";

export const myContext = createContext()
export const InteractionsDataCotext = createContext([])

const GlobalsContext = ({ children }) => {
    const [data, setData] = useState([])
    const [interactionsData, setInteractionsData] = useState([]);
    return (
        <>
            <myContext.Provider value={{ data, setData }}>
                <InteractionsDataCotext.Provider value={{ interactionsData, setInteractionsData }}>
                    {children}
                </InteractionsDataCotext.Provider>
            </myContext.Provider>
        </>
    )
}

export default GlobalsContext