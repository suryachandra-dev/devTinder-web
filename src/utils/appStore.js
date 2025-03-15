import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import feedReducer from "./feedSlice.js";
import connectionsReducer from "./connectionsSlice.js"
const appStore=configureStore({
    reducer:{
        // add your reducers here
        user:userReducer,
        feed:feedReducer,
        connections:connectionsReducer,
    }
});
export default appStore;