import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import {AunthContext} from "./AuthContext"
import axios from "axios"
export const EmployeeDetails = () => {
  const {id}=useParams()
const {toggleset}=useContext(AunthContext)

  const [user,setUser]=useState({})
  
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
 
  const task=user.tasks;
  return (
    <div className="user_details">
      
      <img src={user.image}  className="user_image"  />
      <h4 className="user_name">{user.employee_name}</h4>
      <span className="user_salary">${user.salary}</span>
      <span className="tasks">
         {/* {
         task.map((ll)=>{
        return<li className="task">{ll}</li>
        })}
          */}
      </span>
      Status: <b className="status">{user.staus}</b>
      Title: <b className="title"> {user.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button onClick={(e)=>{
toggleset(e.target.className,e.target.value)
      }} className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
// {
//   "id": 1,
//       "employee_name": "Kial Bengtsen",
//       "employee_id": "3ec7a664-9948-4099-9829-a8c75deef782",
//       "title": "Team Lead",
//       "salary": 1000,
//       "image": "http://dummyimage.com/185x177.png/ff4444/ffffff",
//       "username": "kbengtsen0",
//       "password": "oJ79pX",
//       "tasks": ["fixing bugs"],
//       "status": "working",
//       "team": "frontend"
// }