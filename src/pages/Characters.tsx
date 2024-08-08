import { FC, useState, useEffect } from 'react';
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
} from '@mui/material';
import MainLogo from '../components/logos/MainLogo';
import LoadMoreButton from '../components/buttons/LoadMoreButton';
import SearchFilter from '../components/SearchFilter';
import { species, genders, statuses } from '../components/constants/constants';
import AdvancedFiltersCharacters from '../components/AdvancedFiltersCharacters';
import { useQuery } from '@apollo/client';
import { Character } from '../__generated__/graphql';
import { GET_CHARACTERS } from '../service/graphql/queries';
import {
  renderLoading,
  renderError,
  renderNoResults,
  renderCharacters,
} from '../components/renderHelpers';

const Characters: FC = () => {
  const [search, setSearch] = useState('');
  const [pageCounter, setPageCounter] = useState(1);
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [genderFilter, setGenderFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [filtersChanged, setFiltersChanged] = useState(false);

  const { data, loading, error, refetch, fetchMore } = useQuery(
    GET_CHARACTERS,
    {
      variables: {
        name: search,
        species: speciesFilter,
        gender: genderFilter,
        status: statusFilter,
        page: pageCounter,
      },
    },
  );

  const characters = data?.characters;

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
      refetch();
      setFiltersChanged(false);
    }
  }, [
    filtersChanged,
    search,
    speciesFilter,
    genderFilter,
    statusFilter,
    refetch,
  ]);

  const handleLoadMore = () => {
    if (characters?.info?.next) {
      fetchMore({
        variables: {
          page: characters.info.next,
        },
      }).then(() => {
        setPageCounter(pageCounter + 1);
      });
    }
  };

  const filteredCharacters = characters?.results.filter(
    (character: Character) =>
      speciesFilter ? character.species === speciesFilter : true,
  );

  const renderContent = () => {
    if (loading) {
      return renderLoading();
    } else if (error) {
      return renderError();
    } else if (filteredCharacters?.length > 0) {
      return renderCharacters(characters.results);
    } else {
      return renderNoResults(
        'No characters found matching the selected filters.',
      );
    }
  };

  <Grid container gap={2} mt={6} justifyContent="center">
    {renderContent()}
  </Grid>;

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
          sx={{ display: { xs: 'none', md: 'block' }, width: '15rem' }}
        >
          <InputLabel
            htmlFor="species"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Species
          </InputLabel>
          <Select
            value={speciesFilter}
            input={<OutlinedInput label="Species" />}
            onChange={handleSpeciesChange}
            sx={{ display: { xs: 'none', md: 'flex' } }}
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
          sx={{ display: { xs: 'none', md: 'block' }, width: '15rem' }}
        >
          <InputLabel
            htmlFor="gender"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Gender
          </InputLabel>
          <Select
            value={genderFilter}
            input={<OutlinedInput label="Gender" />}
            onChange={handleGenderChange}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {genders.map((gender) => (
              <MenuItem key={gender.id} value={gender.name}>
                {gender.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{ display: { xs: 'none', md: 'block' }, width: '15rem' }}
        >
          <InputLabel
            htmlFor="status"
            sx={{ display: { xs: 'none', md: 'block' } }}
          >
            Status
          </InputLabel>
          <Select
            input={<OutlinedInput label="Status" />}
            value={statusFilter}
            onChange={handleStatusChange}
            sx={{ display: { xs: 'none', md: 'flex' } }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {statuses.map((status) => (
              <MenuItem key={status.id} value={status.name}>
                {status.name}
              </MenuItem>
            ))}
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
        {renderContent()}
      </Grid>
      {characters?.info?.next && (
        <LoadMoreButton handleLoadMore={handleLoadMore} />
      )}
    </Container>
  );
};

export default Characters;
