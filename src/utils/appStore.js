import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import feedReducer from "./feedSlice.js";
import connectionsReducer from "./connectionsSlice.js";
import requestReducer from "./requestSlice.js";

// Root reducer object
const rootReducer = {
  user: userReducer,
  feed: feedReducer,
  connections: connectionsReducer,
  request: requestReducer
};

// Create the Redux store
const appStore = configureStore({
  reducer: (state, action) => {
    if (action.type === "RESET_STORE") {
      return {
        user: null,
        feed: null,
        connections: null,
        request: null
      };
    }
    return {
      user: userReducer(state?.user, action),
      feed: feedReducer(state?.feed, action),
      connections: connectionsReducer(state?.connections, action),
      request: requestReducer(state?.request, action)
    };
  }
});

// Action creator to reset store
export const resetStore = () => ({ type: "RESET_STORE" });

export default appStore;
