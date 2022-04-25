import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
export const EmployeeDetails = () => {
  const {id}=useParams()

  const [user,setUser]=useState()

useEffect(()=>{
  getUser();
},[])
  const getUser=()=>{
    axios.get(`http://localhost:8080/employee?id=${id}`)
  .then(function (response) {
    // handle success
    console.log(response.data[0].employee_name);
    setUser(response.data[0])
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  }
  return (
    <div className="user_details">
      
      <img src={user.img}  className="user_image"  />
      <h4 className="user_name"></h4>
      <span className="user_salary">$</span>
      <span className="tasks">
        <li className="task"></li>
      </span>
      Status: <b className="status"></b>
      Title: <b className="title"></b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
