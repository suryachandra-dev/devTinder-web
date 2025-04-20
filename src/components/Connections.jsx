import { useEffect, useState } from "react";
import { addConnections } from "../utils/connectionsSlice";
import { useDispatch, useSelector } from "react-redux";
import api from "../utils/axiosInterceptor";
import { Link } from "react-router-dom";

const Connections = () => {
  const connections = useSelector((store) => store.connections);
  const dispatch = useDispatch();
  const [expandedIds, setExpandedIds] = useState([]);

  const fetchConnections = async () => {
    try {
      const res = await api.get("/user/connections");
      dispatch(addConnections(res.data.data));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchConnections();
  }, []);

  const toggleExpanded = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  if (!connections) return null;

  if (connections.length === 0) {
    return (
      <h1 className="text-2xl font-bold text-center mt-10">
        No Connections found
      </h1>
    );
  }

  return (
    <div className="text-center my-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Connections</h1>
      <div className="space-y-6">
        {connections.map((connection) => {
          const { firstName, lastName, photourl, _id, about, age, gender } =
            connection;

          const isExpanded = expandedIds.includes(_id);
          const shortAbout =
            about?.length > 250 && !isExpanded
              ? about.substring(0, 250) + "..."
              : about;

          return (
            <div
              key={_id}
              className="flex flex-col md:flex-row items-center md:items-start justify-between border p-5 rounded-2xl shadow-md max-w-4xl mx-auto gap-6"
            >
              {/* Profile Pic */}
              <img
                className="w-32 h-32 object-cover rounded-full"
                src={photourl}
                alt="profile"
              />

              {/* Text Details */}
              <div className="flex-1 text-left">
                <h2 className="text-xl font-bold">
                  {firstName + " " + lastName}
                </h2>
                {age && gender && (
                  <p className="text-gray-500">{age} • {gender}</p>
                )}
                <p className="mt-2">
                  {shortAbout}
                  {about?.length > 250 && (
                    <button
                      onClick={() => toggleExpanded(_id)}
                      className="text-blue-500 ml-1 underline"
                    >
                      {isExpanded ? "View less" : "View more"}
                    </button>
                  )}
                </p>
              </div>

              {/* Chat Button */}
              <Link to={`/chat/${_id}`} >
              <button className="btn btn-outline self-start md:self-center">
                Chat
              </button>
              </Link>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
