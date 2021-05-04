import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movie/movieSlice";
import useReducer from "../features/user/userSlice";
export const store = configureStore({
  reducer: {
    movie: movieReducer,
    user: useReducer,
  },
});
