import { useState } from "react";
import UserCard from "./UserCard";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import axiosInstance from "../utils/axiosInstance";
const EditProfile = ({ user }) => {
  const [firstName, setFirstName] = useState(user?.firstName || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [age, setAge] = useState(user?.age || "");
  const [gender, setGender] = useState(user?.gender || "");
  const [photourl, setPhotourl] = useState(user?.photourl || "");
  const [skills, setSkills] = useState(user?.skills || []);
  const [about, setAbout] = useState(user?.about || "");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [showToast, setShowToast] = useState(false);
  const saveProfile = async () => {
    try {
      //Before saving the profile clear the existing errors
      setError("");
      const updatedUser = {
        firstName,
        lastName,
        age,
        gender,
        photourl,
        skills: skills.length > 0 ? skills : [],
        about,
      };
      const res = await axiosInstance.patch("/profile/edit", updatedUser, {
        withCredentials: true,
      });
      dispatch(addUser(res?.data?.user));
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    } catch (error) {
      setError(error?.response?.data);
      console.error(error);
    }
  };
  const handleSkillsChange = (event) => {
    const value = event.target.value;
    const skillArray = value.split(",").map((skill) => skill.trim()); // Ensure no spaces
    setSkills(skillArray);
  };

  return (
    <>
      <div className="flex justify-center my-5">
        <div className="flex justify-center mx-10 ">
          <div className="card w-96 bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center text-xl">
                Edit Profile
              </h2>
              {/* First Name */}
              <label className="form-control w-full">
                <div className="label my-1">
                  <span className="label-text">First Name</span>
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />

                {/* Last Name */}
                <div className="label my-1">
                  <span className="label-text">Last Name</span>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />

                {/* Age */}
                <div className="label my-1">
                  <span className="label-text">Age</span>
                </div>
                <input
                  type="text"
                  placeholder="Age"
                  className="input input-bordered w-full"
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                  required
                />

                {/* Gender */}
                <div className="label my-1">
                  <span className="label-text">Gender</span>
                </div>
                <input
                  type="text"
                  placeholder="Gender"
                  className="input input-bordered w-full"
                  value={gender}
                  onChange={(event) => setGender(event.target.value)}
                  required
                />

                {/* Photo URL */}
                <div className="label my-1">
                  <span className="label-text">Photo URL</span>
                </div>
                <input
                  type="text"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                  value={photourl}
                  onChange={(event) => setPhotourl(event.target.value)}
                  required
                />

                {/* Skills */}
                <div className="label my-1">
                  <span className="label-text">Skills</span>
                </div>
                <input
                  type="text"
                  placeholder="Skills"
                  className="input input-bordered w-full"
                  value={skills.join(",")}
                  onChange={handleSkillsChange
                  }
                  required
                />

                {/* About */}
                <div className="label my-1">
                  <span className="label-text">About</span>
                </div>
                <input
                  type="text"
                  placeholder="About"
                  className="input input-bordered w-full"
                  value={about}
                  onChange={(event) => setAbout(event.target.value)}
                  required
                />
              </label>
              <p className="text-red-500 text-sm mt-2">{error}</p>
              {/* Save Button */}
              <div className="card-actions justify-end mt-4">
                <button onClick={saveProfile} className="btn btn-primary w-1/3">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
        <UserCard
          user={{ firstName, lastName, age, gender, photourl, skills, about }}
        />
      </div>
      {showToast && <div className="toast toast-top toast-center">
        <div className="alert alert-success">
          <span >Profile saved successfully.</span>
        </div>
      </div>}
    </>
  );
};
export default EditProfile;
