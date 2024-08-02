import { FC, useState } from "react";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import MainLogo from "../components/logos/MainLogo";
import CharacterCard from "../components/cards/CharacterCard";
import { useGetCharactersQuery } from "../features/api/apiSlice";
import AdvancedFilters from "../components/AdvancedFilters";
import LoadMoreButton from "../components/LoadMoreButton";
import SearchFilter from "../components/SearchFilter";
import species from "../components/species";
import MenuItemCard from "../components/cards/MenuItemCard";

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
  const [search, setSearch] = useState("");
  const [pageCounter, setPageCounter] = useState(1);

  const { data, isLoading, error } = useGetCharactersQuery({
    name: search,
    page: pageCounter,
  });

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
        <SearchFilter
          setSearch={setSearch}
          placeholder="Filter by name..."
          xsWidth="19.5rem"
          mdWidth="15rem"
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
            {species.map((species) => (
              <MenuItemCard
                key={species.id}
                name={species.name}
                id={species.id}
              />
            ))}
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
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
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
      <LoadMoreButton
        pageCounter={pageCounter}
        setPageCounter={setPageCounter}
      />
    </Container>
  );
};

export default Characters;
