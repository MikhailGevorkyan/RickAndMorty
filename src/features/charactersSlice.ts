import { createSlice } from '@reduxjs/toolkit';
import { Character } from '../components/interfaces/projectInterfaces';

const initialState: { characters: Character[] } = {
  characters: [],
};

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    updateCharacters: (state, action: { payload: Character[] }) => {
      state.characters = action.payload;
    },
  },
});

export const { updateCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
