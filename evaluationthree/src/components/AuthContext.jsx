import { createContext, useState } from "react";


export const AunthContext=createContext();

export const AuthContextProvider=({children})=>{
const [AuthStatus,setAuthStatus]=useState(false);

const toggleAuthState=()=>{
    setAuthStatus(!AuthStatus)
}

    return <AunthContext.Provider value={{AuthStatus,toggleAuthState}} >{children}</AunthContext.Provider>
}