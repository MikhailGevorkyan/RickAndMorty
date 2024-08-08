import { Container, Grid } from '@mui/material';
import EpisodesLogo from '../components/logos/EpisodesLogo';
import { FC, useEffect, useState } from 'react';
import LoadMoreButton from '../components/buttons/LoadMoreButton';
import SearchFilter from '../components/SearchFilter';
import { useQuery } from '@apollo/client';
import { GET_EPISODES } from '../service/graphql/queries';
import { Episode } from '../__generated__/graphql';
import {
  renderLoading,
  renderError,
  renderNoResults,
  renderEpisodes,
} from '../components/renderHelpers';

const Episodes: FC = () => {
  const [search, setSearch] = useState('');
  const [pageCounter, setPageCounter] = useState(1);
  const [filtersChanged, setFiltersChanged] = useState(false);

  const { data, loading, error, refetch, fetchMore } = useQuery(GET_EPISODES, {
    variables: {
      name: search,
    },
  });

  const episodes = data?.episodes;

  useEffect(() => {
    if (filtersChanged) {
      setFiltersChanged(false);
    }
  }, [filtersChanged, search, refetch]);

  const handleLoadMore = () => {
    if (episodes?.info?.next) {
      fetchMore({
        variables: {
          page: episodes.info.next,
        },
      }).then(() => {
        setPageCounter(pageCounter + 1);
      });
    }
  };

  const renderContent = () => {
    if (loading) {
      return renderLoading();
    } else if (error) {
      return renderError();
    } else if (episodes && episodes.results && episodes?.results.length > 0) {
      return renderEpisodes(episodes.results as Episode[]);
    } else {
      return renderNoResults(
        'No episodes found matching the selected filters.',
      );
    }
  };

  return (
    <Container
      sx={{
        marginBottom: 13,
      }}
    >
      <EpisodesLogo />
      <SearchFilter
        setSearch={setSearch}
        placeholder="Filter by name or episode (ex. S01)"
        xsWidth="16.5rem"
        smWidth="17.5rem"
        mdWidth="25rem"
      />
      <Grid container gap={6} mt={6} justifyContent="center">
        {renderContent()}
      </Grid>
      {episodes?.info?.next && (
        <LoadMoreButton handleLoadMore={handleLoadMore} />
      )}
    </Container>
  );
};

export default Episodes;
