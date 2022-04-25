import { useEffect, useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom"; 
import { useContext } from "react";
import {AunthContext} from "./AuthContext"
export const EmployeeList = () => {

const [userDetailes,setUserDetailes]=useState([]);
const {totalemp,togglesetTotalEmp}=useContext(AunthContext)
const navigate=useNavigate()

  useEffect(()=>{
    
    return getData() 
  },[])
  const getData=()=>{
    axios.get('http://localhost:8080/employee')
    .then(function (response) {
      // handle success
      console.log(response.data);
      setUserDetailes(response.data)
      togglesetTotalEmp(response.data.length)
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
    <div  className="list_container">
      {userDetailes.map((e)=>{
        return <div onClick={()=>{
          navigate(`/employees/${e.id}`)
        }} className="employee_card">
        <img src={e.image} className="employee_image" />
        <span className="employee_name">{e.employee_name}</span>
        <span className="employee_title">{e.title}</span>
      </div>
      })}
      
    </div>
  );
};
