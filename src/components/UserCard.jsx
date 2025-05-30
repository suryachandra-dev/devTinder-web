import { removeUserFromFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";
import api from "../utils/axiosInterceptor";
const UserCard = ({user} ) => {//the recived prop will be like this {user:{...}}
    const {photourl, about,gender,firstName,lastName,age,skills,_id} = user || {};
    const dispatch=useDispatch();
    const handleSendRequest=async (requestMessage,toUserId)=>{
      try{
        const res=await api.post(`/request/send/${requestMessage}/${toUserId}`,{});
        // The id is to whom we are sending the request
        if(res.status===200){
          dispatch(removeUserFromFeed(toUserId));
        }
      }catch(error){
        console.error(error);
    }
  }
  if(!user) return <h1>No users in the feed</h1>;
  return (
    <div className="card bg-base-300 w-96 shadow-sm">
      <figure>
        <img src={user?.photourl} alt="User Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {age && gender && <p>{gender + " " + age + " years old"}</p>}
        {about && <p>{about}</p>}
        <div className="card-actions justify-center my-4">
          <button onClick={() => handleSendRequest("ignored", _id)} className="btn btn-primary">Ignore </button>
          <button onClick={() => handleSendRequest("interested", _id)} className="btn btn-secondary">Interested </button>
        </div>
      </div>
    </div>
  );
};
export default UserCard;
