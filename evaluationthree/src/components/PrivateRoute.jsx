
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import {AunthContext} from "./AuthContext"
export const  ProtectedRoute=({children})=>{
    const {AuthStatus,toggleAuthState}=useContext(AunthContext);
    if(AuthStatus){
return children
    }else{
        return <Navigate to={"/login"}></Navigate>
    }
}