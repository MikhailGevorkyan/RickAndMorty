import LocationsLogo from "../components/LocationsLogo";
import {
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
import { FC } from "react";
import LocationCard from "../components/LocationCard";
import { useGetLocationsQuery } from "../features/api/apiSlice";
import { Button } from "@mui/material";
import AdvancedFilters from "../components/AdvancedFilters";
import LoadMoreButton from "../components/LoadMoreButton";

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
  const { data, isLoading, error } = useGetLocationsQuery({});

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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <TextField
          placeholder="Filter by name..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{
            width: "326px",
          }}
        />
        <FormControl
          sx={{
            display: { xs: "none", md: "block" },
            width: "240px",
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
            width: "240px",
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
      </div>

      <AdvancedFilters />

      <Grid container gap={7} mt={6} justifyContent="center">
        {data.results.map((location: Location) => (
          <LocationCard
            id={location.id}
            name={location.name}
            type={location.type}
          />
        ))}
      </Grid>
      <LoadMoreButton />
    </Container>
  );
};

export default Locations;
