import { useParams } from "react-router-dom";
import {
  useGetCharactersByIdQuery,
  useGetLocationByIdQuery,
} from "../../features/api/apiSlice";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import GoBackButton from "../../components/buttons/GoBackButton";
import { Character } from "../../components/interfaces/projectInterfaces";
import CharacterCard from "../../components/cards/CharacterCard";
import { FC } from "react";
import LoadingIcon from "../../components/logos/LoadingIcon";

const LocationDetails: FC = () => {
  const { id } = useParams();

  const {
    data: location,
    isLoading,
    error,
  } = useGetLocationByIdQuery(Number(id) || null);

  const locationResidents = location?.residents.map((resident) => {
    const urlParts = resident.split("/");
    return urlParts[urlParts.length - 1];
  });

  const { data: characters, isLoading: loadCharacters } =
    useGetCharactersByIdQuery(locationResidents || null);

  if (isLoading || loadCharacters) return <LoadingIcon />;
  if (error) return <h1>Error...</h1>;
  if (!location) return <h1>Empty location...</h1>;
  if (!characters) return <h1>Empty characters...</h1>;

  console.log(Array.isArray(characters));
  console.log(!characters.length);
  console.log(location);

  return (
    <Container sx={{ mb: "7rem" }}>
      <Box
        sx={{
          position: "absolute",
          left: { xs: "5%", md: "20%" },
          top: { xs: "8%", md: "10%" },
        }}
      >
        <GoBackButton name="locations" />
      </Box>
      <Stack
        sx={{
          flexDirection: { sm: "row" },
          justifyContent: "space-around",
          alignItems: "center",
          mt: "3rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            mt: "2rem",
            fontSize: "2.25rem",
            fontWeight: 400,
            m: "1rem auto auto",
          }}
        >
          {location.name}
        </Typography>
      </Stack>

      <Stack
        sx={{
          mt: "2rem",
          flexDirection: "row",
          justifyContent: "center",
          textAlign: "start",
          gap: { xs: "3rem", md: "10rem" },
        }}
      >
        <Stack>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            Type
          </Typography>
          <Typography
            sx={{ fontWeight: 400, color: "#6E798C", fontSize: "0.875rem" }}
          >
            {location.type}
          </Typography>
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontWeight: 700,
            }}
          >
            Dimension
          </Typography>
          <Typography
            sx={{ fontWeight: 400, color: "#6E798C", fontSize: "0.875rem" }}
          >
            {location.dimension}
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
        Residents
      </Typography>
      <Grid container gap={2} mt={2} justifyContent={"center"}>
        {!location.residents.length ? (
          <Typography variant="h4" fontWeight={400}>
            No residents in this location.
          </Typography>
        ) : Array.isArray(characters) ? (
          characters?.map((character: Character) => (
            <CharacterCard key={character.id} data={character} />
          ))
        ) : (
          <CharacterCard data={characters} />
        )}
      </Grid>
    </Container>
  );
};

export default LocationDetails;
