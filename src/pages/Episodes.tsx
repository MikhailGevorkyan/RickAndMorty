import { Container, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import EpisodesLogo from "../components/EpisodesLogo";

const Episodes = () => {
  return (
    <Container>
      <EpisodesLogo />
      <TextField
        placeholder="Filter by name or episode (ex. S01 or S01E02)"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        sx={{
          marginTop: "1rem",
          width: "25rem",
        }}
      />
    </Container>
  );
};

export default Episodes;
