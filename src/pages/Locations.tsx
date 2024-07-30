import Header from "../components/Header";
import header_logo from "../assets/rick-and-morty 1.png";
import { CardMedia, Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Footer from "../components/Footer";

const Locations = () => {
  return (
    <>
      <Header />
      <CardMedia
        component={"img"}
        src={header_logo}
        sx={{
          width: 326,
          margin: "2rem auto 0",
        }}
      />
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
      <Footer />
    </>
  );
};

export default Locations;
