import { useEffect ,useState} from "react";
import axios from "axios";
export const Orders = () => {
 
const [srt,setSrt]=useState("id")
  useEffect(()=>{
    getData()
  },[])
  const [geter,setGeter]=useState([])
  const getData=()=>{
    axios.get(' http://localhost:8080/orders')
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
 
  useEffect(()=>{
let datar=[...geter].sort((a,b)=>{
  let x=a[srt];
  let y=b[srt]
  if(x>y) return 1;
  if(x<y) return -1;
   return 0
})
setGeter(datar)
console.log("yes")
  },[srt])
  return (
    <div>
      <div>
        <div>
          <select onChange={(e)=>{
            setSrt(e.target.value)}
            }  className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
         
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
          {
            geter.map((e,i)=>{
              return <tr className="orders-row">
              <td className="id">{i+1}</td>
              <td className="problem">{e.problem}</td>
              <td className="owner">{e.owner_name}</td>
              <td className="status">{e.status}</td>
              <td className="cost">{e.cost}</td>
              <td className="change-status">
                {/* Show select dropdown only if status is Not Accepted */}
                <select  className="changeStatus" name="changeStatus">
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Done">Done</option>
                  <option value="Not Accepted">Not Accepted</option>
                </select>
              </td>
              <td className="accept">
                {/* Show this button only if status is Not Accepted */}
                {/* on change make request to update it in db, and show changed status in table */}
                <button >Accept</button>
              </td>
            </tr>
            })
          }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};
