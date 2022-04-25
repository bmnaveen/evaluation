import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { EmployeeList } from "./components/EmployeeList";
import { EmployeeDetails } from "./components/EmployeeDetails";
import { Admin } from "./components/Admin";
import { ProtectedRoute } from "./components/PrivateRoute";
import { Navbar } from "./components/Navbar";
import { Logout } from "./components/Logout";
import {Routes,Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
      
      <Route path="/" element={<Home> </Home>}/>
      <Route path="/employees" element={<EmployeeList> </EmployeeList>}/>
      <Route path="/login" element={<Login></Login>}/>
      <Route path="/employees/:id" element={<ProtectedRoute><EmployeeDetails> </EmployeeDetails></ProtectedRoute>}/>
      <Route path="/admin" element={<ProtectedRoute><EmployeeDetails> </EmployeeDetails></ProtectedRoute>}/>
      <Route path="/logout" element={<Logout></Logout>}/>
      </Routes>
    </div>
  );
}

export default App;
