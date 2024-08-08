import LocationsLogo from '../components/logos/LocationsLogo';
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import { FC, useEffect, useState } from 'react';
import AdvancedFiltersLocations from '../components/AdvancedFiltersLocations';
import LoadMoreButton from '../components/buttons/LoadMoreButton';
import SearchFilter from '../components/SearchFilter';
import {
  locationTypes,
  locationDimensions,
} from '../components/constants/constants';
import { useQuery } from '@apollo/client';
import { GET_LOCATIONS } from '../service/graphql/queries';
import {
  renderLoading,
  renderError,
  renderNoResults,
  renderLocations,
} from '../components/renderHelpers';
import { Location } from '../__generated__/graphql';

const Locations: FC = () => {
  const [search, setSearch] = useState('');
  const [pageCounter, setPageCounter] = useState(1);
  const [typesFilter, setTypesFilter] = useState('');
  const [dimensionsFilter, setDimensionsFilter] = useState('');
  const [filtersChanged, setFiltersChanged] = useState(false);

  const { data, loading, error, refetch, fetchMore } = useQuery(GET_LOCATIONS, {
    variables: {
      name: search,
      type: typesFilter,
      dimension: dimensionsFilter,
    },
  });

  const locations = data?.locations;

  const handleTypesChange = (event: SelectChangeEvent<string>) => {
    setTypesFilter(event.target.value);
    setFiltersChanged(true);
  };

  const handleDimensionsChange = (event: SelectChangeEvent<string>) => {
    setDimensionsFilter(event.target.value);
    setFiltersChanged(true);
  };

  useEffect(() => {
    if (filtersChanged) {
      refetch();
      setFiltersChanged(false);
    }
  }, [filtersChanged, search, typesFilter, dimensionsFilter, refetch]);

  const handleLoadMore = () => {
    if (locations?.info?.next) {
      fetchMore({
        variables: {
          page: locations.info.next,
        },
      }).then(() => {
        setPageCounter(pageCounter + 1);
      });
    }
  };

  const renderContent = () => {
    if (loading) {
      return renderLoading();
    } else if (error) {
      return renderError();
    } else if (locations && locations.results && locations.results.length > 0) {
      return renderLocations(locations.results as Location[]);
    } else {
      return renderNoResults(
        'No episodes found matching the selected filters.',
      );
    }
  };

  return (
    <Container
      sx={{
        marginBottom: 13,
      }}
    >
      <LocationsLogo />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '2rem',
        }}
      >
        <SearchFilter
          setSearch={setSearch}
          placeholder="Filter by name..."
          xsWidth="19.5rem"
          mdWidth="20.375rem"
        />
        <FormControl
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '15rem',
          }}
        >
          <InputLabel
            htmlFor="type"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            Type
          </InputLabel>
          <Select
            value={typesFilter}
            onChange={(e) => handleTypesChange(e)}
            input={<OutlinedInput label="Type" />}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {locationTypes.map((type) => (
              <MenuItem key={type.id} value={type.name}>
                {type.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{
            display: { xs: 'none', md: 'block' },
            width: '15rem',
          }}
        >
          <InputLabel
            htmlFor="dimension"
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            Dimension
          </InputLabel>
          <Select
            value={dimensionsFilter}
            input={<OutlinedInput label="Dimension" />}
            onChange={(e) => handleDimensionsChange(e)}
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            <MenuItem value="">
              <em>All</em>
            </MenuItem>
            {locationDimensions.map((dimension) => (
              <MenuItem key={dimension.id} value={dimension.name}>
                {dimension.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      <AdvancedFiltersLocations
        setTypesFilter={setTypesFilter}
        setDimensionsFilter={setDimensionsFilter}
        setFiltersChanged={setFiltersChanged}
      />
      <Grid container gap={8} mt={6} justifyContent="center">
        {renderContent()}
      </Grid>
      {locations?.info?.next && (
        <LoadMoreButton handleLoadMore={handleLoadMore} />
      )}
    </Container>
  );
};

export default Locations;
