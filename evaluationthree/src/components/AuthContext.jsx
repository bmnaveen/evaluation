import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
export const AunthContext=createContext();

export const AuthContextProvider=({children})=>{
const [AuthStatus,setAuthStatus]=useState(false);
const [totalemp,setTotalEmp]=useState();

const [over,SetOver]=useState({
    fire:0,
    promote:0,
    totalnew:0
})
const toggleset=(className,value)=>{
    
    SetOver({
        ...over,[className]:value
    })
}
useEffect(()=>{
    getUser();
  },[])
    const getUser=()=>{
      axios.get(`http://localhost:8080/employee`)
    .then(function (response) {
      // handle success
      console.log(response.data[0].employee_name);
      setTotalEmp(response.data.length)
      
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    }

const toggleAuthState=()=>{
    setAuthStatus(!AuthStatus)
}
const togglesetTotalEmp=(val)=>{
    setTotalEmp(totalemp+val)
}
    return <AunthContext.Provider value={{AuthStatus,toggleAuthState,totalemp,togglesetTotalEmp,toggleset,over}} >{children}</AunthContext.Provider>
}