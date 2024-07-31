import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  error: null,
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    updateLocations: (state, action) => {
      state.locations = action.payload;
    },
  },
});

export const { updateLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
