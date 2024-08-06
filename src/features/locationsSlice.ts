import { createSlice } from "@reduxjs/toolkit";
import type { Location } from "../components/interfaces/projectInterfaces";

const initialState: { locations: Location[] } = {
  locations: [],
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    updateLocations: (state, action: { payload: Location[] }) => {
      state.locations = action.payload;
    },
  },
});

export const { updateLocations } = locationsSlice.actions;

export default locationsSlice.reducer;
