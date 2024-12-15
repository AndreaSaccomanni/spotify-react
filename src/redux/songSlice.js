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
    },
    setSelectedSong: (state, action) => {
      state.selectedSong = action.payload; // Impostiamo la canzone selezionata
    }
  }
});

export const { setSongsForSection, setSelectedSong } = songSlice.actions;
export default songSlice.reducer;
