import { useContext, useState } from "react";
import {AunthContext} from "./AuthContext"

export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
 const {over,totalemp,togglesetTotalEmp}=useContext(AunthContext)
  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{totalemp}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{over.fire}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{over.promote}</span>
        </div>
        <div>
          Total New: <span className="total_new">{0}</span>
        </div>
      </div>
    </>
  );
};
