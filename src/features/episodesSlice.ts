import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  episodes: [],
  error: null,
};

const episodesSlice = createSlice({
  name: "episodes",
  initialState,
  reducers: {
    updateEpisodes: (state, action) => {
      state.episodes = action.payload;
    },
  },
});

export const { updateEpisodes } = episodesSlice.actions;

export default episodesSlice.reducer;
