import { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import api from "../utils/axiosInterceptor";
const Body = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const userData=useSelector((store)=>store.user);
  const fetchUser=async ()=>{
    try{
      const user=await api.get("/profile/view");
      dispatch(addUser(user.data));
    }catch(error){
      if(error.response && error.response.status===401){
        if(!window.location.pathname.includes('/login')){
         // user is not authenticated,Please Login
        navigate('/login');
      }
        
      }
      console.error("Error fetching user:", error);
    }
  };
  useEffect(() => {
    if (!userData) {
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
