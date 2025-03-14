import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Body = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const userData=useSelector((store)=>store.user);
  const fetchUser=async ()=>{
    try{
      const user=await axios.get(BASE_URL+"/profile/view",{withCredentials:true});
      console.log('user: ', user);
      dispatch(addUser(user.data));
    }catch(error){
      if(error.response && error.response.status===401){
        // user is not authenticated,Please Login
        removeUser();
        navigate('/login');
      }
      console.error(error);
    }
  };
  useEffect(()=>{
    if(!userData){
      fetchUser();
    }
  },[]);
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Outlet is a placeholder for the child routes */}
      <Footer />
    </div>
  );
};

export default Body;
