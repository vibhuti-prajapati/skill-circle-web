import { createSlice } from "@reduxjs/toolkit";

const pendingRequestSlice = createSlice({
  name: "pendingRequest",
  initialState: null,
  reducers: {
    addPendingRequest: (state, action) => {
      return action.payload;
    },
    removePendingRequest: (state, action) => {
      return state?.filter((req) => req._id !== action.payload);
    },
  },
});

export const { addPendingRequest, removePendingRequest } =
  pendingRequestSlice.actions;
export default pendingRequestSlice.reducer;
