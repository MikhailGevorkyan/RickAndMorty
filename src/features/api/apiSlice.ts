import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_BASE_URL } from "../../config";

const baseUrl = REACT_APP_BASE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => "/character",
    }),
    getLocations: builder.query({
      query: () => "/location",
    }),
    getEpisodes: builder.query({
      query: () => "/episode",
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetLocationsQuery,
  useGetEpisodesQuery,
} = apiSlice;
