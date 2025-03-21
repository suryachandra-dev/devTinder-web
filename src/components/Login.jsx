import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";

const Login = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const [isLogin, setIsLogin] = useState(true);
  const handleLogin = async () => {
    try {
      const res = await axiosInstance.post(
        `/login`,
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      /*   🔹 What Happens Without { withCredentials: true }?
      If you don't include { withCredentials: true } in your Axios request:
      The browser won’t send cookies (e.g., no session tokens).
      The browser won’t store response cookies (e.g., your backend might set Set-Cookie, but the cookie won’t be stored).
      If you rely on authentication using cookies, your API requests will fail.*/
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  };
  const handleSignUp = async () => {
    try {
      const res = await axiosInstance.post("/signup", { firstName, lastName, emailId, password }, { withCredentials: true }
      );
      dispatch(addUser(res?.data?.data));
      navigate("/profile");
    } catch (error) {
      setError(error?.response?.data?.error || "Something went wrong");
      console.error(error);
    }
  }
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  }
  return (
    <div className="flex justify-center my-10">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-xl">{isLogin ? "Login" : "Sign Up"}</h2>
          {/* First Name Input */}
          {!isLogin && <label className="form-control w-full">
            <div className="label my-1">
              <span className="label-text">First Name</span>
            </div>
            <input
              type="email"
              placeholder="First Name"
              className="input input-bordered w-full"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </label>}

          {/* Last Name Input */}
          {!isLogin && <label className="form-control w-full">
            <div className="label my-1">
              <span className="label-text">Last Name</span>
            </div>
            <input
              type="email"
              placeholder="Last Name"
              className="input input-bordered w-full"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </label>}

          {/* Email Input */}
          <label className="form-control w-full">
            <div className="label my-1">
              <span className="label-text">Email ID</span>
            </div>
            <input
              type="email"
              placeholder="mail@site.com"
              className="input input-bordered w-full"
              value={emailId}
              onChange={(event) => setEmailId(event.target.value)}
              required
            />
          </label>

          {/* Password Input */}
          <label className="form-control w-full mt-3">
            <div className="label my-1">
              <span className="label-text">Password</span>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              value={password}
              onChange={() => setPassword(event.target.value)}
              required
              minLength="8"
            />
          </label>

          {/* Login Button */}
          <p className="text-red-500">{error}</p>
          <div className="card-actions justify-center mt-4">
            <button className="btn btn-primary w-1/4" onClick={isLogin ? handleLogin : handleSignUp}>
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
          <p onClick={toggleLogin} className="text-center text-blue-500 cursor-pointer mt-3">{isLogin ? "New user? SignUp here" : "Existing User? Login here"}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
