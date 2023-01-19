// Redux
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  posts: [],
  albums: [],
  Id: 0,
  username: ""
};

const userInfoSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers(state, action) {
      state.users = action.payload;
    },
    setPosts(state, action) {
      state.posts = action.payload;
    },
    setAlbums(state, action) {
      state.albums = action.payload;
    },
    setId(state, action) {
      state.Id = action.payload;
    },
    setUsername(state, action) {
      state.username = action.payload;
    },
  },
});

export const { setUsers, setPosts, setAlbums, setId, setUsername} = userInfoSlice.actions;

export default userInfoSlice.reducer;