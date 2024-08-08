/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GetCharacters($page: Int, $name: String, $species: String, $gender: String, $status: String) {\n    characters(page: $page, filter: { name: $name, species: $species, gender: $gender, status: $status }) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        gender\n        image\n      }\n    }\n  }\n':
    types.GetCharactersDocument,
  'query GetEpisodes($page: Int, $name: String) {\n  episodes(page: $page, filter: {name: $name}) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      id\n      name\n      air_date\n      episode\n    }\n  }\n}':
    types.GetEpisodesDocument,
  'query GetLocations($page: Int, $name: String, $type: String, $dimension: String) {\n  locations(page: $page, filter: {name: $name, type: $type, dimension: $dimension}) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      id\n      name\n      type\n      dimension \n    }\n  }\n}':
    types.GetLocationsDocument,
  '\n  query GetCharacterById($trackID: ID!) {\n    character(id: $trackID) {\n      id\n      name\n      gender\n      status\n      species\n      image\n      origin {\n        name\n      }\n      type\n      location {\n        id\n        name\n      }\n      episode {\n        id\n        name\n        air_date\n        episode\n      }\n    }\n  }\n':
    types.GetCharacterByIdDocument,
  '\n  query GetEpisodeById($trackID: ID!) {\n    episode(id: $trackID) {\n      id\n      name\n      air_date\n      episode\n      characters {\n        id\n        name\n        species\n        image\n      }\n    }\n  }\n':
    types.GetEpisodeByIdDocument,
  '\n  query GetLocationById($trackID: ID!) {\n    location(id: $trackID) {\n      id\n      name\n      type\n      dimension\n      residents {\n        id\n        name\n        species\n        image\n      }\n    }\n  }\n':
    types.GetLocationByIdDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCharacters($page: Int, $name: String, $species: String, $gender: String, $status: String) {\n    characters(page: $page, filter: { name: $name, species: $species, gender: $gender, status: $status }) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        gender\n        image\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCharacters($page: Int, $name: String, $species: String, $gender: String, $status: String) {\n    characters(page: $page, filter: { name: $name, species: $species, gender: $gender, status: $status }) {\n      info {\n        count\n        pages\n        next\n        prev\n      }\n      results {\n        id\n        name\n        status\n        species\n        gender\n        image\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetEpisodes($page: Int, $name: String) {\n  episodes(page: $page, filter: {name: $name}) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      id\n      name\n      air_date\n      episode\n    }\n  }\n}',
): (typeof documents)['query GetEpisodes($page: Int, $name: String) {\n  episodes(page: $page, filter: {name: $name}) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      id\n      name\n      air_date\n      episode\n    }\n  }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: 'query GetLocations($page: Int, $name: String, $type: String, $dimension: String) {\n  locations(page: $page, filter: {name: $name, type: $type, dimension: $dimension}) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      id\n      name\n      type\n      dimension \n    }\n  }\n}',
): (typeof documents)['query GetLocations($page: Int, $name: String, $type: String, $dimension: String) {\n  locations(page: $page, filter: {name: $name, type: $type, dimension: $dimension}) {\n    info {\n      count\n      pages\n      next\n      prev\n    }\n    results {\n      id\n      name\n      type\n      dimension \n    }\n  }\n}'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCharacterById($trackID: ID!) {\n    character(id: $trackID) {\n      id\n      name\n      gender\n      status\n      species\n      image\n      origin {\n        name\n      }\n      type\n      location {\n        id\n        name\n      }\n      episode {\n        id\n        name\n        air_date\n        episode\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetCharacterById($trackID: ID!) {\n    character(id: $trackID) {\n      id\n      name\n      gender\n      status\n      species\n      image\n      origin {\n        name\n      }\n      type\n      location {\n        id\n        name\n      }\n      episode {\n        id\n        name\n        air_date\n        episode\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetEpisodeById($trackID: ID!) {\n    episode(id: $trackID) {\n      id\n      name\n      air_date\n      episode\n      characters {\n        id\n        name\n        species\n        image\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetEpisodeById($trackID: ID!) {\n    episode(id: $trackID) {\n      id\n      name\n      air_date\n      episode\n      characters {\n        id\n        name\n        species\n        image\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetLocationById($trackID: ID!) {\n    location(id: $trackID) {\n      id\n      name\n      type\n      dimension\n      residents {\n        id\n        name\n        species\n        image\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetLocationById($trackID: ID!) {\n    location(id: $trackID) {\n      id\n      name\n      type\n      dimension\n      residents {\n        id\n        name\n        species\n        image\n      }\n    }\n  }\n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
