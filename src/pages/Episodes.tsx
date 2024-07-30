import Header from "../components/Header";
import header_logo from "../assets/rick-and-morty2 1.png";
import { CardMedia, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../components/Footer";

const Episodes = () => {
  return (
    <>
      <Header />
      <CardMedia
        component={"img"}
        src={header_logo}
        sx={{
          width: 267,
          margin: "2rem auto 0",
        }}
      />
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
      <Footer />
    </>
  );
};

export default Episodes;
