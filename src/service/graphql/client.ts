import { ApolloClient } from '@apollo/client';
import { cache } from './cache';
import { REACT_APP_BASE_URL } from '../../config';

export const client = new ApolloClient({
  uri: REACT_APP_BASE_URL,
  cache,
});
