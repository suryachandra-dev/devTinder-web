import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import feedReducer from "./feedSlice.js";
import connectionsReducer from "./connectionsSlice.js";
import requestReducer from "./requestSlice.js"
const appStore=configureStore({
    reducer:{
        // add your reducers here
        user:userReducer,
        feed:feedReducer,
        connections:connectionsReducer,
        request:requestReducer
    }
});
export default appStore;