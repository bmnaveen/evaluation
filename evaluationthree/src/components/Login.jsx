import { useContext, useState } from "react";
import {AunthContext} from "./AuthContext"
import axios from "axios"
import { useNavigate } from "react-router-dom";
export const Login = () => {
  //  use reqres to log user in.
const [userName,setUserName]=useState("");
const [userPasscode,setUserPasscode]=useState("");
const navigate=useNavigate()
console.log(userName,userPasscode)
const {AuthStatus,toggleAuthState}=useContext(AunthContext)
console.log(AuthStatus)
const userLogin=(e)=>{
e.preventDefault();
axios.post('https://reqres.in/api/login', {
  email: userName,
  password: userPasscode
})
.then(function (response) {
  console.log(response.data)
  toggleAuthState()
  navigate("/")
})
.catch(function (error) {
  console.log(error);
});

}
  return (
    <form className="loginform">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={(e)=>{
          setUserName(e.target.value)
        }}  onBlur={(e)=>{
          setUserName(e.target.value)
        }}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={(e)=>{
          setUserPasscode(e.target.value)
        }}

        onBlur={(e)=>{
          setUserPasscode(e.target.value)
        }}
      />
      <input type="submit" value="SIGN IN" onClick={userLogin} className="login_submit" />
    </form>
  );
};
