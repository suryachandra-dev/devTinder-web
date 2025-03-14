import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  useEffect(() => {
    const getFeed = async () => {
      try {
        if (!feed) {
          const res = await axios.get(BASE_URL + "/user/feed", {
            withCredentials: true,
          });
          console.log("res: ", res);
          dispatch(addFeed(res?.data?.data));
        }
      } catch (error) {
        console.error(error);
      }
    };
    getFeed();
  }, []);

  return <div className="flex justify-center my-10"><UserCard user={feed?.[0] || null}/></div>;
};
export default Feed;
