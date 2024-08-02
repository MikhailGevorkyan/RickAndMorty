import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    updateCharacters: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { updateCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
