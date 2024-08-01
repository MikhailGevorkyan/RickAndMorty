import { FC } from "react";
import {
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MainLogo from "../components/MainLogo";
import CharacterCard from "../components/CharacterCard";
import { useGetCharactersQuery } from "../features/api/apiSlice";
import { Button } from "@mui/material";
import AdvancedFilters from "../components/AdvancedFilters";
import LoadMoreButton from "../components/LoadMoreButton";

interface Character {
  id: number;
  created: string;
  gender: string;
  name: string;
  species: string;
  status: string;
  type: string;
  url: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
  episode: string[];
  origin: {
    name: string;
    url: string;
  };
}

const Characters: FC = () => {
  const { data, isLoading, error } = useGetCharactersQuery({});

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
      <MainLogo />
      <Stack direction="row" spacing={3} justifyContent="center" mt={6}>
        <TextField
          placeholder="Filter by name..."
          sx={{
            width: { xs: "312px", md: "240px" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl
          sx={{
            display: { xs: "none", md: "block" },
            width: "240px",
          }}
        >
          <InputLabel
            htmlFor="species"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            Species
          </InputLabel>
          <Select
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <MenuItem value="human">Human</MenuItem>
            <MenuItem value="humanoid">Humanoid</MenuItem>
            <MenuItem value="alien">Alien</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            display: { xs: "none", md: "block" },
            width: "240px",
          }}
        >
          <InputLabel
            htmlFor="gender"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            Gender
          </InputLabel>
          <Select
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="genderless">Genderless</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{
            display: { xs: "none", md: "block" },
            width: "240px",
          }}
        >
          <InputLabel
            htmlFor="status"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            Status
          </InputLabel>
          <Select
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <MenuItem>Alive</MenuItem>
            <MenuItem>Dead</MenuItem>
            <MenuItem>Unknown</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <AdvancedFilters />

      <Grid container gap={2} mt={6} justifyContent="center">
        {data.results.map((character: Character) => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
            species={character.species}
            name={character.name}
          />
        ))}
      </Grid>
      <LoadMoreButton />
    </Container>
  );
};

export default Characters;
