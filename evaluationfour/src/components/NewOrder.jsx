
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
export const NewOrder = () => {
  // Get data of only this user. store it in redux
  // GET /orders?owner_name=john will give you all order of user john
  //  on submit click create a new order, new order has status `Not Accepted`
  const [geter,setGeter]=useState([])
  const {name}=useParams();
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    axios.get(' http://localhost:8080/orders', {
  params: {
    owner_name:name,
  }
})
.then(function (response) {
  console.log(response.data);
  setGeter(response.data);

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
      <div className="form">
        <input
          className="new-problem"
          type="text"
          name="problem"
          placeholder="Enter problem"
        />
        {/* This input is readonly, it's coming from redux */}
        <input value={name}
          className="owner-name"
          type="text"
          name="owner_name"
          placeholder="yourname"
          readOnly
        />
        <input
          className="brand"
          type="text"
          name="brand"
          placeholder="Enter brand name"
        />
        {/* Create new problem, show it in below form immediately */}
        <button className="submit">submit</button>
      </div>

      <div className="pastOrders">
        {/* this button filters the data below. */}
        {/* it's just a toggle of redux state something like `showUnfinished`  */}
        <button className="filter">
          showOnlyUnfinished
        </button>

        {
          geter.map((e,i)=>{
            return   <div className="past-orders">
            <span className="id">{i+1}</span>. <span className="problem">{e.problem}</span>{" "}
            <span className="cost">
              {e.status=="Not Accepted" ? "" :`$ ${e.cost}`}
            </span>
            <p className="status">Status:{e.status} </p>
            <hr />
          </div>
          })
        }
      
      </div>
    </div>
  );
};
