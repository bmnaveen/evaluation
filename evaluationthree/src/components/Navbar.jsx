import { Link } from "react-router-dom";
import {AunthContext} from "./AuthContext"
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const Navbar = () => {
  const {AuthStatus,toggleAuthState}=useContext(AunthContext)
  const navigate=useNavigate()
  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {AuthStatus ?<Link onClick={()=>{
        toggleAuthState()
        navigate("/logout")
      }} className="nav-logout" to="/logout">
        Logout
      </Link>
       :
      <Link className="nav-login" to="/login" >
        Login
      </Link>}
      
    </div>
  );
};
