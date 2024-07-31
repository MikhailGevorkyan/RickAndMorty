import { FC, useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  CardMedia,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MainLogo from "../components/MainLogo";
import CharacterCard from "../components/CharacterCard";

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
}

const Characters: FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async function () {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => setCharacters(response.data.results));
    })();
  }, []);

  return (
    <Container>
      <MainLogo />
      <Stack direction="row" spacing={2} justifyContent="center" mt={6}>
        <TextField
          placeholder="Filter by name..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <FormControl>
          <InputLabel htmlFor="species">Species</InputLabel>
          <Select value="species" id="species" label="Species">
            <MenuItem value="human">Human</MenuItem>
            <MenuItem value="humanoid">Humanoid</MenuItem>
            <MenuItem value="alien">Alien</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="gender">Gender</InputLabel>
          <Select>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="genderless">Genderless</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="status">Status</InputLabel>
          <Select>
            <MenuItem>Alive</MenuItem>
            <MenuItem>Dead</MenuItem>
            <MenuItem>Unknown</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Grid container gap={2} mt={6} justifyContent="center">
        {characters.map((character) => (
          <CharacterCard
            id={character.id}
            key={character.id}
            image={character.image}
            species={character.species}
            name={character.name}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Characters;
