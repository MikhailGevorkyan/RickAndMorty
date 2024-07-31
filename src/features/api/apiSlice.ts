import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.BASE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: () => "/characters",
    }),
    getLocations: builder.query({
      query: () => "/locations",
    }),
    getEpisodes: builder.query({
      query: () => "/episodes",
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetLocationsQuery,
  useGetEpisodesQuery,
} = apiSlice;
