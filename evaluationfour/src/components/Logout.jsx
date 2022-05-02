import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addAuth } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
export const Logout = () => {
  const dispatch=useDispatch();
const navigate=useNavigate()
  useEffect(()=>{
    dispatch(addAuth(null))
    navigate("/")
  },[])

  return <></>;
};
