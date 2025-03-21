import { useEffect } from "react";
import { addConnections } from "../utils/connectionsSlice";
import { useDispatch, useSelector } from "react-redux";
import axiosInstance from "../utils/axiosInstance";
const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const fetchConnections = async () => {
    try {
      const res = await axiosInstance.get("user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    //fetch connections
    fetchConnections();
  }, []);
  if (!connections) {
    return null;
  }
  if (connections.length === 0) {
    return <h1 className="text-2xl font-bold text-center">No Connections found</h1>
  }
  return (
    <div className="text-center my-10">
      <h1 className="text-2xl font-bold text-center">Connections</h1>
      {connections.map((connection) => {
        const { firstName, lastName, photourl, _id, about, age, gender } = connection;
        return (
          <div key={_id} className="flex m-5 items-start border p-4 rounded-2xl shadow-md max-w-1/2 mx-auto">
            {/* Image */}
            <img className="w-40 h-40" src={photourl} alt="photo" />

            {/* Text Content */}
            <div className="flex flex-col ml-5">
              <h1 className="font-bold">{firstName + " " + lastName}</h1>
              {age && gender && <p>{age} {gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );

};

export default Connections;
