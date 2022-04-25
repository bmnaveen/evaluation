import { Navigate } from "react-router-dom";

export const Logout = () => {
  // log user out. it's just an inmemory value in context api
  return <Navigate to="/"></Navigate>

  
};
