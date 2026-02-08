import { createSlice } from "@reduxjs/toolkit";

const pendingRequestSlice = createSlice({
    name:"pendingRequest",
    initialState:null,
    reducers:{
        addPendingRequest:(state,action)=>{
            return action.payload;
        },
        removePendingRequest:(state,action)=>{
            return null;
        }
    }
});

export const {addPendingRequest,removePendingRequest} =  pendingRequestSlice.actions;
export default pendingRequestSlice.reducer;