import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { handleLogout } from "./logoutHandler";
import { useEffect } from "react";

const ProtectedRoute = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user); // Assuming userData is stored in Redux
  useEffect(()=>{
    if(!user){
      handleLogout(navigate);
    }
  },[user]);
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default ProtectedRoute;
