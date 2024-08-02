import {
  createApi,
  fetchBaseQuery,
  defaultSerializeQueryArgs,
} from "@reduxjs/toolkit/query/react";
import { REACT_APP_BASE_URL } from "../../config";
import { updateCharacters } from "../charactersSlice";

const baseUrl = REACT_APP_BASE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({ name, page = 1 }: { name: string; page: number }) =>
        `/character/?page=${page}&name=${name}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      // merge: (currentCache, newItems) => {
      //   console.log(currentCache);
      //   currentCache.push(...newItems);
      // },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        const result = await queryFulfilled;
        const data = result.data;

        dispatch(updateCharacters(data.news));
      },
    }),
    getLocations: builder.query({
      query: ({ name, page = 1 }: { name: string; page: number }) =>
        `/location/?page=${page}&name=${name}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getEpisodes: builder.query({
      query: ({ name, page = 1 }: { name: string; page: number }) =>
        `/episodes/?page=${page}&name=${name}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      // Always merge incoming data to the cache entry
      merge: (currentCache, newItems) => {
        currentCache.push(...newItems);
      },
      // Refetch when the page arg changes
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetLocationsQuery,
  useGetEpisodesQuery,
} = apiSlice;
