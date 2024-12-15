import { configureStore } from "@reduxjs/toolkit";
import songsReducer from "../songSlice";

const store = configureStore({
  reducer: {
    songs: songsReducer
  }
});

export default store;
