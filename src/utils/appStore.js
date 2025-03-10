import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
const appStore=configureStore({
    reducer:{
        // add your reducers here
        user:userReducer,
    }
});
export default appStore;