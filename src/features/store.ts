import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import charactersReducer from "./charactersSlice";
import locationsReducer from "./locationsSlice";
import episodesReducer from "./episodesSlice";

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
    locations: locationsReducer,
    episodes: episodesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
