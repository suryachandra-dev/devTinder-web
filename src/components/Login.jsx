import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const [emailId, setEmailId] = useState("rahul@gmail.com");
  const [password, setPassword] = useState("Rahul@123");
  const [error,setError]=useState("");
  const dispatch = useDispatch();
  const handleLogin = async () => {
    try {
      const res = await axios.post(
        `${BASE_URL}/login`,
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
      console.log(res);
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  };
  return (
    <div className="flex justify-center my-10">
      <div className="card w-96 bg-base-200 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center text-xl">Login</h2>

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
            <button className="btn btn-primary w-1/4" onClick={handleLogin}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
