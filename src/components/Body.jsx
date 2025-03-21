import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import axiosInstance from "../utils/axiosInstance";
const Body = () => {
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const fetchUser = async () => {
    try {
      const user = await axiosInstance.get("profile/view", { withCredentials: true });
      dispatch(addUser(user.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    if (!userData) {
      fetchUser();
    }
  }, []);
  return (
    <div>
      <NavBar />
      <Outlet /> {/* Outlet is a placeholder for the child routes */}
      <Footer />
    </div>
  );
};

export default Body;
