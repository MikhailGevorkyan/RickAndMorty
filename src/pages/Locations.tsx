import LocationsLogo from "../components/logos/LocationsLogo";
import {
  Box,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { FC, useState } from "react";
import LocationCard from "../components/cards/LocationCard";
import { useGetLocationsQuery } from "../features/api/apiSlice";
import { Button } from "@mui/material";
import AdvancedFilters from "../components/AdvancedFilters";
import LoadMoreButton from "../components/LoadMoreButton";
import SearchFilter from "../components/SearchFilter";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

const Locations: FC = () => {
  const [search, setSearch] = useState("");
  const [pageCounter, setPageCounter] = useState(1);

  const { data, isLoading, error } = useGetLocationsQuery({
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
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <MenuItem value="alive">Alive</MenuItem>
            <MenuItem value="dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <AdvancedFilters />

      <Grid container gap={8} mt={6} justifyContent="center">
        {data.results.map((location: Location) => (
          <LocationCard
            key={location.id}
            id={location.id}
            name={location.name}
            type={location.type}
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

export default Locations;
