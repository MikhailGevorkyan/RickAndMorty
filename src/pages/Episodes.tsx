import { Box, Container, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EpisodesLogo from "../components/EpisodesLogo";
import { FC } from "react";
import EpisodeCard from "../components/EpisodeCard";
import { useGetEpisodesQuery } from "../features/api/apiSlice";
import { Button } from "@mui/material";
import LoadMoreButton from "../components/LoadMoreButton";
import SearchFilter from "../components/SearchFilter";

interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

const Episodes: FC = () => {
  const { data, isLoading, error } = useGetEpisodesQuery({});

  if (isLoading) return <p>Loading...</p>;
  if (error && error instanceof Error) {
    console.log(error.message);
  }

  return (
    <Container
      sx={{
        marginBottom: 13,
      }}
    >
      <EpisodesLogo />
      <SearchFilter
        placeholder="Filter by name or episode (ex. S01)"
        xsWidth="17.5rem"
        mdWidth="25rem"
      />

      <Grid container gap={6} mt={6} justifyContent="center">
        {data.results.map((episode: Episode) => (
          <EpisodeCard
            key={episode.id}
            id={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
          />
        ))}
      </Grid>
      <LoadMoreButton />
    </Container>
  );
};

export default Episodes;
