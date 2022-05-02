import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import { store } from "./Redux/store";
// import { ProtectedRoute } from "./components/ProtextedRoute";
import {Link,Routes,Route} from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const user=useSelector((store)=>store.isLoggedIn)
  console.log(user)
  return (
    <div className="App">
      <div>
        <Link className="nav-home" to="/">
          Home
        </Link>
        { user!=null&&user[1]==true ?<Link className="nav-logout" to="/logout">
          Logout
        </Link>:<Link className="nav-login" to="/login">
          Login
        </Link>}
      </div>

      <Routes> 
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<Login></Login>}/>
        <Route path="/logout" element={<Logout></Logout>}/>
        <Route path="/neworder/:name" element={<NewOrder></NewOrder>}/>
        <Route path="/orders" element={<Orders></Orders>}/>
      </Routes>
    </div>
  );
}

export default App;
