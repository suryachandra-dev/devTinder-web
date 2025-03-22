import { resetStore } from "./appStore"; // Import Redux action
import store from "./appStore"; // Import store
import api from "./axiosInterceptor";
export const handleLogout = async (navigate = null) => {
  try {
    await api.post("/logout", {});
    store.dispatch(resetStore()); // Clear Redux store
    if (navigate) {
      navigate("/login"); // Use navigate if available (React component)
    } else {
        if(!window.location.pathname.includes('/login')){
            window.location.href = "/"; // Otherwise, force redirect (Non-React code)
        }
      
    }
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
