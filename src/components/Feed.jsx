import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";
import axiosInstance from "../utils/axiosInstance";

const Feed = () => {
  const feed = useSelector((store) => store.feed) || []; // Ensure feed is always an array
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1); // Start from page 1
  const limit = 10; // Number of profiles per API call

  useEffect(() => {
    const getFeed = async () => {
      if (feed.length > 1) return; // Prevent extra calls when feed is populated

      try {

        const res = await axiosInstance.get(`/user/feed?page=${pageNumber}&limit=${limit}`, {
          withCredentials: true,
        });

        if (res?.data?.data?.length > 0) {
          dispatch(addFeed(res.data.data)); // Append new users to Redux store
          setPageNumber((prev) => prev + 1); // Increment page only when data is received
        }
      } catch (error) {
        console.error("Error fetching feed:", error);
      }
    };

    getFeed();
  }, [feed.length]); // Depend on feed length only

  return (
    <div className="flex justify-center my-10">
      {feed.length === 0 ? (
        <h1>No more users found in the feed!</h1>
      ) : (
        <UserCard user={feed?.[0] || null} />
      )}
    </div>
  );
};

export default Feed;
