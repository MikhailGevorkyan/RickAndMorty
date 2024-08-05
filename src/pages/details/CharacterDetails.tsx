import { Avatar, Container, Divider, Stack, Typography } from "@mui/material";
import { FC } from "react";
import {
  useGetCharacterByIdQuery,
  useGetEpisodesByIdQuery,
} from "../../features/api/apiSlice";
import { Link, useParams } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import GoBackButton from "../../components/buttons/GoBackButton";
import { Episode } from "../../components/interfaces/projectInterfaces";
import DetailedEpisodeCard from "../../components/cards/DetailedEpisodeCard";

const CharacterDetails: FC = () => {
  const { id } = useParams();
  const {
    data: character,
    isLoading,
    error,
  } = useGetCharacterByIdQuery(Number(id) || null);

  const characterEpisodes = character?.episode.map((ep) => {
    const urlParts = ep.split("/");
    return urlParts[urlParts.length - 1];
  });

  const { data: episodes, isLoading: loadEpisodes } = useGetEpisodesByIdQuery(
    characterEpisodes || null
  );

  if (isLoading || loadEpisodes) return <h1>Loading...</h1>;
  if (error) return <h1>Error...</h1>;
  if (!character) return <h1>Empty character...</h1>;
  if (!episodes) return <h1>Empty episodes...</h1>;

  return (
    <Container sx={{ mb: "7rem" }}>
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-evenly"}
      >
        <GoBackButton name="characters" />
        <Stack>
          <Avatar
            alt={`${character.name} Avatar`}
            src={character.image}
            draggable="false"
            sx={{ width: 350, height: 350, mt: 3, border: "6px solid #e9eff0" }}
          />
          <Typography variant="h1" fontSize={"3rem"} mt={1} fontWeight={400}>
            {character.name}
          </Typography>
        </Stack>
      </Stack>
      <Stack
        mt={5}
        justifyContent={"space-evenly"}
        flexDirection={"row"}
        gap={5}
      >
        <Typography
          variant="h6"
          color={"#8E8E93"}
          fontSize={"1.25rem"}
          fontWeight={500}
          mt={5}
          textAlign={"start"}
        >
          Informations
        </Typography>
        <Typography
          variant="h6"
          color={"#8E8E93"}
          fontSize={"1.25rem"}
          fontWeight={500}
          mt={5}
          ml={28}
          textAlign={"start"}
        >
          Episodes
        </Typography>
      </Stack>
      <Stack mt={3} direction={"row"}>
        <Stack>
          <Stack
            sx={{
              textAlign: "start",
              ml: 30,
            }}
          >
            <Typography
              sx={{
                color: "#081F32",
                fontWeight: 700,
              }}
            >
              Gender
            </Typography>
            <Typography
              sx={{
                color: "#6E798C",
                fontWeight: 400,
                fontSize: "0.825rem",
              }}
            >
              {character.gender}
            </Typography>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              mt: 1,
              mb: 1,
              ml: 30,
              width: "24.625rem",
              height: "1px",
            }}
          />
          <Stack
            sx={{
              textAlign: "start",
              ml: 30,
            }}
          >
            <Typography
              sx={{
                color: "#081F32",
                fontWeight: 700,
              }}
            >
              Status
            </Typography>
            <Typography
              sx={{
                color: "#6E798C",
                fontWeight: 400,
                fontSize: "0.825rem",
              }}
            >
              {character.status}
            </Typography>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              mt: 1,
              mb: 1,
              ml: 30,
              width: "24.625rem",
              height: "1px",
            }}
          />
          <Stack
            sx={{
              textAlign: "start",
              ml: 30,
            }}
          >
            <Typography
              sx={{
                color: "#081F32",
                fontWeight: 700,
              }}
            >
              Specie
            </Typography>
            <Typography
              sx={{
                color: "#6E798C",
                fontWeight: 400,
                fontSize: "0.825rem",
              }}
            >
              {character.species}
            </Typography>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              mt: 1,
              mb: 1,
              ml: 30,
              width: "24.625rem",
              height: "1px",
            }}
          />
          <Stack
            sx={{
              textAlign: "start",
              ml: 30,
            }}
          >
            <Typography
              sx={{
                color: "#081F32",
                fontWeight: 700,
              }}
            >
              Origin
            </Typography>
            <Typography
              sx={{
                color: "#6E798C",
                fontWeight: 400,
                fontSize: "0.825rem",
              }}
            >
              {character.origin.name[0].toUpperCase() +
                character.origin.name.slice(1)}
            </Typography>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              mt: 1,
              mb: 1,
              ml: 30,
              width: "24.625rem",
              height: "1px",
            }}
          />
          <Stack
            sx={{
              textAlign: "start",
              ml: 30,
            }}
          >
            <Typography
              sx={{
                color: "#081F32",
                fontWeight: 700,
              }}
            >
              Type
            </Typography>
            <Typography
              sx={{
                color: "#6E798C",
                fontWeight: 400,
                fontSize: "0.825rem",
              }}
            >
              {!character.type ? "Unknown" : character.type}
            </Typography>
          </Stack>
          <Divider
            variant="middle"
            sx={{
              mt: 1,
              mb: 1,
              ml: 30,
              width: "24.625rem",
              height: "1px",
            }}
          />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            paddingRight={"1rem"}
          >
            <Stack
              sx={{
                textAlign: "start",
                ml: 30,
              }}
            >
              <Typography
                sx={{
                  color: "#081F32",
                  fontWeight: 700,
                }}
              >
                Location
              </Typography>
              <Typography
                sx={{
                  color: "#6E798C",
                  fontWeight: 400,
                  fontSize: "0.825rem",
                }}
              >
                {character.location.name}
              </Typography>
            </Stack>
            <Link
              to={`/location/${character.location.url.split("/").pop()}`}
              style={{ alignSelf: "center" }}
            >
              <IconButton aria-label="link" size="small">
                <ArrowForwardIosIcon fontSize="inherit" />
              </IconButton>
            </Link>
          </Stack>

          <Divider
            variant="middle"
            sx={{
              mt: 1,
              mb: 1,
              ml: 30,
              width: "24.625rem",
              height: "1px",
            }}
          />
        </Stack>
        <Stack
          sx={{
            ml: "12.5rem",
          }}
        >
          <Stack
            sx={{
              textAlign: "start",
              gap: 0.3,
            }}
          >
            {Array.isArray(episodes) ? (
              episodes?.map((episode: Episode) => (
                <DetailedEpisodeCard key={episode.id} data={episode} />
              ))
            ) : (
              <DetailedEpisodeCard data={episodes} />
            )}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
};

export default CharacterDetails;
