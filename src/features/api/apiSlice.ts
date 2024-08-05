import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_BASE_URL } from "../../config";
import { updateCharacters } from "../charactersSlice";
import { updateLocations } from "../locationsSlice";
import { updateEpisodes } from "../episodesSlice";
import type {
  Character,
  Episode,
} from "../../components/interfaces/projectInterfaces";
import type { Location } from "../../components/interfaces/projectInterfaces";

const baseUrl = REACT_APP_BASE_URL;

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getCharacters: builder.query({
      query: ({
        name,
        page = 1,
        species,
        gender,
        status,
      }: {
        name: string;
        page: number;
        species: string;
        gender: string;
        status: string;
      }) => {
        const queryParams: {
          page: number;
          name: string;
          species?: string;
          gender?: string;
          status?: string;
        } = {
          page,
          name,
        };

        if (species) {
          queryParams.species = species;
        }

        if (gender) {
          queryParams.gender = gender;
        }

        if (status) {
          queryParams.status = status;
        }

        return {
          url: `/character/`,
          method: "GET",
          params: queryParams,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const data = result.data;
          dispatch(updateCharacters(data.results));
        } catch (err) {
          console.error("Error in query fulfillment:", err);
        }
      },
    }),
    getLocations: builder.query({
      // query: ({ name, page = 1 }: { name: string; page: number }) =>
      //   `/location/?page=${page}&name=${name}`,
      query: ({
        name,
        page = 1,
        type,
        dimension,
      }: {
        name: string;
        page: number;
        type: string;
        dimension: string;
      }) => {
        const queryParams: {
          page: number;
          name: string;
          type?: string;
          dimension?: string;
        } = {
          page,
          name,
        };

        if (type) {
          queryParams.type = type;
        }

        if (dimension) {
          queryParams.dimension = dimension;
        }

        return {
          url: `/location/`,
          method: "GET",
          params: queryParams,
        };
      },
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const data = result.data;
          dispatch(updateLocations(data));
        } catch (err) {
          console.error("Error in query fulfillment:", err);
        }
      },
    }),
    getEpisodes: builder.query({
      query: ({ name, page = 1 }: { name: string; page: number }) =>
        `/episode/?page=${page}&name=${name}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
      async onQueryStarted(_arg, { dispatch, queryFulfilled }) {
        try {
          const result = await queryFulfilled;
          const data = result.data;
          dispatch(updateEpisodes(data));
        } catch (err) {
          console.error("Error in query fulfillment:", err);
        }
      },
    }),
    getCharacterById: builder.query<Character, number | null>({
      query: (id) => `/character/${id}`,
    }),
    getCharactersById: builder.query<Character[], string[] | null>({
      query: (id) => `/character/${id}`,
    }),
    getLocationById: builder.query<Location, number | null>({
      query: (id) => `/location/${id}`,
    }),
    getEpisodeById: builder.query<Episode, number | null>({
      query: (id) => `/episode/${id}`,
    }),
    getEpisodesById: builder.query<Episode[], string[] | null>({
      query: (id) => `/episode/${id}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetLocationsQuery,
  useGetEpisodesQuery,
  useGetCharacterByIdQuery,
  useGetLocationByIdQuery,
  useGetEpisodeByIdQuery,
  useGetCharactersByIdQuery,
  useGetEpisodesByIdQuery,
} = apiSlice;
