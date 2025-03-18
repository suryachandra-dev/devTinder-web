// import axios from "axios";
// import React, { useEffect ,useState} from "react";
// import { BASE_URL } from "../utils/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addFeed } from "../utils/feedSlice";
// import UserCard from "./UserCard";

// const Feed = () => {
//   const feed = useSelector((store) => store.feed);
//   const [pageNumber, setPageNumber] = useState(0);
//   const [limit, setLimit] = useState(2);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const getFeed = async () => {
//       try {
//         if (!feed || feed?.length <= 0) {
//           setPageNumber((prev) => prev + 1);
//           const res = await axios.get(BASE_URL + `/user/feed?page=${pageNumber}&limit=${limit}`, {
//             withCredentials: true,
//           });
//           console.log("res: ", res);
//           dispatch(addFeed(res?.data?.data));
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     getFeed();
//   }, [feed?.length<=0 ]);

//   return <div className="flex justify-center my-10"><UserCard user={feed?.[0] || null}/></div>;
// };
// export default Feed;


import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed) || []; // Ensure feed is always an array
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1); // Start from page 1
  const limit = 2; // Number of profiles per API call

  useEffect(() => {
    const getFeed = async () => {
      if (feed.length > 0) return; // Prevent extra calls when feed is populated

      try {
        console.log(`Fetching page ${pageNumber} with limit ${limit}`);
        
        const res = await axios.get(`${BASE_URL}/user/feed?page=${pageNumber}&limit=${limit}`, {
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
