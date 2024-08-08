import { gql } from '../../__generated__';
import { gql as gqlC } from '@apollo/client';

export const GET_CHARACTERS = gqlC(`
  query GetCharacters($page: Int, $name: String, $species: String, $gender: String, $status: String) {
    characters(page: $page, filter: { name: $name, species: $species, gender: $gender, status: $status }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        species
        gender
        image
      }
    }
  }
`);

export const GET_EPISODES = gql(`query GetEpisodes($page: Int, $name: String) {
  episodes(page: $page, filter: {name: $name}) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      air_date
      episode
    }
  }
}`);

export const GET_LOCATIONS =
  gql(`query GetLocations($page: Int, $name: String, $type: String, $dimension: String) {
  locations(page: $page, filter: {name: $name, type: $type, dimension: $dimension}) {
    info {
      count
      pages
      next
      prev
    }
    results {
      id
      name
      type
      dimension 
    }
  }
}`);

export const GET_CHARACTER_BY_ID = gqlC(`
  query GetCharacterById($trackID: ID!) {
    character(id: $trackID) {
      id
      name
      gender
      status
      species
      image
      origin {
        name
      }
      type
      location {
        id
        name
      }
      episode {
        id
        name
        air_date
        episode
      }
    }
  }
`);

export const GET_EPISODE_BY_ID = gql(`
  query GetEpisodeById($trackID: ID!) {
    episode(id: $trackID) {
      id
      name
      air_date
      episode
      characters {
        id
        name
        species
        image
      }
    }
  }
`);

export const GET_LOCATION_BY_ID = gql(`
  query GetLocationById($trackID: ID!) {
    location(id: $trackID) {
      id
      name
      type
      dimension
      residents {
        id
        name
        species
        image
      }
    }
  }
`);
