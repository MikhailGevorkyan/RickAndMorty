import {
  Avatar,
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
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
import LoadingIcon from "../../components/logos/LoadingIcon";

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

  if (isLoading || loadEpisodes) return <LoadingIcon />;
  if (error) return <h1>Error...</h1>;
  if (!character) return <h1>Empty character...</h1>;
  if (!episodes) return <h1>Empty episodes...</h1>;

  return (
    <Container sx={{ mb: "7rem" }}>
      <Box
        sx={{
          position: "absolute",
          left: { xs: "5%", md: "20%" },
          top: { xs: "8%", md: "10%" },
        }}
      >
        <GoBackButton name="characters" />
      </Box>

      <Stack
        sx={{
          flexDirection: { md: "row" },
          alignItems: "center",
          justifyContent: "center",
          mt: "2rem",
        }}
      >
        <Stack>
          <Avatar
            alt={`${character.name} Avatar`}
            src={character.image}
            draggable="false"
            sx={{
              width: { xs: 148, md: 350 },
              height: { xs: 148, md: 350 },
              mt: 3,
              border: "6px solid #e9eff0",
            }}
          />
          <Typography
            variant="h1"
            fontSize={{ xs: "2rem", md: "3rem" }}
            mt={1}
            fontWeight={400}
          >
            {character.name}
          </Typography>
        </Stack>
      </Stack>
      <Stack mt={"2rem"} direction={{ xs: "column", md: "row" }}>
        <Stack mb="3rem">
          <Typography
            sx={{
              color: "#8E8E93",
              fontSize: "1.25rem",
              fontWeight: 500,
              mb: "1rem",
              textAlign: { xs: "start", sm: "inherit" },
            }}
          >
            Informations
          </Typography>
          <Stack
            sx={{
              textAlign: "start",
              ml: { xs: 2, md: 30 },
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
              ml: { xs: 2, md: 30 },
              width: { xs: "18rem", sm: "20rem", md: "24.625rem" },
              height: "1px",
            }}
          />
          <Stack
            sx={{
              textAlign: "start",
              ml: { xs: 2, md: 30 },
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
              ml: { xs: 3, md: 30 },
              width: { xs: "18rem", sm: "20rem", md: "24.625rem" },
              height: "1px",
            }}
          />
          <Stack
            sx={{
              textAlign: "start",
              ml: { xs: 2, md: 30 },
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
              ml: { xs: 3, md: 30 },
              width: { xs: "18rem", sm: "20rem", md: "24.625rem" },
              height: "1px",
            }}
          />
          <Stack
            sx={{
              textAlign: "start",
              ml: { xs: 2, md: 30 },
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
              ml: { xs: 3, md: 30 },
              width: { xs: "18rem", sm: "20rem", md: "24.625rem" },
              height: "1px",
            }}
          />
          <Stack
            sx={{
              textAlign: "start",
              ml: { xs: 2, md: 30 },
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
              ml: { xs: 2, md: 30 },
              width: { xs: "18rem", sm: "20rem", md: "24.625rem" },
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
                ml: { xs: 2, md: 30 },
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
              ml: { xs: 2, md: 30 },
              width: { xs: "18rem", sm: "20rem", md: "24.625rem" },
              height: "1px",
            }}
          />
        </Stack>
        <Stack
          sx={{
            ml: { md: "12.5rem" },
          }}
        >
          <Typography
            variant="h6"
            color={"#8E8E93"}
            fontSize={"1.25rem"}
            fontWeight={500}
            textAlign={"start"}
            mb={"1rem"}
          >
            Episodes
          </Typography>
          <Stack
            sx={{
              textAlign: "start",
              gap: 0.3,
              ml: { xs: 2 },
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
