import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import api from "../utils/axiosInterceptor";
import { useNavigate } from "react-router-dom";
const Feed = () => {
  const navigate = useNavigate();
  const feed = useSelector((store) => store.feed) || []; // Ensure feed is always an array
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1); // Start from page 1
  const limit = 10; // Number of profiles per API call
  useEffect(() => {
    const getFeed = async () => {
      if (feed.length > 1) return; // Prevent extra calls when feed is populated
      try {
        console.log(`Fetching page ${pageNumber} with limit ${limit}`);
        const res = await api.get(`/user/feed?page=${pageNumber}&limit=${limit}`);
        if (res?.data?.data?.length > 0) {
          dispatch(addFeed(res.data.data)); // Append new users to Redux store
          setPageNumber((prev) => prev + 1); // Increment page only when data is received
        }
      } catch (error) {
        if(!window.location.pathname.includes('/login')){
          // user is not authenticated,Please Login
         navigate('/login');
       }
        console.error("Error fetching feed:", error);
      }
    };
    getFeed();
  }, [feed.length]); // Depend on feed length only
  return (
    <div className="flex justify-center my-10">
      {feed.length === 0 ? (
        <h1 className="text-2xl font-bold text-center ">No more users found in the feed!</h1>
      ) : (
        <UserCard user={feed?.[0] || null} />
      )}
    </div>
  );
};
export default Feed;
