// redux/songSlice.js
import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "songs",
  initialState: {
    sections: {}
  },
  reducers: {
    setSongsForSection: (state, action) => {
      const { sectionId, songs } = action.payload;
      state.sections[sectionId] = songs;
    }
  }
});

export const { setSongsForSection } = songSlice.actions;
export default songSlice.reducer;
