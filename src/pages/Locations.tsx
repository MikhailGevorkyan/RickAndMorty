import LocationsLogo from "../components/LocationsLogo";
import {
  CardMedia,
  Container,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Locations = () => {
  return (
    <Container>
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
        />
        <TextField placeholder="Type"></TextField>
        <TextField placeholder="Dimension"></TextField>
      </div>
    </Container>
  );
};

export default Locations;
