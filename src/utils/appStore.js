import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import feedReducer from "./feedSlice.js";
import connectionsReducer from "./connectionsSlice.js";
import requestReducer from "./requestSlice.js";
import logoutReducer from "./logoutSlice.js"; // Add logout slice

const rootReducer = (state, action) => {
    if (action.type === "RESET_STORE") {
        return undefined; // Resets the store completely
    }
    return {
        user: userReducer(state?.user, action),
        feed: feedReducer(state?.feed, action),
        connections: connectionsReducer(state?.connections, action),
        request: requestReducer(state?.request, action),
        logout: logoutReducer(state?.logout, action), // Include logout slice
    };
};

const appStore = configureStore({
    reducer: rootReducer,
});

// Action creator to reset store
export const resetStore = () => ({ type: "RESET_STORE" });

export default appStore;
