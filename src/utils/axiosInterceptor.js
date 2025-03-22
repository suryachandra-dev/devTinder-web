import axios from "axios";
import {handleLogout} from "../utils/logoutHandler" // Import logout action
import { BASE_URL } from "./constants";
// Create an instance of Axios
const api = axios.create({
  baseURL: BASE_URL,
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
