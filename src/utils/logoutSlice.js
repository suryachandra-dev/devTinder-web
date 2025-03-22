import { createSlice } from "@reduxjs/toolkit";

const logoutSlice = createSlice({
  name: "logout",
  initialState: { isLoggingOut: false },
  reducers: {
    startLogout: (state) => {
      state.isLoggingOut = true; // Prevent multiple logouts
    },
    finishLogout: (state) => {
      state.isLoggingOut = false; // Reset after logout
    },
  },
});

export const { startLogout, finishLogout } = logoutSlice.actions;
export default logoutSlice.reducer;
