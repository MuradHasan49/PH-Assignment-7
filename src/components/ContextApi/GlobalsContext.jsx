"use client"
import { createContext, useState } from "react";

export const myContext = createContext()

const GlobalsContext = ({ children }) => {
    const [data, setData] = useState([])
    return (
        <>
            <myContext.Provider value={{ data, setData }}>
                {children}
            </myContext.Provider>
        </>
    )
}

export default GlobalsContext