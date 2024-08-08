import { createSlice } from '@reduxjs/toolkit';
import { Episode } from '../components/interfaces/projectInterfaces';

const initialState: { episodes: Episode[] } = {
  episodes: [],
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    updateEpisodes: (state, action: { payload: Episode[] }) => {
      state.episodes = action.payload;
    },
  },
});

export const { updateEpisodes } = episodesSlice.actions;

export default episodesSlice.reducer;
