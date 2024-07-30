import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./Characters.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../assets/main_logo.png";
import {
  CardMedia,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface Character {
  id: number;
  created: string;
  gender: string;
  name: string;
  species: string;
  status: string;
  type: string;
  url: string;
  image: string;
  location: {
    name: string;
    url: string;
  };
}

const Characters: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    (async function () {
      await axios
        .get("https://rickandmortyapi.com/api/character")
        .then((response) => setCharacters(response.data.results));
    })();
  }, []);

  return (
    <>
      <Header />

      <CardMedia
        component={"img"}
        src={logo}
        sx={{
          width: "31.25rem",
          margin: "2.3rem auto 0",
        }}
      />

      <div className={styles.filters}>
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
        <TextField placeholder="Species" />
        <TextField placeholder="Gender" />
        <TextField placeholder="Status" />
      </div>
      <Grid container gap={2} marginTop={"2rem"} justifyContent={"center"}>
        {characters.map((character) => {
          return (
            <Grid
              item
              key={character.id}
              border={"1px solid rgba(0, 0, 0, 0.14)"}
              xs={2.5}
              sx={{
                borderRadius: 2,
                width: "240px !important",
              }}
            >
              <CardMedia
                component={"img"}
                src={character.image}
                sx={{
                  height: 180,
                }}
              />
              <Typography
                variant="h6"
                fontSize={"1.25rem"}
                fontWeight={500}
                textAlign={"left"}
                marginLeft={2}
              >
                {character.name}
              </Typography>
              <Typography
                paragraph
                fontSize={"0.875rem"}
                color={"rgba(0, 0, 0, 0.6)"}
                textAlign={"left"}
                marginLeft={2}
              >
                {character.species}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
      <Footer />
    </>
  );
};

export default Characters;
