import type { FC } from "react";
import { useParams } from "react-router-dom";
import {
  useGetCharactersByIdQuery,
  useGetEpisodeByIdQuery,
} from "../../features/api/apiSlice";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import GoBackButton from "../../components/buttons/GoBackButton";
import CharacterCard from "../../components/cards/CharacterCard";
import { Character } from "../../components/interfaces/projectInterfaces";
import LoadingIcon from "../../components/logos/LoadingIcon";

const EpisodeDetails: FC = () => {
  const { id } = useParams();
  const {
    data: episode,
    isLoading,
    error,
  } = useGetEpisodeByIdQuery(Number(id) || null);

  const episodeCharacters = episode?.characters.map((character) => {
    const urlParts = character.split("/");
    return urlParts[urlParts.length - 1];
  });

  const { data: characters, isLoading: loadCharacters } =
    useGetCharactersByIdQuery(episodeCharacters || null);

  if (isLoading || loadCharacters) return <LoadingIcon />;
  if (error) return <h1>Error...</h1>;
  if (!episode) return <h1>Empty data</h1>;
  if (!characters) return <h1>Empty characters...</h1>;

  return (
    <Container sx={{ mb: "7rem" }}>
      <Box
        sx={{
          position: "absolute",
          left: { xs: "5%", md: "20%" },
          top: { xs: "8%", md: "10%" },
        }}
      >
        <GoBackButton name="episodes" />
      </Box>
      <Stack
        sx={{
          flexDirection: { sm: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          mt: "2.5rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "2.25rem",
            fontWeight: 400,
            m: "1rem auto 0",
          }}
        >
          {episode.name}
        </Typography>
      </Stack>
      <Stack
        sx={{
          flexDirection: "row",
          mt: "2rem",
          justifyContent: "center",
          textAlign: "start",
          gap: { xs: "3rem", md: "10rem" },
        }}
      >
        <Stack textAlign={"start"}>
          <Typography sx={{ fontWeight: 700 }}>Episode</Typography>
          <Typography
            sx={{ fontWeight: 400, color: "#6E798C", fontSize: "0.875rem" }}
          >
            {episode.episode}
          </Typography>
        </Stack>
        <Stack textAlign={"start"}>
          <Typography sx={{ fontWeight: 700 }}>Date</Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: "rgba(0, 0, 0, 0.6)",
              fontSize: "0.875rem",
            }}
          >
            {episode.air_date}
          </Typography>
        </Stack>
      </Stack>
      <Typography
        variant="h6"
        sx={{
          color: "rgba(142, 142, 147, 1)",
          fontWeight: 500,
          fontSize: "1.25rem",
          mt: "2rem",
          ml: "4.5rem",
          textAlign: "start",
        }}
      >
        Cast
      </Typography>
      <Grid container gap={2} mt={2} justifyContent={"center"}>
        {characters?.map((character: Character) => (
          <CharacterCard key={character.id} data={character} />
        ))}
      </Grid>
    </Container>
  );
};

export default EpisodeDetails;
