import { CardMedia } from "@mui/material";

const EpisodesLogo = () => (
  <CardMedia
    component={"img"}
    src={"/images/episodes_logo.png"}
    sx={{
      width: 267,
      margin: "2rem auto 1rem",
    }}
  />
);

export default EpisodesLogo;
