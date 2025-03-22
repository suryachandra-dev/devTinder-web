import { createSlice } from "@reduxjs/toolkit";
const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        }
        ,
        removeUserFromFeed: (state, action) => {
            if (!state || !Array.isArray(state)) return []; // Handle undefined or invalid state
        
            const updatedUsersFeed = state.filter((user) => user._id !== action.payload);
            return updatedUsersFeed ?? []; // Ensure it always returns an array
        }
        
    }
});
export const {addFeed,removeUserFromFeed} = feedSlice.actions;
export default feedSlice.reducer;