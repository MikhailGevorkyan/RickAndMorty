import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
};

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    getNextPage: (state, action) => {
      state.characters = action.payload;
    },
  },
});

export const { getNextPage } = charactersSlice.actions;

export default charactersSlice.reducer;
