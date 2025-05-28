import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setPosts: (state, action) => {
        state.posts = action.payload.posts;
    }
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = userSlice.actions;

export default userSlice.reducer;
