import appStore, { resetStore } from "./appStore.js";
import axios from "axios";
import {BASE_URL} from "./constants.js"
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      // Reset Redux store when user is unauthorized
      appStore.dispatch(resetStore());

      // Redirect user to login page
    //   window.location.href = "/login";
    // Redirect to login page only if not already on login
    if (!window.location.pathname.includes("/login")) {
        window.location.href = "api/login";
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
