import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeFeed: (state, action) => {
      return null;
    },
    removeFeedUser: (state, action) => {
      if (!state) return state;
      return state.filter((user) => user._id !== action.payload);
    },
  },
});
export const { addFeed, removeFeed,removeFeedUser } = feedSlice.actions;
export default feedSlice.reducer;
