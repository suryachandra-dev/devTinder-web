import { createSlice } from "@reduxjs/toolkit";

const feedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload;
        }
        ,
        removeFeed:(state,action)=>{
            return null;
        },
        updateFeed:(state,action)=>{
            return state.map((item)=>item.id===action.payload.id?action.payload:item)
        },
        clearFeed:(state,action)=>{
            return [];
        },
        likeFeed:(state,action)=>{
            return state.map((item)=>item.id===action.payload.id?action.payload:item)
        },
        dislikeFeed:(state,action)=>{
            return state.map((item)=>item.id===action.payload.id?action.payload:item)
        },

    }
});
export const {addFeed,removeFeed,updateFeed,clearFeed,likeFeed,dislikeFeed} = feedSlice.actions;
export default feedSlice.reducer;