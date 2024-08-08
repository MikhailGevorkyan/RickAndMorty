import { InMemoryCache } from '@apollo/client';

export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        characters: {
          keyArgs: ['filter'],
          merge(existing = { results: [] }, incoming) {
            return {
              ...incoming,
              results: [...(existing.results || []), ...incoming.results],
            };
          },
        },
        locations: {
          keyArgs: ['filter'],
          merge(existing = { results: [] }, incoming) {
            return {
              ...incoming,
              results: [...(existing.results || []), ...incoming.results],
            };
          },
        },
        episodes: {
          keyArgs: ['filter'],
          merge(existing = { results: [] }, incoming) {
            return {
              ...incoming,
              results: [...(existing.results || []), ...incoming.results],
            };
          },
        },
      },
    },
  },
});
