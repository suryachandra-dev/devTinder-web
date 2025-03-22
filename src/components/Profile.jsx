import React from 'react'
import EditProfile from './EditProfile'
import { useSelector } from 'react-redux'
const Profile = () => {
  const user=useSelector((store)=>store.user);
  if(!user){
    return null;// Prevents rendering if user is null
  }
  return (
    <div>
      <EditProfile user={user}/>
    </div>
  )
}
export default Profile;
