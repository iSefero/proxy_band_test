// Redux
import { configureStore } from '@reduxjs/toolkit';
import user from './slices/usersInfoSlice';


export const store = configureStore({
  reducer: {
    user,
  },
});