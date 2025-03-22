import axios from "axios";
import {handleLogout} from "../utils/logoutHandler" // Import logout action
// Create an instance of Axios
const api = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: true, // If using cookies for authentication
});
// Add response interceptor
api.interceptors.response.use(
  (response) => response, // Return response if successful
  (error) => {
    if (error.response && error.response.status === 401) {
       handleLogout();// Dispatch logout action to clear Redux store
    }
    return Promise.reject(error); // Reject the error for further handling
  }
);
export default api;
