import { createSlice } from "@reduxjs/toolkit";
const requestSlice=createSlice({
    name:"request",
    initialState:null,
    reducers:{
        addRequests:(state,action)=>{
            return action.payload;
        },
        removeRequest:(state,action)=>{
            const updatedRequests=state.filter((request)=>request._id!==action.payload);
            return updatedRequests;
        }
    }
});
export const {addRequests,removeRequest}=requestSlice.actions;
export default requestSlice.reducer;