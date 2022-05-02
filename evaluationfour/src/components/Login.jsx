import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addAuth } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
export const Login = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const [user,setUser]=useState({
    username:"",
    password:""
  })


  const getData=(e)=>{

const {className,value}=e.target;

setUser({
  ...user,[className]:value
})

  }
const changeStatus=(e)=>{
  
e.preventDefault();
console.log(user)
axios.get(' http://localhost:8080/users', {
  params: {
    username:user.username,
    pass:user.password,
  }
})
.then(function (response) {
  console.log(response.data[0]);
  dispatch(addAuth([response.data[0].username,true]))
  if(response.data[0].username=="admin"){
    navigate("/orders")
  }else{
    navigate(`/neworder/${response.data[0].username}`)
  }

})
.catch(function (error) {
  console.log(error);
})
.then(function () {
  // always executed
});  

}

  return (
    <div>
      <input onChange={getData}
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
      />
      <input onChange={getData}
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button onClick={changeStatus} className="submit">Login</button>
    </div>
  );
};
