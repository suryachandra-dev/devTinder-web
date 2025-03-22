import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addRequests, removeRequest } from "../utils/requestSlice";
import { removeUserFromFeed } from "../utils/feedSlice";
import api from "../utils/axiosInterceptor";
const Requests = () => {
  const requests = useSelector((store) => store.request);
  const dispatch = useDispatch();
  const fetchRequests = async () => {
    try {
      const res = await api.get("/user/requests/received", {
        withCredentials: true,
      });
      dispatch(addRequests(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };
  const reviewRequest = async (requestStatus, connectionRequestId,fromUserId) => {
    try {
      const res = await api.post(
         `/request/review/${requestStatus}/${connectionRequestId}`,
        {}
      );
      if(res.status===200){
        dispatch(removeRequest(connectionRequestId));
        dispatch(removeUserFromFeed(fromUserId));
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRequests();
  }, []);
  if (!requests || requests.length === 0) {
    return (
      <div className="text-2xl font-bold text-center mt-10">
        No requests found
      </div>
    );
  }
  return (
    <div className="text-center my-10 px-4">
      <h1 className="text-2xl font-bold text-center">Requests</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {requests.map((request) => {
            const {_id}=request;
            const fromUserId=request.fromUserId._id;
          const { firstName, lastName, photourl, about, age, gender } =
            request.fromUserId;
          return (
            <div
              key={_id}
              className="flex flex-col sm:flex-row items-center border p-4 rounded-2xl shadow-md max-w-lg w-full sm:w-1/2 lg:w-1/3 bg-white"
            >
              {/* Image */}
              <img
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
                src={photourl}
                alt="photo"
              />
              {/* Text Content */}
              <div className="flex flex-col ml-4 text-left flex-1">
                <h1 className="font-bold text-lg text-gray-900">
                  {firstName + " " + lastName}
                </h1>
                {age && gender && (
                  <p className="text-sm text-gray-600">
                    {age} | {gender}
                  </p>
                )}
                <p className="text-sm text-gray-700 mt-1">{about}</p>
              </div>
              {/* Buttons */}
              <div className="flex flex-col ml-4 mt-3 sm:mt-0">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
                  onClick={()=>reviewRequest("accepted", _id,fromUserId)}
                >
                  Accept
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-md mt-2 hover:bg-red-600 transition"
                  onClick={()=>reviewRequest("rejected", _id,fromUserId)}
                >
                  Reject
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Requests;
