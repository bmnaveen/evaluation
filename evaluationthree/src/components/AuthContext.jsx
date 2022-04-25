import { createContext, useState } from "react";


export const AunthContext=createContext();

export const AuthContextProvider=({children})=>{
const [AuthStatus,setAuthStatus]=useState(false);
const [totalemp,setTotalEmp]=useState();
const toggleAuthState=()=>{
    setAuthStatus(!AuthStatus)
}
const togglesetTotalEmp=(val)=>{
    setTotalEmp(totalemp+val)
}
    return <AunthContext.Provider value={{AuthStatus,toggleAuthState,totalemp,togglesetTotalEmp}} >{children}</AunthContext.Provider>
}