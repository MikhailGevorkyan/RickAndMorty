import { Container, Grid, Typography } from "@mui/material";
import EpisodesLogo from "../components/logos/EpisodesLogo";
import { FC, useEffect, useState } from "react";
import EpisodeCard from "../components/cards/EpisodeCard";
import { useGetEpisodesQuery } from "../features/api/apiSlice";
import LoadMoreButton from "../components/buttons/LoadMoreButton";
import SearchFilter from "../components/SearchFilter";
import type { Episode } from "../components/interfaces/projectInterfaces";

const Episodes: FC = () => {
  const [search, setSearch] = useState("");
  const [pageCounter, setPageCounter] = useState(1);
  const [filtersChanged, setFiltersChanged] = useState(false);

  const {
    data: episodes,
    isLoading,
    error,
  } = useGetEpisodesQuery({
    name: search,
    page: pageCounter,
  });

  useEffect(() => {
    if (filtersChanged) {
      setFiltersChanged(false);
    }
  }, [search]);

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
        xsWidth="17.5rem"
        mdWidth="25rem"
      />

      <Grid container gap={6} mt={6} justifyContent="center">
        {isLoading ? (
          <Typography variant="h4" mt={4}>
            Loading episodes...
          </Typography>
        ) : error ? (
          <Typography variant="h4" mt={4} color="error">
            No episodes were found matching the search request.
          </Typography>
        ) : episodes && episodes.results && episodes.results.length > 0 ? (
          episodes.results.map((episode: Episode) => (
            <EpisodeCard key={episode.id} data={episode} />
          ))
        ) : (
          !isLoading &&
          !error &&
          search && (
            <Typography variant="h4" mt={4}>
              No episodes were found matching the search request.
            </Typography>
          )
        )}
      </Grid>
      <LoadMoreButton
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
      />
    </Container>
  );
};

export default Episodes;
