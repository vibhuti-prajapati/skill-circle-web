import { createSlice } from "@reduxjs/toolkit";

const friendSlice = createSlice({
  name: "friend",
  initialState: null,
  reducers: {
    addFriend: (state, action) => {
      return action.payload;
    },
    removeFriend: (state, action) => {
      return null;
    },
    addOneFriend: (state, action) => {
      if (!state) return [action.payload];
      state.push(action.payload);
    },
  },
});
export const { addFriend, addOneFriend } = friendSlice.actions;
export default friendSlice.reducer;
