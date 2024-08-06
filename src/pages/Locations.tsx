import LocationsLogo from "../components/logos/LocationsLogo";
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
  Typography,
} from "@mui/material";
import { FC, useEffect, useState } from "react";
import LocationCard from "../components/cards/LocationCard";
import { useGetLocationsQuery } from "../features/api/apiSlice";
import AdvancedFiltersLocations from "../components/AdvancedFiltersLocations";
import LoadMoreButton from "../components/buttons/LoadMoreButton";
import SearchFilter from "../components/SearchFilter";
import type { Location } from "../components/interfaces/projectInterfaces";
import locationTypes from "../components/filterData/locationTypes";
import locationDimensions from "../components/filterData/locationDimensions";
import LoadingIcon from "../components/logos/LoadingIcon";

const Locations: FC = () => {
  const [search, setSearch] = useState("");
  const [pageCounter, setPageCounter] = useState(1);
  const [typesFilter, setTypesFilter] = useState("");
  const [dimensionsFilter, setDimensionsFilter] = useState("");
  const [filtersChanged, setFiltersChanged] = useState(false);

  const {
    data: locations,
    isLoading,
    error,
  } = useGetLocationsQuery({
    name: search,
    page: pageCounter,
    type: typesFilter,
    dimension: dimensionsFilter,
  });

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
      setFiltersChanged(false);
    }
  }, [search, typesFilter, dimensionsFilter]);

  return (
    <Container
      sx={{
        marginBottom: 13,
      }}
    >
      <LocationsLogo />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
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
            display: { xs: "none", md: "block" },
            width: "15rem",
          }}
        >
          <InputLabel
            htmlFor="type"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            Type
          </InputLabel>
          <Select
            value={typesFilter}
            onChange={(e) => handleTypesChange(e)}
            input={<OutlinedInput label="Type" />}
            sx={{
              display: { xs: "none", md: "block" },
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
            display: { xs: "none", md: "block" },
            width: "15rem",
          }}
        >
          <InputLabel
            htmlFor="dimension"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            Dimension
          </InputLabel>
          <Select
            value={dimensionsFilter}
            input={<OutlinedInput label="Dimension" />}
            onChange={(e) => handleDimensionsChange(e)}
            sx={{
              display: { xs: "none", md: "block" },
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
        {isLoading ? (
          <LoadingIcon />
        ) : error ? (
          <Typography variant="h4">
            No locations were found matching the selected filters.
          </Typography>
        ) : locations && locations.results && locations.results.length > 0 ? (
          locations.results.map((location: Location) => (
            <LocationCard key={location.id} data={location} />
          ))
        ) : (
          !isLoading &&
          !error &&
          (search || typesFilter || dimensionsFilter) && (
            <Typography variant="h4" mt={4}>
              No locations were found matching the selected filters.
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

export default Locations;
