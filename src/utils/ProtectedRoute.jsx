import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleLogout } from "./logoutHandler";
import { useEffect, useState } from "react";
import api from "./axiosInterceptor";
import Cookies from "js-cookie";
import { addUser } from "./userSlice";

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user); // Assuming userData is stored in Redux
  const [loading, setLoading] = useState(true); // Loading state for the first render

  useEffect(() => {
    const token = Cookies.get("authToken"); // Check if token exists in cookie
    console.log('token: ', token);

    if (!user && token) {
      // If no user in Redux but a valid token exists, fetch user data
      const fetchUserData = async () => {
        try {
          const response = await api.get("/profile/view"); // Adjust API endpoint
          dispatch(addUser(response?.data)); // Store user data in Redux
        } catch (error) {
          console.error("Failed to fetch user data:", error);
          handleLogout(navigate); // Logout if user data fetch fails
        } finally {
          setLoading(false); // Stop loading after fetching user data or on error
        }
      };
      fetchUserData();
    } else {
      setLoading(false); // Stop loading if the user is already available in Redux
    }
  }, [user, dispatch, navigate]);

  // If we're still loading (e.g., waiting for API call), don't render the page
  if (loading) {
    return <div>Loading...</div>; // Or you can display a spinner, etc.
  }

  // If no user is found, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Render the protected routes if the user is authenticated
};

export default ProtectedRoute;
