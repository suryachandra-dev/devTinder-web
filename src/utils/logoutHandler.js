import { resetStore } from "./appStore";
import store from "./appStore";
import api from "./axiosInterceptor";
import { startLogout, finishLogout } from "./logoutSlice";

export const handleLogout = async (navigate = null) => {
  // Check if logout slice exists and prevent multiple logouts
  const logoutState = store.getState().logout;
  if (!logoutState || logoutState.isLoggingOut) return;
  store.dispatch(startLogout());
  try {
    if (navigate) {
      await api.post("/logout", {});
    }
    store.dispatch(resetStore());
    if (navigate) {
      navigate("/login");
    } else if (!window.location.pathname.includes("/login")) {
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Logout failed:", error);
  } finally {
    store.dispatch(finishLogout());
  }
};
