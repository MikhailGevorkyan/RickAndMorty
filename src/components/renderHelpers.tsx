import { Typography } from '@mui/material';
import LoadingIcon from '../components/logos/LoadingIcon';
import CharacterCard from '../components/cards/CharacterCard';
import LocationCard from '../components/cards/LocationCard';
import EpisodeCard from '../components/cards/EpisodeCard';
import { Character, Location, Episode } from '../__generated__/graphql';

export const renderLoading = () => <LoadingIcon />;

export const renderError = () => (
  <Typography variant="h4" mt={4} color="error">
    An error has occured.
  </Typography>
);

export const renderNoResults = (message: string) => (
  <Typography variant="h4" mt={4}>
    {message}
  </Typography>
);

export const renderCharacters = (characters: Character[]) =>
  characters.map(
    (character) =>
      character && <CharacterCard key={character.id} character={character} />,
  );

export const renderLocations = (locations: Location[]) =>
  locations.map(
    (location) =>
      location && <LocationCard key={location.id} location={location} />,
  );

export const renderEpisodes = (episodes: Episode[]) =>
  episodes.map(
    (episode) => episode && <EpisodeCard key={episode.id} episode={episode} />,
  );
