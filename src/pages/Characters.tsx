import { FC, useState, useEffect } from "react";
import {
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import MainLogo from "../components/logos/MainLogo";
import CharacterCard from "../components/cards/CharacterCard";
import { useGetCharactersQuery } from "../features/api/apiSlice";
import LoadMoreButton from "../components/buttons/LoadMoreButton";
import SearchFilter from "../components/SearchFilter";
import species from "../components/filterData/species";
import type { Character } from "../components/interfaces/projectInterfaces";
import AdvancedFiltersCharacters from "../components/AdvancedFiltersCharacters";
import LoadingIcon from "../components/logos/LoadingIcon";

const Characters: FC = () => {
  const [search, setSearch] = useState("");
  const [pageCounter, setPageCounter] = useState(1);
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [genderFilter, setGenderFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filtersChanged, setFiltersChanged] = useState(false);

  const {
    data: characters,
    isLoading,
    error,
  } = useGetCharactersQuery({
    name: search,
    page: pageCounter,
    species: speciesFilter,
    gender: genderFilter,
    status: statusFilter,
  });

  const handleSpeciesChange = (event: SelectChangeEvent<string>) => {
    setSpeciesFilter(event.target.value);
    setFiltersChanged(true);
  };

  const handleGenderChange = (event: SelectChangeEvent<string>) => {
    setGenderFilter(event.target.value);
    setFiltersChanged(true);
  };

  const handleStatusChange = (event: SelectChangeEvent<string>) => {
    setStatusFilter(event.target.value);
    setFiltersChanged(true);
  };

  useEffect(() => {
    if (filtersChanged) {
      setFiltersChanged(false);
    }
  }, [search, speciesFilter, genderFilter, statusFilter]);

  return (
    <Container sx={{ marginBottom: 13 }}>
      <MainLogo />
      <Stack direction="row" spacing={3} justifyContent="center" mt={6}>
        <SearchFilter
          setSearch={setSearch}
          placeholder="Filter by name..."
          xsWidth="19.5rem"
          mdWidth="15rem"
        />
        <FormControl
          sx={{ display: { xs: "none", md: "block" }, width: "15rem" }}
        >
          <InputLabel
            htmlFor="species"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Species
          </InputLabel>
          <Select
            value={speciesFilter}
            input={<OutlinedInput label="Species" />}
            onChange={(e) => handleSpeciesChange(e)}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {species.map((specie) => (
              <MenuItem key={specie.id} value={specie.name}>
                {specie.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{ display: { xs: "none", md: "block" }, width: "15rem" }}
        >
          <InputLabel
            htmlFor="gender"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Gender
          </InputLabel>
          <Select
            value={genderFilter}
            input={<OutlinedInput label="Gender" />}
            onChange={(e) => handleGenderChange(e)}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="genderless">Genderless</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl
          sx={{ display: { xs: "none", md: "block" }, width: "15rem" }}
        >
          <InputLabel
            htmlFor="status"
            sx={{ display: { xs: "none", md: "block" } }}
          >
            Status
          </InputLabel>
          <Select
            input={<OutlinedInput label="Status" />}
            value={statusFilter}
            onChange={(e) => handleStatusChange(e)}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <AdvancedFiltersCharacters
        setGenderFilter={setGenderFilter}
        setSpeciesFilter={setSpeciesFilter}
        setStatusFilter={setStatusFilter}
        setFiltersChanged={setFiltersChanged}
      />

      <Grid container gap={2} mt={6} justifyContent="center">
        {isLoading ? (
          <LoadingIcon />
        ) : error ? (
          <Typography variant="h4" mt={4} color="error">
            No characters were found matching the selected filters.
          </Typography>
        ) : characters &&
          characters.results &&
          characters.results.length > 0 ? (
          characters.results.map((character: Character) => (
            <CharacterCard key={character.id} data={character} />
          ))
        ) : (
          !isLoading &&
          !error &&
          (search || speciesFilter || genderFilter || statusFilter) && (
            <Typography variant="h4" mt={4}>
              No characters found matching the selected filters.
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

export default Characters;
