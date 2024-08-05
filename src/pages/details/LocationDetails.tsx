import { useParams } from "react-router-dom";
import {
  useGetCharactersByIdQuery,
  useGetLocationByIdQuery,
} from "../../features/api/apiSlice";
import { Container, Grid, Stack, Typography } from "@mui/material";
import GoBackButton from "../../components/buttons/GoBackButton";
import { Character } from "../../components/interfaces/projectInterfaces";
import CharacterCard from "../../components/cards/CharacterCard";
import { FC } from "react";

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

  if (isLoading || loadCharacters) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  if (!location) return <h1>Empty location...</h1>;
  if (!characters) return <h1>Empty characters...</h1>;

  return (
    <Container sx={{ mb: "7rem" }}>
      <Stack
        direction={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        mt={"2rem"}
        sx={{}}
      >
        <GoBackButton name="locations" />
        <Typography
          variant="h1"
          sx={{
            mt: "2rem",
            fontSize: "2.25rem",
            fontWeight: 400,
            m: "0 auto",
          }}
        >
          {location.name}
        </Typography>
      </Stack>

      <Stack
        mt={"2rem"}
        direction={"row"}
        justifyContent={"center"}
        textAlign={"start"}
        gap={"13rem"}
        mr={"5rem"}
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
        {Array.isArray(characters) ? (
          <>
            {characters?.map((character: Character) => (
              <CharacterCard key={character.id} data={character} />
            ))}
          </>
        ) : (
          <CharacterCard data={characters} />
        )}
      </Grid>
    </Container>
  );
};

export default LocationDetails;
